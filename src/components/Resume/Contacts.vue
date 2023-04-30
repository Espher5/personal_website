<template>
    <Title :text="contactsLabel" />
    <div v-if="phoneNumber" class="contact-line">
        <img src="@/assets/phone.svg" />
        <Paragraph class="contact" :text="phoneNumber" />
    </div>
    <div v-if="email" class="contact-line">
        <img src="@/assets/email.svg" />
        <Paragraph class="contact" :text="email" />
    </div>
    <div v-if="linkedIn" class="contact-line">
        <img src="@/assets/linkedin.svg" />
        <Paragraph class="contact" :text="linkedIn" />
    </div>
    <div v-if="gitHub" class="contact-line">
        <img src="@/assets/linkedin.svg" />
        <Paragraph class="contact" :text="gitHub" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Paragraph from '../Paragraph.vue';
  
export default defineComponent({
    name: "ContactComponent",
    components: { Paragraph },
    computed: {
        contactsLabel() {
            return '';
        },

        phoneNumber() {
            return '3315276844';
        },

        email() {
            return 'michelangeloesposito24@gmail.com';
        },

        linkedIn() {
            return 'https://www.linkedin.com/in/michelangelo-esposito-6118381a5';
        },

        gitHub() {
            return 'https://github.com/Espher5';
        }
    }
});
</script>

<style scoped lang="scss">
.contact-line {
    display: flex;
    margin: 0 auto;
    align-items: center;
}

.contact {
    padding-left: 1em;
    margin: 0.25em;
}
</style>