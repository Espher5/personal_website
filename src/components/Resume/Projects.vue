<template>
    <div>
        <h3>Projects</h3>
        <div class="container-fluid project-section" v-for="(item, index) in projects" :key="index">
            <div class="row">
                <div class="col-8">
                    <p><b>{{ item.title }}</b></p>
                </div>
            </div>
            <div class="row">
                <p>{{ item.description }} </p>
                <div v-if="item.technologies">
                    <p>Technologies used:</p>
                    <ul>
                        <li v-for="(tech, index) in item.technologies" :key="index">
                            {{ tech }}
                        </li>
                    </ul>
                </div>
                <p>Graduation score: {{ item.link }}.</p>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
  
export default defineComponent({
    name: 'ProjectsComponent',
    data() {
        return {
            projects: [
                {
                    title: "2023/03 - 2023/04",
                    description: "Virvelle",
                    technologies: ['a', 'b', 'c'],
                    link: "",
                },
            ]
        };
    },
});
</script>
  
  
<style scoped lang="scss">

</style>