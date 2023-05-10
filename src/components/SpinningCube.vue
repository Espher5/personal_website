<template>
    <div ref="container"></div>
  </template>
  
<script>
import * as THREE from 'three';
import { Clock } from 'three';

export default {
    name: 'SpinningCube',
    mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 0;

    let tunnelDepth = 0;
    let particleBatchDepth = -40;
    let offset= new THREE.Vector3(0, 0, particleBatchDepth);
    let nextParticlesIndex = 0;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.container.appendChild(renderer.domElement);
    
    let particles = []
    particles[0] = createParticles(offset);
    scene.add(particles[0]);

    const animate = () => {
        requestAnimationFrame(animate);
        camera.position.z -= 0.1;
        
        if (camera.position.z <= tunnelDepth - (particleBatchDepth * 3/4) ) {
            //Update total depth
            tunnelDepth += particleBatchDepth;

            //Generate offset for new particles
            offset = new THREE.Vector3(0, 0, tunnelDepth);
            particles[nextParticlesIndex] = createParticles(offset);
            scene.add(particles[nextParticlesIndex]);

            // Update index and remove old particles
            nextParticlesIndex = (nextParticlesIndex + 1 ) % 2
            scene.remove(particles[nextParticlesIndex])
        }

        renderer.render(scene, camera);
    };
    animate();

    function createParticles(offset) {
        const geometry = new THREE.BufferGeometry();
        const positions = createPositions(offset);
        const colors = createColors();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true });
        return new THREE.Points(geometry, material);
    }

    function createPositions(offset) {
        const positions = new Float32Array(10000 * 3);
        for (let i = 0; i < 10000; i++) {
            const pos = new THREE.Vector3(
            Math.random() * 80 - 40,
            Math.random() * 80 - 40,
            Math.random() * 400 + offset.z
            );
            positions[i * 3] = pos.x;
            positions[i * 3 + 1] = pos.y;
            positions[i * 3 + 2] = pos.z;
        }
        return positions;
    }

    function createColors() {
        const colors = new Float32Array(10000 * 3);
        for (let i = 0; i < 10000; i++) {
            const grey = Math.random();
            colors[i * 3] = grey;
            colors[i * 3 + 1] = grey;
            colors[i * 3 + 2] = grey;
        }
        return colors;
    }
  }
};
</script>
  
<style scoped>
div {
    width: 100%;
    height: 100%;
}
</style>
  