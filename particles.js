// Speed particles with object pooling
import * as THREE from 'three';

class Particles {
    constructor(pos, numParticles, radius) {
        this.centerPos = pos;
        this.particles = [];
        this.numParticles = numParticles;
        this.radius = radius;
    }

    initParticles(car) {
        const bbox = new THREE.Box3().setFromObject(car);
        for (let i = 0; i < this.numParticles; i++) {
            const material = new THREE.LineBasicMaterial({color: 0xffffff});
            const points = [];
            const decision = Math.random();
            if (decision <= 0.5) {
                // Left
                const start = new THREE.Vector3(
                    bbox.min.x + 0.85,
                    ((bbox.max.y - bbox.min.y) / 2) + randomRange(-0.5, 0.5),
                    bbox.max.z - randomRange(0, 0.5)
                );
                const end = new THREE.Vector3(start.x, start.y, start.z + randomRange(0.5, 1));
                points.push(start);
                points.push(end);
            }
            else {
                // Right
                const start = new THREE.Vector3(
                    bbox.max.x - 0.85,
                    ((bbox.max.y - bbox.min.y) / 2) + randomRange(-0.05, 0.05),
                    bbox.max.z - randomRange(0, 0.5)
                );
                const end = new THREE.Vector3(start.x, start.y, start.z + randomRange(0.5, 1));
                points.push(start);
                points.push(end);
            }
            const geom = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geom, material);
            this.particles.push(line);
        }
    }

    toggleParticles(on) {
        // on: bool
        this.particles.forEach(particle => {
            particle.visible = on;
        });
    }

    moveParticles(car, speed, clippingZ) {
        const bbox = new THREE.Box3().setFromObject(car);
        this.particles.forEach( particle => {
            particle.position.z += speed;
            if (particle.position.z > clippingZ) {
                const choice = Math.random();
                if (choice <= 0.5) {
                    particle.position.set(
                        bbox.min.x,
                        ((bbox.max.y - bbox.min.y) / 2) + randomRange(-0.075, 0.075),
                        bbox.max.z - 0.5
                    );
                }
                else {
                    particle.position.set(
                        bbox.max.x,
                        ((bbox.max.y - bbox.min.y) / 2) + randomRange(-0.05, 0.05),
                        bbox.max.z - 0.5
                    );
                }
                
            }
        });
    }
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

export default Particles;