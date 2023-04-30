<template>
    <div class="wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-3 contacts">
                    <SideSectionView />
                </div>
                <div class="col-9 education">
                    <Education />
                </div>
            </div>       
        </div>     
    </div>
</template>
  
<script lang="ts">
import Education from '@/components/Resume/Education.vue';
import { defineComponent } from 'vue';
import SideSectionView from './SideSectionView.vue';
  
export default defineComponent({
    name: "ResumeView",
    components: { SideSectionView, Education,  }
});
</script>
  
  
<style scoped lang="scss">

</style>