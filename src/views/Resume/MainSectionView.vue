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

<style lang="scss">
.main-section {
    padding-left: 20px;
}

.content-section {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
}

.content-section .row {
    margin-bottom: 5px;
}

.content-section p {
    margin-bottom: 5px;
}
</style>