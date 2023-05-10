<template>
    <div>
        <div ref="container"></div>
        <div class="overlay">
            <h1>Welcome!</h1>
        </div>
    </div>
  </template>
  
<script>
import * as THREE from 'three';
import { TweenMax } from 'gsap';

export default {
    name: 'StarsTunnel',
    mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    camera.position.z = 0;
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.container.appendChild(renderer.domElement);
    
    const particleBatchDepth = -40;
    const particle_batches = 2;
    let particles = [];
    for(let i = 0; i < particle_batches; i++) {
        particles[i] = createParticles(new THREE.Vector3(0, 0, particleBatchDepth * (i + 1)));
        scene.add(particles[i]);
    }
    let tunnelDepth = particle_batches* particleBatchDepth; 
    let firstparticlesIndex = 0;
    
    const animate = () => {
        requestAnimationFrame(animate);
        camera.position.z -= 0.1;
 1
        if (camera.position.z <= tunnelDepth  - (particleBatchDepth * 3/4)) {
            console.log('yo');
            // Remove the first particle batch
            scene.remove(particles[firstparticlesIndex]);
            
            //Update total depth
            tunnelDepth += particleBatchDepth;

            //Generate offset for new particles
            let offset = new THREE.Vector3(0, 0, tunnelDepth + particleBatchDepth);
            particles[firstparticlesIndex] = createParticles(offset);

            // Get the material of the new particles and apply fade in animation
            let material = particles[firstparticlesIndex].material;
            material.transparent = true;
            material.opacity = 0;
            scene.add(particles[firstparticlesIndex]);
            TweenMax.to(material, 1, { opacity: 1 });

            // Update index for next particles to remove
            firstparticlesIndex += (firstparticlesIndex + 1 % particle_batches) 
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


.overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.1); /* Adjust the alpha value (0.5) for desired transparency */
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: center;
  z-index: 2;
}

.overlay h1 {
  margin: 0;
}
</style>
  