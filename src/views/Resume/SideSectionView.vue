<template>
    <div>
        <div class="image">
            <Image />
        </div>
        <div class="contacts">
            <Contacts />
        </div>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Image from '@/components/Resume/Image.vue';
import Contacts from '@/components/Resume/Contacts.vue';

export default defineComponent({
    name: "SideSectionView",
    components: { Image, Contacts }
});

        Image</script>

<style scoped lang="scss">

</style>