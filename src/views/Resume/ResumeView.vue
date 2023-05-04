<template>
    <div class="wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <HeaderView />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 col-xl-3 side-section">
                    <SideSectionView />
                </div>
                <div class="col-sm-8 col-xl-9 main-section">
                    <MainSectionView />
                </div>
            </div>       
        </div>     
    </div>
</template>
  
<script lang="ts">

import { defineComponent } from 'vue';
import SideSectionView from './SideSectionView.vue';
import MainSectionView from './MainSectionView.vue';
import HeaderView from './HeaderView.vue';
  
export default defineComponent({
    name: "ResumeView",
    components: { SideSectionView, MainSectionView, HeaderView }
});
</script>
  
  
<style scoped lang="scss">

</style>