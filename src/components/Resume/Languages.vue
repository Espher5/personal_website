<template>
    <div class="languages-container">
        <h3>Languages</h3>
        <div class="container-fluid language-section" v-for="item in languages" :key="item.index">
            <div class="row">
                <p>{{ item.language }} - {{ item.level }}.</p>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
  
export default defineComponent({
    name: "LanguageComponent",
    components: {},
    data() {
        return {
            languages: [
                {
                    index: 0,
                    language: "Italian",
                    level: 'Native',
                },
                {
                    index: 0,
                    language: "English",
                    level: 'B2',
                },
            ]   
        };
    },
});
</script>
  
  
<style scoped lang="scss">
.languages-container {
    padding-top: 10px;;
}
</style>