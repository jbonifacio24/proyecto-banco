<script lang="ts">
import { defineComponent } from 'vue';
import Dashboard from './parts/Dashboard.vue';

export default defineComponent({
    name: "DashboardApp",
    components: {
        Dashboard
    }
})
</script>

<template>
    <Dashboard />
</template>

<style scoped></style>
