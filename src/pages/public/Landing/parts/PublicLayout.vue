<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Landmark } from 'lucide-vue-next';

export default defineComponent({
    name: 'PublicLayout',
    components: {
        Landmark
    },
    setup() {
        const showCreditModal = ref(false);
        function openCreditModal() {
            showCreditModal.value = true;
        }
        function closeCreditModal() {
            showCreditModal.value = false;
        }
        return { showCreditModal, openCreditModal, closeCreditModal };
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
                        <div class="relative group">
                            <a class="text-slate-600 hover:text-primary font-medium transition-colors cursor-pointer"
                                href="#">Servicios</a>
                            <div class="absolute left-0 mt-2 w-56 bg-white border border-slate-200 rounded shadow-lg
                                opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                
                                <a class="block px-4 py-2 text-slate-600 hover:bg-primary/10 hover:text-primary font-medium
                                    transition-colors" href="#simular-prestamo">Tarjetas</a>
                                <a class="block px-4 py-2 text-slate-600 hover:bg-primary/10 hover:text-primary font-medium
                                    transition-colors" href="#prestamos-comerciales">Préstamos</a>
                                <a class="block px-4 py-2 text-slate-600 hover:bg-primary/10 hover:text-primary font-medium
                                    transition-colors" href="#simular-prestamo">Seguros</a>
                            </div>
                        </div>
                        <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="#">Casos de
                            Éxito</a>
                        <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="#">Blog</a>
                        <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="#">Contacto</a>
                    </div>
                    <div class="flex items-center">
                        <button @click="$router.push({ name: 'login' })"
                            class="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5 cursor-pointer">
                            Banca por Internet
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        <main>
            <slot />
        </main>
        <div v-if="showCreditModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
                <button @click="closeCreditModal" class="absolute top-2 right-2 text-gray-500 hover:text-primary text-2xl">&times;</button>
                <CreditSimulator />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CreditSimulator from './CreditSimulator.vue';
</script>
