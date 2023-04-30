<template>
    <div class="wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4 side-section">
                    <SideSectionView />
                </div>
                <div class="col-sm-8 main-section">
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
  
export default defineComponent({
    name: "ResumeView",
    components: { SideSectionView, MainSectionView }
});
</script>
  
  
<style scoped lang="scss">

</style>