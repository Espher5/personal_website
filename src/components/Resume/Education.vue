<template>
    <div>
        <h3>Education</h3>
        <div class="container-fluid education-section" v-for="(item,index) in graduations" :key="index">
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
                    date: "2020/09 - 2023/02",
                    degree: 'Master\'s Degree in Computer Science',
                    school: "Università degli Studi di Salerno",
                    location: "Via Giovanni Paolo II, 84084, Fisciano (SA), Italy",
                    thesis: "research study on the application of Test-Driven Development for Embedded Systems development",
                    score: "110/110 cum Laude",
                },
                {
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
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
}

.education-section h4 {
    margin-bottom: 10px;
    font-weight: bold;
}

.education-section .row {
    margin-bottom: 5px;
}

.education-section p {
    margin-bottom: 5px;
}
</style>