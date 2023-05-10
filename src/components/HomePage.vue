<template>
    <div class="hero-section" :style="{ backgroundImage: 'url(' + heroImage + ')' }">
        <div class="hero-content">
            <h1>{{ welcomeMessage }}</h1>
            <button class="cta-button">{{ ctaText }}</button>
        </div>
        
        <spinning-cube />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as THREE from 'three';
import SpinningCube from './SpinningCube.vue';

export default defineComponent({
  components: { SpinningCube },
    name: 'HomePage',
    data() {
        return {
            heroImage: '/path/to/hero/image.jpg',
            welcomeMessage: 'Welcome',
            ctaText: 'View My Resume'
        };
    }
});
</script>

<style scoped lang="scss">
.homepage {
  /* Add your styles for the homepage here */
}

.hero-section {
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.cta-button {
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: #fff;
  color: #333;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #333;
  color: #fff;
}
</style>
