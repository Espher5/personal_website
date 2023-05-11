<template>
    <div class="hero-section" :style="{ backgroundImage: 'url(' + heroImage + ')' }">       
        <StarsTunnel />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StarsTunnel from './StarsTunnel.vue';

export default defineComponent({
  components: { StarsTunnel },
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
