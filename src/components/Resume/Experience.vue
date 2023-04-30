<template>
    <div>
        <h3>Experience</h3>
        <div class="container-fluid education-section" v-for="item in experiences" :key="item.index">
            <div class="row">
                <div class="col-8">
                    <p><b>{{ item.title }}</b></p>
                </div>
                <div class="col-4">
                    <p>{{ item.date }}</p>
                </div>
            </div>
            <div class="row">
                <p>{{ item.company }} - {{ item.location }}.</p>
                <p> {{ item.summary }}</p>
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
            experiences: [
                {
                    index: 0,
                    date: "2023/03 - 2023/04",
                    title: 'Teaching Computer Science courses',
                    company: "Virvelle",
                    location: "Piazzetta Barracano, 13, 84122, Salerno, Italy",
                    summary: "I developed some material on Java design patterns and RESTful web services and held the corresponding lectures for a total of 24 hours to a small class of 8 participants",
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