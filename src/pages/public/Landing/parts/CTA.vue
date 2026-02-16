<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CTA'
});
</script>

<template>
    <section class="py-20 bg-primary relative overflow-hidden">
        <div class="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold text-white mb-6">¿Listo para tomar el control de tu futuro?</h2>
            <p class="text-orange-100 text-xl mb-10 max-w-2xl mx-auto">Únete a más de 2 millones de clientes que han
                cambiado a una forma de banca más rápida e inteligente. Abrir una cuenta toma menos de 5 minutos.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <button
                    class="bg-white text-primary hover:bg-slate-50 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
                    Abrir Cuenta Gratis
                </button>
                <button
                    class="bg-primary-dark text-white border border-white/20 hover:bg-orange-800 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:border-white/40">
                    Hablar con un Asesor
                </button>
            </div>
        </div>
    </section>
</template>
