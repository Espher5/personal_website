<template>
    <div class="hobby-banner">
        <div class="background-image">
            <img :src="require(`@/assets/banners/${item.background}`)" alt="Banner Image" />
        </div>
        <div class="text-container">
            <router-link :to="item.link">{{ item.title }}</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
    name: 'BannerComponent',
    props: {
        item: {
            type: Object,
            required: true
        }
    }
});
</script>

<style scoped lang="scss">
.hobby-banner {
    position: relative;
    max-width: 85%; /* Increase the max-width to make the banner wider */
    margin: 0 auto;
    margin-bottom: 10px;
}
  
.background-image {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
}
  
.background-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio and cover the container */
}
  
.text-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px; /* Increase the height to make the text container taller */
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
  
.text-container a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 18px;
    transition: color 0.3s;
}
  
.text-container a:hover {
    color: #555;
}
</style>