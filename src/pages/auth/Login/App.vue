<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from './parts/LoginForm.vue';

export default defineComponent({
    name: "LandingApp",
    components: {
        LoginForm
    }
})
</script>

<template>
    <div class="font-display bg-slate-900 text-slate-100 h-screen overflow-hidden flex flex-col md:flex-row">
        <LoginForm />
    </div>
</template>

<style scoped></style>
