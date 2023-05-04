<template>
    <div>
        <h3>Projects</h3>
        <div class="container-fluid project-section" v-for="(item, index) in projects" :key="index">
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
                <div class="col">
                    <span>Available at: <a :href="item.link" target="_blank">{{ item.link }}</a>.</span>
                </div>
                <div class="col">
                    <p>More details</p>
                    <img src="@/assets/icons/link.svg" />
                </div>
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
                    description: 'Embedded machine learning system for the classification of street signs, running on an ESP32 board with a camera module and realized via transfer learning using the Edge Impulse platform',
                    technologies: [''],
                    link: 'https://github.com/Espher5/embedded_street_sign_classification'
                },
                {
                    description: 'IoT system for the continuous monitoring of a small greenhouse, using ESP32 and RaspberryPi boards, along with various sensor and based on MQTT messages',
                    technologies: [''],
                    link: 'https://github.com/Espher5/IoT_Plant_Monitoring'
                },
                {
                    description: 'Phenometric: application based on genetic algorithms for the optimization of machine learning classification models for the detection of flaky test cases in source code',
                    technologies: [''],
                    link: 'https://github.com/Espher5/Phenometric'
                },
                {
                    description: ' CiceroAR: mobile application for the text-to-speech storytelling of cultural assets using augmented reality and artificial intelligence techniques, developed during a curricular internship at the I.T. Svil srl company in Salerno',
                    technologies: [''],
                    link: 'https://github.com/Espher5/CiceroAR'
                },
                {
                    description: 'Orion: web platform for apartment booking, developed for the Software Engineering university course, with a particular focus on the production of documentation.',
                    technologies: [''],
                    link: 'https://github.com/Espher5/Orion'
                },
                {
                    description: 'Demetra: smart farming application interface for monitoring agricultural greenhouses, developed for the human-computer interaction university course.',
                    technologies: [''],
                    link: 'https://github.com/Espher5/Gruppo12-Demetra'
                },
                {
                    description: '',
                    technologies: [''],
                    link: ''
                },
            ]
        };
    },
});
</script>
  
  
<style scoped lang="scss">
.project-section {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
}

.project-section h4 {
    margin-bottom: 10px;
    font-weight: bold;
}

.project-section .row {
    margin-bottom: 5px;
}

.project-section p {
    margin-bottom: 5px;
}
</style>