<template>
    <ul>
        <div>
            <li class="education-section" v-for="item in graduations" :key="item.index">
                <p>{{ item.date }}</p>
                <p>{{ item.school }} - {{ item.location }}.</p>
                <o>Focus of the thesis: {{ item.thesis }}.</o>
                <p>Graduation score: {{ item.score }}.</p>
            </li>
        </div>
    </ul>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
  
export default defineComponent({
    name: 'EducationComponent',
    data() {
        return {
            graduations: [
                {
                    index: 0,
                    date: '2020/09 - 2023/02',
                    school: 'Università degli Studi di Salerno',
                    location: 'Via Giovanni Paolo II, 84084, Fisciano (SA), Italy',
                    thesis: 'research study on the application of Test-Driven Development for Embedded Systems development',
                    score: '110/110 cum Laude',
                },
                {
                    index: 1,
                    date: '2016/09 - 2020/09',
                    school: 'Università degli Studi di Salerno',
                    location: 'Via Giovanni Paolo II, 84084, Fisciano (SA), Italy',
                    thesis: 'Augmented Reality and Image Recognition for painting storytelling',
                    score: '105/110',
                },
            ]
        }
    }
});
</script>
  
  
<style scoped lang="scss">
.education-section {
    border: 1px solid black;;
    padding-bottom: 10px;
}
</style>