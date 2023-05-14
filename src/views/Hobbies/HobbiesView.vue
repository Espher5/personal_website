<template>
    <div class="container-fluid">
        <Banner v-for="(item, index) in banners" :key="index" :item="item"/>   
    </div> 
</template>
  
  
<script lang="ts">
import { defineComponent } from "vue";
import Banner from "@/components/Hobbies/Banner.vue";
    
export default defineComponent({
    components: { Banner },
    data() {
        return {
            banners: [
                {
                    title: 'Photography',
                    background: 'photography_banner.jpg',
                    link: '/photography'
                },
                {
                    title: 'Gaming',
                    background: 'gaming_banner.png',
                    link: '/gaming'
                }
            ]
        };
    }
});
</script>
  
<style scoped lang="scss">

</style>
  
  
  