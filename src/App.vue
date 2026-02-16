<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
    name: "LandingApp",
    components: {
        RouterView
    }
})
</script>

<template>
    <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<style scoped>
/* Transición de página suave para una app de banca */
.page-fade-enter-active,
.page-fade-leave-active {
    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-fade-enter-from {
    opacity: 0;
    transform: translateY(15px);
}

.page-fade-leave-to {
    opacity: 0;
    transform: translateY(-15px);
}
</style>
