<script lang="ts">
import { defineComponent } from 'vue';
import Demo from './parts/Demo.vue';

export default defineComponent({
    name: "LandingApp",
    components: {
        Demo
    }
})
</script>

<template>
    <Demo />
</template>

<style scoped></style>
