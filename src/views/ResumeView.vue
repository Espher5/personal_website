<template>
    <div class="wrapper">
        <div class="contacts">
            <Contacts />
        </div>
        <div class="education">
            <Education />
        </div>
    </div>
</template>
  
<script lang="ts">
import Contacts from '@/components/Resume/Contacts.vue';
import Education from '@/components/Resume/Education.vue';
import { defineComponent } from 'vue';
  
export default defineComponent({
    name: "ResumeView",
    components: { Education, Contacts }
});
</script>
  
  
<style scoped lang="scss">

</style>