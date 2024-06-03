import * as THREE from 'three';
import TWEEN, { Tween } from '@tweenjs/tween.js'
import { generateTerrain, animateTerrain, applyNoise } from './terrain.js';

import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/Addons.js';
import { RenderPass } from 'three/examples/jsm/Addons.js';
import { UnrealBloomPass } from 'three/examples/jsm/Addons.js';
import { OutputPass } from 'three/examples/jsm/Addons.js';
import { ShaderPass } from 'three/examples/jsm/Addons.js';
import Particles from './particles.js';
import Spawner from './billboardSpawner.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const INFO_PANEL_CONTENT = document.getElementById('info-content').innerHTML;
const INFO_PANEL_HEADER = document.getElementById('header').innerHTML;

const BLOOM_SCENE = 1;
const bloomLayer = new THREE.Layers();
bloomLayer.set(BLOOM_SCENE);

// Background color canvas stuff
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

var gradient = context.createLinearGradient(0, 0, 0, window.innerHeight);
gradient.addColorStop(0, '#ff0000');
gradient.addColorStop(1, '#0000ff');

context.fillStyle = gradient;
context.fillRect(0, 0, window.innerWidth, window.innerHeight);

var texture = new THREE.CanvasTexture(canvas);

scene.background = texture;

camera.position.set(0, 6, 12);
camera.rotation.set(Math.PI / 32, 0, 0);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5;
renderer.outputColorSpace = THREE.SRGBColorSpace;


const renderScene = new RenderPass(scene, camera);
const bloomPass = new  UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.6,
    0.4,
    0.3
);

const bloomComposer = new EffectComposer(renderer);
bloomComposer.renderToScreen = false;
bloomComposer.addPass(renderScene);
bloomComposer.addPass(bloomPass);

const mixPass = new ShaderPass(
    new THREE.ShaderMaterial({
        uniforms: {
            baseTexture: {value: null},
            bloomTexture: {value: bloomComposer.renderTarget2.texture}
        },
        vertexShader: document.getElementById('vertexshader').textContent,
        fragmentShader: document.getElementById('fragmentshader').textContent,
        defines: {}
    }), 'baseTexture'
);
//mixPass.needsSwap = true;

const outputPass = new OutputPass();

const finalComposer = new EffectComposer(renderer);
finalComposer.addPass(renderScene);
finalComposer.addPass(mixPass);
finalComposer.addPass(outputPass);


const ambientLight = new THREE.AmbientLight(0xff8888, 0.5);
scene.add(ambientLight);
var carModel = null;

function createSunTexture(color1, color2) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const bands = [
        {stop: 0.0, color: color1},
        {stop: 1, color: color2}
    ];

    //const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

    bands.forEach(band => {
        gradient.addColorStop(band.stop, band.color);
    });

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

const sunTexture = createSunTexture('red', 'orange');

const sunVertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;

    float noise(vec3 p) {
        return sin(p.x * 10.0 + time) * cos(p.y * 10.0 + time) * sin(p.z * 10.0 + time);
    }

    void main() {
        vUv = uv;
        vPosition = position;

        float displacement = noise(position) * 0.2;
        vec3 newPosition = position + normal + displacement;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`;

const sunFragmentShader = `
    uniform sampler2D textureMap;
    uniform float time;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
        vec4 texelColor = texture2D(textureMap, vUv);

        // Scanline parameters
        float frequency = 2.0; // Frequency of scanlines
        float thickness = 0.005; // Thickness

        vec3 modifiedColor = texelColor.rgb;

        if (vPosition.y < 0.0) {
            float scanline = sin(frequency * vPosition.y + time) * 0.05;
            float noise = fract(sin(dot(vPosition.xy, vec2(12.9898, 78.233))) * 43758.5453) * thickness;
            vec3 scanlineColor = vec3(0.0, 0.0, 0.0);

            modifiedColor += (scanlineColor + scanline + noise);
        }

        //texelColor.rgb = texelColor.rgb * 0.8;
        //gl_FragColor = texelColor;
        gl_FragColor = vec4(modifiedColor, 1.0);
    }
`;

const sunGeom = new THREE.SphereGeometry(15, 32, 32);
const sunMat = new THREE.MeshBasicMaterial({map: sunTexture});
//const sunMat = new THREE.MeshStandardMaterial({map: sunTexture});
const sunMaterial = new THREE.ShaderMaterial({
    uniforms: {
        textureMap: {value: sunTexture},
        time: {value: 0.0}
    },
    vertexShader: sunVertexShader,
    fragmentShader: sunFragmentShader,
});
const sunMesh = new THREE.Mesh(sunGeom, sunMaterial);
sunMesh.position.set(0.2, 8, -108);
sunMesh.rotation.setFromQuaternion(camera.quaternion);
sunMesh.layers.toggle(BLOOM_SCENE);
scene.add(sunMesh);

const sunLight = new THREE.DirectionalLight(0xffac00, 0.15);
sunLight.position.set(sunMesh.position.x, sunMesh.position.y - 10, sunMesh.position.z + 10);

const particles = new Particles(new THREE.Vector3(0, 0, 0), 10, 2.5);


// Load car model
const loader = new GLTFLoader();
loader.load('/cybercar.glb', function (gltf) {
    scene.add(gltf.scene);
    carModel = gltf.scene;

    var rearLightL = new THREE.DirectionalLight(0xee0000, 0.5);
    rearLightL.position.set(-1.5, 0.5, 4);
    rearLightL.target.position.set(-0.1, 0.25, 10);
    var rearLightR = new THREE.DirectionalLight(0xee0000, 0.5);
    rearLightR.position.set(1.5, 0.5, 4);
    rearLightR.target.position.set(0.1, 0.25, 10);

    carModel.add(rearLightL);
    carModel.add(rearLightR);

    carModel.position.set(0, 1, 0);
    sunLight.target.position.set(carModel.position.x, carModel.position.y, carModel.position.z);
    scene.add(sunLight);
    scene.add(sunLight.target);

    camera.position.set(carModel.position.x, carModel.position.y + 4, carModel.position.z + 11);

    particles.initParticles(carModel);
    particles.particles.forEach((particle) => {
        scene.add(particle);
        particles.toggleParticles(false);
    });
}, undefined, function (error) { 
    console.error(error);}
);

var terrain = generateTerrain(100, 100, 200);
terrain.mesh.rotation.set(Math.PI / 2, 0, 0);
terrain.mesh.position.set(0, -1, 0);
scene.add(terrain.mesh);

scene.fog = new THREE.FogExp2(0xcccccc, 0.0075);

let line = applyNoise(terrain, 100, 100, 7);
line.rotation.set(Math.PI / 2, 0, 0);
line.position.set(0, 7.05, 0);
scene.add(line);
terrain.mesh.position.set(0, 7, 0);

let offsetX = 0;
let offsetY = 0;
const movementSpeed = -0.25;
let speedPct = 0.0;
const speedObj = {speedPerctg : speedPct};

let isMouseDown = false;

const cameraStartPos = new THREE.Vector3().copy(camera.position);
const cameraBackAwayPos = new THREE.Vector3(cameraStartPos.x, cameraStartPos.y + 2, cameraStartPos.z + 5);
const cameraStartRot = new THREE.Vector3().copy(camera.rotation);

const raycaster = new THREE.Raycaster();
raycaster.far = 50;
raycaster.near = 0.1;
const pointer = new THREE.Vector2();

let clickOnBb = false;
let zoomedIn = false;


const paths = ["/holoboarduv.glb", "/holoboarduv.glb", "/holoboarduv.glb", "/holoboarduv.glb", "/holoboarduv.glb", "/holoboarduv.glb"];
const contents = ["<p class='ui'>Life is tough, but it doesn't have to be boring<br>Gamification of your life can highlight how much progress we make as humans, every single day.</p><p class='ui'>I made this webpage within a month from scratch and no THREE.js knowledge. I was roleplaying that this was a full time job and I had a boss to answer to.</p><p>And I am VERY happy about the results.</p>",
    "<p class='ui'>I am a Computer Science and Communications double major student at the University of Toronto. I love storytelling, and most importantly, using different forms of media to convey my stories.</p><p class='ui'>I believe that video games are the ultimate form of art and interactive storytelling, and I have been self-teaching myself game development since I was 14.</p>",
    "<p class='ui'>Title: Everytime<br>Artist: Jujus<br>Vocals: Diktshya Sharma<br>Rhythm Guitar: Murat Diken<br>Keys: Justin Regef<br>Saxophone: Nick Leiper<br>Bass: Haya Sardar<br>Drums: Baran Alkandemir</p><a href='https://soundcloud.com/jujus-862411031/everytime' target=_blank class='ui'>Listen on SoundCloud</a>",
    "<p class='ui'>'Her name is Jacqueline' is a narrative focused puzzle & resource management game.<br>The screenshots are from a raw prototype I created for the course 'Immersive Environment Design'</p><p class='ui'>A demo is not currently available, but this page will be updated once it is!</p>",
    "<p class='ui'>'Interval Factory' is an ear training game I developed for mobile platforms in the summer of 2023.</p><p>Currently, a <a href='https://muratdiken.itch.io/intervals' target=_blank class='ui'>demo</a> is available for Android only.</p>",
    "<p class='ui'>These are two short stories that I wrote just for fun.</p><p class='ui'><a href=#>'Bowie's Garden & Pub'</a> is about the relationship of an estranged father and son.</p><p class='ui'><a href=#>'The End'</a> is better to experience completely blind.</p>"
];
const billboardData = {
    paths: paths, 
    headers: ["Gamify Life", "About Me", "My Music", "My Games", "My Games", "My Stories"], 
    contents: contents, 
    textures: {
        0: ["/textures/gamify.png"], 
        1: ["/textures/about.png", "/textures/about2.png"],
        2: ["/textures/music.png", "/textures/music2.png"],
        3: ["/textures/jacq.png", "/textures/jacq1.png", "/textures/jacq2.png", "/textures/jacq3.png", "/textures/jacq4.png"],
        4: ["/textures/if.png", "/textures/if1.png", "/textures/if2.png"],
        5: ["/textures/stories.png", "/textures/stories2.png"]
    }
};
const spawner = new Spawner(billboardData, scene);
//spawner.setInfoText(infoTexts);
//spawner.load();

const listener = new THREE.AudioListener();
camera.add(listener);
const carStartSound = new THREE.Audio(listener);
const carMoveSound = new THREE.Audio(listener);
const audioLoader = new THREE.AudioLoader();
audioLoader.load('/audio/engineStart.mp3', function (buffer) {
    carStartSound.setBuffer(buffer);
    carStartSound.setLoop(false);
    carStartSound.setVolume(0.5);

    carStartSound.onEnded = function () {
        carStartSound.isPlaying = false;
        carMoveSound.play();
    }
});
audioLoader.load('/audio/carMove.mp3', function(buffer) {
    carMoveSound.setBuffer(buffer);
    carMoveSound.setLoop(true);
    carMoveSound.setVolume(1.0);
});

document.getElementById("car-sound-fx-toggle").addEventListener('click', (event) => {
    const icon = document.getElementById('car-sound-icon');
    if (event.target.classList.contains('mute')) {
        event.target.classList.remove('mute');
        carMoveSound.setVolume(1.0);
        carStartSound.setVolume(0.5);

        icon.src = '/unmuteIcon.svg';
    } 
    else {
        event.target.classList.add('mute');
        carMoveSound.setVolume(0.0);
        carStartSound.setVolume(0.0);
        
        icon.src = '/muteIcon.svg.png';
    }
});


document.addEventListener('click', (event) => {

    if (event.target.classList.contains('ui')) {
        return;
    }

    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObjects(scene.children);
    let bb;
    clickOnBb = false;

    for (let i = 0; i < intersects.length; i++) {
        const intersect = intersects[i].object;
        if (intersect.parent?.parent?.userData?.isTarget) {
            clickOnBb = true;
            bb = intersect.parent.parent;
            carStartSound.stop();
            carStartSound.isPlaying = false;
            carMoveSound.stop();
            carMoveSound.isPlaying = false;
            break;
        }
    }

    if (clickOnBb && !zoomedIn) {
        TWEEN.removeAll();

        spawner.setInfoText();

        const bbTargetPosition = new THREE.Vector3().copy(bb.position);
        spawner.activeBillboard.layers.toggle(1);
        
        bbTargetPosition.y += 15;
        bbTargetPosition.z += 5;
        let cameraRotationFactor = 1;
        if (!spawner.right) {
            cameraRotationFactor = -1;
            bbTargetPosition.x += 3;
        }
        else {
            bbTargetPosition.x -= 3;
        }
        new TWEEN.Tween(camera.position)
            .to(bbTargetPosition)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onStart(() => {
                isMouseDown = false;
                speedObj.speedPerctg = 0.0;
            })
            .onComplete(() => {
                zoomedIn = true;
            })
            .start();
        new TWEEN.Tween(camera.rotation)
            .to({x: camera.rotation.x, y: -Math.PI / 5.75 * cameraRotationFactor, z: camera.rotation.z + Math.PI / 64 * cameraRotationFactor})
            .start();
        return;
    }
    else if (!clickOnBb && zoomedIn) {

        carStartSound.stop();
        carStartSound.isPlaying = false;
        carMoveSound.stop();
        carMoveSound.isPlaying = false;

        spawner.activeBillboard.layers.toggle(1);

        TWEEN.removeAll();
        document.getElementById('header').innerHTML = INFO_PANEL_HEADER;
        document.getElementById('info-content').innerHTML = INFO_PANEL_CONTENT;
        new TWEEN.Tween(camera.position)
            .to(cameraStartPos)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onComplete(() => {
                zoomedIn = false;
            })
            .start();
        new TWEEN.Tween(camera.rotation)
            .to(cameraStartRot)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start();
    }
});




document.addEventListener('mousedown', (event) => {
    carStartSound.play();
    if (zoomedIn) {
        return;
    }
    isMouseDown = true;
    
    TWEEN.removeAll();
    new TWEEN.Tween(camera.position)
        .to(cameraBackAwayPos, 2500) // TODO: Make the duration dynamic w/respect to the distance from target
        .easing(TWEEN.Easing.Quadratic.In)
        .start()
        .onComplete(()=> {
            particles.toggleParticles(true);
            
        });
    new TWEEN.Tween(speedObj)
        .to({speedPerctg: 1.0}, 2500)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();
});

document.addEventListener('mouseup', () => {
    //isMouseDown = false;
    
    if (zoomedIn) {
        
        return;
    }

    TWEEN.removeAll();
    new TWEEN.Tween(camera.position)
        .to(cameraStartPos, 2500)
        .easing(TWEEN.Easing.Quadratic.In)
        .onStart( () => {
            particles.toggleParticles(false);
        })
        .start()
        .onComplete(() => {
            isMouseDown = false;
            carMoveSound.stop();
            carMoveSound.isPlaying = false;
        });
    new TWEEN.Tween(speedObj)
        .to({speedPerctg: 0.0}, 2500)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

});


function handleArrowPress(right) {
    if (clickOnBb) {
        spawner.activeBillboardInstance.changeFace(right);
    }
}

function initKeyPressListener() {
    window.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowRight':
                handleArrowPress(true);
                break;
            case 'ArrowLeft':
                handleArrowPress(false);
                break;
        }
    });
}

initKeyPressListener();

renderer.toneMappingExposure = 0.3;

function animate() {
    //animateTerrain(terrain, 100, 100);
    spawner.onShaderUpdate();
    sunMaterial.uniforms.time.value += 0.02;
    if (carModel != null) {

        if (isMouseDown) {
            offsetY += movementSpeed * speedObj.speedPerctg;
            animateTerrain(terrain, 100, 100, 7, offsetX, offsetY, line);
            particles.moveParticles(carModel, -movementSpeed * 1.5, 7);

            spawner.move(movementSpeed * speedObj.speedPerctg);
        }
    }
    TWEEN.update();
    sunMesh.rotation.y += 0.0001;
    //renderer.render(scene, camera);
    //scene.traverse(nonBloomed);
    bloomComposer.render();

    //scene.traverse(restoreMaterial);
    finalComposer.render();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    bloomComposer.setSize(window.innerWidth, window.innerHeight);
    finalComposer.setSize(window.innerWidth, window.innerHeight);
});