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
    <LoginForm />
</template>

<style scoped></style>
