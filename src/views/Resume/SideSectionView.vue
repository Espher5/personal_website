<template>
    <div class="side-section-container container-fluid">
        <div class="row">
            <div class="image">
                <ResumeImage />
            </div>
        </div>
        <div class="row">
            <div class="contacts">
                <Contacts />
            </div>
        </div>
        <div class="row">
            <div class="languages">
                <Languages />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResumeImage from '@/components/Resume/ResumeImage.vue';
import Contacts from '@/components/Resume/Contacts.vue';
import Languages from '@/components/Resume/Languages.vue';


export default defineComponent({
    name: "SideSectionView",
    components: { ResumeImage, Contacts, Languages }
});

</script>

<style scoped lang="scss">
.side-section-container {
    background-color: bisque;
    height: 100%;
}
</style>