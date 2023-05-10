<template>
    <div>
        <h3>Experience</h3>
        <div class="container-fluid content-section " v-for="(item, index) in experiences" :key="index">
            <div class="row d-flex justify-content-between">
                <div class="col">
                    <p><b>{{ item.title }}</b></p>
                </div>
                <div class="col date">
                    <p>{{ item.date }}</p>
                </div>
            </div>
            <div class="row">
                <p>{{ item.company }} - {{ item.location }}</p>
                <p> {{ item.summary }}</p>
            </div>
            <div v-if="item.technologies">
                <p>Technologies used:</p>
                <ul>
                    <li v-for="(tech, index) in item.technologies" :key="index">
                        {{ tech }}
                    </li>
                </ul>
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
                    date: "2023/03 - 2023/04",
                    title: 'Teaching Computer Science courses',
                    company: "Virvelle",
                    location: "Piazzetta Barracano, 13, 84122, Salerno, Italy",
                    summary: "I developed some material on Java design patterns and RESTful web services and held the corresponding lectures for a total of 24 hours to a small class of 8 participants",
                    technologies: ['Java', 'NodeJS', 'SOAP', 'REST', 'Postman']
                },
                {
                    date: "2020/04 - 2020/07",
                    title: 'Curricular internship',
                    company: "IT. Svil. Srl.",
                    location: "Via Antonio Amato, 26, 84131, Salerno, Italy",
                    summary: "Development of a mobile application for cultural heritage storytelling (Bachelor Thesis)",
                    technologies: ['Android', 'ARCore', 'TensorFlow', 'Python', 'NodeJS', 'MongoDB']
                },
            ]
        };
    },
});
</script>
  
  
<style scoped lang="scss">
.date {
    text-align: right;
}
</style>