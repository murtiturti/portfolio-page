import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { texture } from 'three/examples/jsm/nodes/Nodes.js';
import Billboard from './billboard';

class Spawner {
    constructor(data, scene) {
        this.billboards = [];
        this.headers = data.headers;
        this.infoContents = data.contents;
        this.billboardPaths = data.paths;
        this.textures = data.textures;
        this.activeBillboard;
        this.boardIndex = 0;
        this.loader = new GLTFLoader();
        this.right = true;
        this.startPosition = new THREE.Vector3(8, -4, -90);
        this.scene = scene;
        this.loadCount = 0;
        this.HOLO_HOVER_FACTOR = 0.00075;
        this.holoHoverAcc = 0.0;
        this.holoHoverMax = 0.3;
        this.vertexShader = `
            varying vec3 vNormal;
            varying vec3 vPosition;
        
            void main() {
                vNormal = normalize(normalMatrix * normal);
                vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;
        this.fragmentShader = `
            varying vec3 vNormal;
            varying vec3 vPosition;
        
            uniform float time;
        
            void main() {
                float intensity = dot(vNormal, vec3(0.0, 0.0, 1.0));
                vec3 baseColor = vec3(0.0, 1.0, 1.0) * intensity;
        
                float scanline = sin(vPosition.y * 50.0 + time * 10.0) * 0.1;
                baseColor += scanline;
        
                float noise = (fract(sin(dot(vPosition.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.1;
                baseColor += vec3(noise);
        
                gl_FragColor = vec4(baseColor, 0.5);
            }
        `;
        this.holoShader = new THREE.ShaderMaterial({vertexShader: this.vertexShader, fragmentShader: this.fragmentShader, transparent: true,
            uniforms: {
                time: {value: 1.0}
            }
        });
        this.faceShader = new THREE.ShaderMaterial({
            uniforms: {
                textureMap: { value: texture },
                time: {value: 0.0 }
            },
            vertexShader: `
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;

            void main() {
                vUv = uv;
                vNormal = normalize(normalMatrix * normal);
                vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
                vUv.y = 1.0 - vUv.y;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
            `,
            fragmentShader: `
                uniform sampler2D textureMap;
                uniform float time;
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vPosition;

                void main() {
                    vec4 texelColor = texture2D(textureMap, vUv);

                    float scanline = sin(20.0 * vPosition.y + time * 10.0) * 0.1;
                    float noise = fract(sin(dot(vPosition.xy, vec2(12.9898, 78.233))) * 43758.5453) * 0.3;
                    vec3 hologramColor = vec3(0.0, 1.0, 1.0) * 0.3;

                    if (texelColor.a == 0.0) {
                        gl_FragColor = vec4(hologramColor + scanline + noise, 0.9);
                    }
                    else {
                        gl_FragColor = vec4(texelColor.rgb, 1.0);
                    }

                }
            `,
            transparent: true
        });
        this.billboardObjects = [];
        this.activeBillboardInstance;
        this.init();
    }

    init() {
        this.billboardPaths.forEach((path) => {
            console.log("Loading " + path);
            const xPos = this.right ? this.startPosition.x : -1 * this.startPosition.x;
            const yRotation = this.right ? -Math.PI / 1.5 : -Math.PI / 3;
            const rightVal = this.right.valueOf();
            this.right = !this.right;
            

            this.loader.load(path, (gltf) => {
                // on load function
                const textureLoader = new THREE.TextureLoader();
                const texture = textureLoader.load(this.textures[this.loadCount][0], (t) => {
                    t.encoding = THREE.sRGBEncoding;
                });
                let faceMat = null;
                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        if (child.name !== 'Cylinder') {
                            if (child.material) {
                                if (child.material.name === 'Material.006') {
                                    this.faceShader.uniforms.textureMap.value = texture;
                                    child.material = this.faceShader.clone();
                                    faceMat = child.material;
                                }
                                else {
                                    child.material = this.holoShader;
                                }
                            }
                            else {
                                child.material = this.holoShader;
                            }
                            child.position.setY(child.position.y + this.HOLO_HOVER_FACTOR);
                            this.holoHoverAcc += this.HOLO_HOVER_FACTOR;
                        }
                        else {
                            child.visible = false;
                        }
                    }
                    
                });
                const billboard = gltf.scene;
                billboard.layers.toggle(1);
                billboard.rotation.set(0, yRotation, 0);
                billboard.position.set(xPos, this.startPosition.y, this.startPosition.z);
                billboard.userData = {isTarget: true};
                billboard.visible = false;
                this.billboards.push({item: billboard, angle: yRotation, right: rightVal, horizontalPos: xPos});
                this.scene.add(billboard);
                this.billboardObjects.push(new Billboard(billboard, faceMat, this.infoContents[this.loadCount], this.headers[this.loadCount], this.textures[this.loadCount]));
                this.loadCount++;
                if (this.loadCount == this.billboardPaths.length) {
                    this.setActive();
                }
            }, undefined, (error) => { console.error(error); });
        });
        //this.setActive();
    }

    onShaderUpdate() {
        this.holoShader.uniforms.time.value += 0.01;
        this.faceShader.uniforms.time.value += 0.01;
        if (this.activeBillboard) {
            this.holoboardHover();
        }
    }

    setActive() {
        const activeBillboardObject = this.billboards[this.boardIndex];
        this.activeBillboardInstance = this.billboardObjects[this.boardIndex];
        this.right = activeBillboardObject.right;
        this.activeBillboard = activeBillboardObject.item;
        this.activeBillboard.visible = true;
    }

    setInfoText() {
        const INFO_PANEL_CONTENT = document.getElementById('info-content');
        const INFO_PANEL_HEADER = document.getElementById('header');

        INFO_PANEL_HEADER.innerHTML = this.headers[this.boardIndex];
        INFO_PANEL_CONTENT.innerHTML = this.infoContents[this.boardIndex];
    }

    load() {
        const xPos = this.right ? this.startPosition.x : -1 * this.startPosition.x;
        const yRotation = this.right ? -Math.PI / 1.5 : -Math.PI / 3;
        this.right = this.right ? false : true;
        if (this.boardIndex == this.billboardPaths.length) {
            // Index checking
            console.log("Reusing billboards");
            if (this.boardIndex >= this.billboardPaths.length - 1) {
                this.boardIndex = 0;
            }
            this.activeBillboard = this.billboards[this.boardIndex];
            this.boardIndex++;
            this.activeBillboard.position.set(xPos, this.startPosition.y, this.startPosition.z);
            this.activeBillboard.rotation.set(0, yRotation, 0);
        }
        this.loader.load(this.billboardPaths[this.boardIndex], 
            (gltf) => {
                console.log('Loading new at index' + this.boardIndex);
                const billboard = gltf.scene;
                this.activeBillboard = billboard;

                this.billboards.push(billboard);
                billboard.rotation.set(0, yRotation, 0);
                billboard.position.set(xPos, this.startPosition.y, this.startPosition.z);
                this.scene.add(gltf.scene);
                billboard.userData = {isTarget: true};
            }, 
            undefined, 
            (error) => { 
                console.error(error); 
            }
        );
        this.boardIndex++;
    }

    move(speed) {
        this.activeBillboard.position.set(
            this.activeBillboard.position.x,
            this.activeBillboard.position.y,
            this.activeBillboard.position.z + Math.abs(speed)
        );
        if (this.activeBillboard.position.z > 20) {
            this.activeBillboard.visible = false;
            this.activeBillboard.position.set(this.activeBillboard.position.x, this.activeBillboard.position.y, this.startPosition.z);
            if (this.boardIndex == this.billboards.length - 1) {
                this.boardIndex = 0;
            }
            else {
                this.boardIndex++;
            }
            this.setActive();
        }
    }

    getBillboardPosition() {
        return this.activeBillboard.position;
    }

    holoboardHover() {
        if (Math.abs(this.holoHoverAcc) >= this.holoHoverMax) {
            this.HOLO_HOVER_FACTOR *= -1;
            this.holoHoverAcc = 0.0;
        }
        this.activeBillboard.traverse((child) => {
            if (child.name !== 'Cylinder') {
                child.position.setY(child.position.y + this.HOLO_HOVER_FACTOR);
                this.holoHoverAcc += this.HOLO_HOVER_FACTOR;
            }
        });
    }

}

export default Spawner;