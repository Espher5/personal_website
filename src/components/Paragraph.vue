<template>
    <p>{{ text }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
  
export default defineComponent({
    name: "ParagraphComponent",
    props: {
        text: {
            type: [String, Number],
            required: true
        }
    }
});
</script>
<style scoped lang="scss">
p {
    line-height: 22px;
    margin: 0;
    font-size: 15px;
    color: #303030;
}
</style>