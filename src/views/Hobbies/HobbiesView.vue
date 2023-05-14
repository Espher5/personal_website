<template>
    <div style="border: 5px solid red; width: 100%; margin-bottom: 10px; height: 50px; text-align:center;">
        Page under construction!
    </div>
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
                }
            ]
        };
    }
});
</script>
  
<style scoped lang="scss">

</style>
  
  
  