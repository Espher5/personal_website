<template>
    <div class="image-container">
        <img src="@/assets/logo.png" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ImageComponent",
    components: { }
});
</script>

<style scope lang="scss">
.image-container {
    text-align: center;
}
</style>