<script lang="ts">
import { defineComponent } from 'vue';
import Demo from './parts/Demo.vue';
import PublicLayout from './parts/PublicLayout.vue';

export default defineComponent({
    name: "LandingApp",
    components: {
        Demo,
        PublicLayout
    }
})
</script>

<template>
    <PublicLayout>
        <Demo />
    </PublicLayout>
</template>

<style scoped></style>
