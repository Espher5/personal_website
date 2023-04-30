<template>
    <div>
        <h3>Education</h3>
        <div class="container-fluid education-section" v-for="item in graduations" :key="item.index">
            <div class="row">
                <div class="col-8">
                    <p><b>{{ item.degree }}</b></p>
                </div>
                <div class="col-4">
                    <p>{{ item.date }}</p>
                </div>
            </div>
            <div class="row">
                <p>{{ item.school }} - {{ item.location }}.</p>
                <p>Focus of the thesis: {{ item.thesis }}.</p>
                <p>Graduation score: {{ item.score }}.</p>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
  
export default defineComponent({
    name: "EducationComponent",
    components: {},
    data() {
        return {
            graduations: [
                {
                    index: 0,
                    date: "2020/09 - 2023/02",
                    degree: 'Master\'s Degree in Computer Science',
                    school: "Università degli Studi di Salerno",
                    location: "Via Giovanni Paolo II, 84084, Fisciano (SA), Italy",
                    thesis: "research study on the application of Test-Driven Development for Embedded Systems development",
                    score: "110/110 cum Laude",
                },
                {
                    index: 1,
                    date: "2016/09 - 2020/09",
                    degree: 'Bachelor\'s Degree in Computer Science',
                    school: "Università degli Studi di Salerno",
                    location: "Via Giovanni Paolo II, 84084, Fisciano (SA), Italy",
                    thesis: "Augmented Reality and Image Recognition for painting storytelling",
                    score: "105/110",
                },
            ]
        };
    },
});
</script>
  
  
<style scoped lang="scss">
.education-section {
    padding-bottom: 10px;
}
</style>