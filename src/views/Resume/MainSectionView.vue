<template>
    <div class="main-section">
        <div class="experience">
            <Experience />
        </div>
        <div class="education">
            <Education />
        </div>
        <div class="education">
            <Projects />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Experience from '@/components/Resume/Experience.vue';
import Education from '@/components/Resume/Education.vue';
import Projects from '@/components/Resume/Projects.vue';


export default defineComponent({
    name: "MainSectionView",
    components: { Experience, Education, Projects }
});

</script>

<style scoped lang="scss">
.main-section {
    padding-left: 20px;
}
</style>