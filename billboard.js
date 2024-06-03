import * as THREE from 'three';

class Billboard {
    constructor(item, faceMaterial, infoContent, header, textures) {
        this.item = item;
        this.faceMaterial = faceMaterial;
        this.infoContent = infoContent;
        this.header = header;
        this.textureIndex = 0; // Index of current texture
        this.textures = textures;
    }

    changeFace(right) {
        const indexChange = right ? 1 : -1;
        const newIndex = this.textureIndex + indexChange;
        if (newIndex == this.textures.length) {
            this.textureIndex = 0;
        } 
        else if (newIndex < 0) {
            this.textureIndex = this.textures.length - 1;
        }
        else {
            this.textureIndex = newIndex;
        }
        const path = this.textures[this.textureIndex];
        const textureLoader = new THREE.TextureLoader();
        this.faceMaterial.uniforms.textureMap.value = textureLoader.load(path, (texture) => {
            texture.encoding = THREE.sRGBEncoding;
        });
    }
}

export default Billboard;