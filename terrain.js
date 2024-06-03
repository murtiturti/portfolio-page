import * as THREE from 'three'
import Noise from './noise.js';


export function generateTerrain(terrainWidth, terrainDepth, terrainSegments) {
    var terrainGeom = new THREE.PlaneGeometry(terrainWidth, terrainDepth, terrainSegments, terrainSegments);
    var terrainMat = new THREE.MeshBasicMaterial({color: 0x363636, side: THREE.DoubleSide, opacity: 0.05});
    var terrainMesh = new THREE.Mesh(terrainGeom, terrainMat);

    return {
        geom: terrainGeom,
        mat: terrainMat,
        mesh: terrainMesh
    }
}

export function applyNoise(terrainObj, terrainWidth, terrainDepth, ravineDepth) {
    var noise = new Noise();
    var positions = terrainObj.geom.attributes.position.array;

    const scale = 0.05;

    const ravineWidth = terrainWidth * 0.4 * scale; // 30% of terrain width
    const centerX = (terrainWidth / 2) * scale;

    for (let i = 0; i < positions.length; i += 3) {
        const x = (positions[i] + (terrainWidth / 2)) * scale; // x pos in the noise grid
        const y = (positions[i + 1] + (terrainDepth / 2)) * scale; // y pos in the noise grid
        let z = noise.perlin(x, y); // noise value, not clipped
        z = clip(z, -1, 1);

        const dx = Math.abs(x - centerX);

        const blendFactor = Math.min(1, dx / ravineWidth);

        positions[i + 2] = (z * blendFactor * 20) + (1 - blendFactor) * ravineDepth;

    }
    terrainObj.mesh.geometry.verticesNeedUpdate = true;
    terrainObj.mesh.geometry.attributes.position.needsUpdate = true;
    terrainObj.mesh.geometry.computeVertexNormals();

    let wireframe = new THREE.WireframeGeometry(terrainObj.mesh.geometry);
    let line = new THREE.LineSegments(wireframe);
    line.material.color.setHex(0x00aa00);
    return line;
}

export function animateTerrain(terrainObj, terrainWidth, terrainDepth, ravineDepth, offsetX, offsetY, line) {
    var noise = new Noise();
    var positions = terrainObj.geom.attributes.position.array;

    const scale = 0.05;

    const ravineWidth = terrainWidth * 0.4 * scale; // 30% of terrain width
    const centerX = (terrainWidth / 2) * scale;

    for (let i = 0; i < positions.length; i += 3) {
        const x = (positions[i] + (terrainWidth / 2) + offsetX) * scale; // x pos in the noise grid
        const y = (positions[i + 1] + (terrainDepth / 2) + offsetY) * scale; // y pos in the noise grid
        let z = noise.perlin(x, y); // noise value, not clipped
        z = clip(z, -1, 1);

        const dx = Math.abs(x - centerX);

        const blendFactor = Math.min(1, dx / ravineWidth);

        positions[i + 2] = (z * blendFactor * 20) + (1 - blendFactor) * ravineDepth;

    }
    terrainObj.mesh.geometry.verticesNeedUpdate = true;
    terrainObj.mesh.geometry.attributes.position.needsUpdate = true;
    terrainObj.mesh.geometry.computeVertexNormals();

    line.geometry = terrainObj.geom;
} 

function clip(val, min, max) {
    if (val < min) {
        return min;
    }
    else if (val > max) {
        return max;
    }
    else {
        return val;
    }
}