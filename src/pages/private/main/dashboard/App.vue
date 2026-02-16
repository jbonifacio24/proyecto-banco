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
    <div
        class="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen flex flex-col transition-colors duration-200">
        <Dashboard />
    </div>
</template>

<style scoped></style>
