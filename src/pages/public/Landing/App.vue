<script lang="ts">
import { defineComponent } from 'vue';
import Demo from './parts/Demo.vue';

/*import { RouterLink, RouterView } from 'vue-router';*/
export default defineComponent({
    name: "LandingApp",
    components: {
        Demo
    }
})
</script>

<template>
    <Demo />
    <!-- <RouterView /> -->
</template>

<style scoped></style>
