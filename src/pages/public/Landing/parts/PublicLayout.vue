<script lang="ts">
import { defineComponent } from 'vue';
import { Landmark } from 'lucide-vue-next';

export default defineComponent({
    name: 'PublicLayout',
    components: {
        Landmark
    }
});
</script>

<template>
    <div>
        <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <div class="flex items-center gap-2">
                        <div
                            class="w-10 h-10 bg-gradient-to-br from-primary to-orange-400 rounded-lg flex items-center justify-center shadow-md shadow-orange-200">
                            <Landmark class="text-white w-6 h-6" />
                        </div>
                        <div class="text-2xl font-extrabold tracking-tight text-slate-900">
                            MiBanco<span class="text-primary">App</span>
                        </div>
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="#">Inicio</a>
                        <a class="text-slate-600 hover:text-primary font-medium transition-colors"
                            href="#">Servicios</a>
                        <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="#">Casos de
                            Éxito</a>
                        <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="#">Blog</a>
                        <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="#">Contacto</a>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button @click="$router.push({ name: 'login' })"
                            class="px-5 py-2.5 text-slate-700 font-semibold hover:text-primary transition-colors cursor-pointer">Login</button>
                        <button
                            class="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5 cursor-pointer">
                            REGÍSTRATE
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        <main>
            <slot />
        </main>
    </div>
</template>
