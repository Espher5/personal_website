<template>
    <div class="hero-section" :style="{ backgroundImage: 'url(' + heroImage + ')' }">       
        <spinning-cube />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
</style>
