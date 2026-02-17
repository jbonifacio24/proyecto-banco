<script lang="ts">
import { defineComponent } from 'vue';
import { Plus, FilePenLine, MessageSquare, Banknote, Headset, ClipboardList } from 'lucide-vue-next';

export default defineComponent({
    name: 'Features',
    components: {
        Plus,
        FilePenLine,
        MessageSquare,
        Banknote,
        Headset,
        ClipboardList
    }
});
</script>

<template>
    <section id="prestamos-comerciales" class="bg-[#1a2533] py-24 relative overflow-visible">
        <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Plus class="absolute top-20 left-[35%] w-24 h-24" />
            <Plus class="absolute top-40 left-[38%] w-16 h-16" />
            <div
                class="absolute left-0 top-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2">
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 md:mb-0">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="relative h-[600px] flex items-end justify-center lg:justify-start">
                    <img class="relative z-10 h-full w-auto object-contain object-bottom drop-shadow-2xl"
                        data-alt="Person holding tablet transparent background" src="/assets/img/holder2.webp"
                        draggable="false" />
                </div>
                <div class="text-white space-y-6">
                    <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
                        Oferta de Préstamos Comerciales: <br />
                        <span class="text-[#00C885] font-extrabold">Más que solo dinero.</span>
                    </h2>
                    <p class="text-gray-300 text-lg leading-relaxed mb-8">
                        En MiBancoApp, creemos que todo gran viaje comienza con un solo paso. Si estás listo para
                        dar vida a los sueños de tu negocio, estás en el lugar correcto.
                        <br /><br />
                        Empoderando a pequeñas y medianas empresas con el combustible para potenciar su crecimiento,
                        MiBancoApp ofrece más que solo apoyo financiero.
                    </p>
                    <div class="grid grid-cols-4 gap-4 mt-12 border-t border-gray-700 pt-8">
                        <div class="flex flex-col items-center text-center gap-3">
                            <div
                                class="w-14 h-14 rounded-full border-2 border-dashed border-[#00C885] flex items-center justify-center text-white">
                                <FilePenLine class="w-6 h-6" />
                            </div>
                            <span class="text-xs font-bold uppercase tracking-wider text-white">Solicita en
                                línea</span>
                        </div>
                        <div class="flex flex-col items-center text-center gap-3">
                            <div
                                class="w-14 h-14 rounded-full border-2 border-dashed border-[#00C885] flex items-center justify-center text-white">
                                <MessageSquare class="w-6 h-6" />
                            </div>
                            <span class="text-xs font-bold uppercase tracking-wider text-white">Chatea con
                                nosotros</span>
                        </div>
                        <div class="flex flex-col items-center text-center gap-3">
                            <div
                                class="w-14 h-14 rounded-full border-2 border-dashed border-[#00C885] flex items-center justify-center text-white">
                                <Banknote class="w-6 h-6" />
                            </div>
                            <span class="text-xs font-bold uppercase tracking-wider text-white">Obtén fondos</span>
                        </div>
                        <div class="flex flex-col items-center text-center gap-3">
                            <div
                                class="w-14 h-14 rounded-full border-2 border-dashed border-[#00C885] flex items-center justify-center text-white">
                                <Headset class="w-6 h-6" />
                            </div>
                            <span class="text-xs font-bold uppercase tracking-wider text-white">Soporte</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute -bottom-1 left-0 w-full flex justify-center translate-y-1/2 z-20 px-4">
            <div
                class="bg-primary w-full max-w-6xl rounded-2xl p-6 lg:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <h3 class="text-3xl lg:text-4xl font-extrabold text-white text-center md:text-left">Solicitud rápida
                    y sencilla</h3>
                <div class="flex gap-4">
                    <button
                        class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded font-bold uppercase flex items-center gap-2 transition-colors">
                        <MessageSquare class="w-5 h-5" /> Chatear
                    </button>
                    <button
                        class="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded font-bold uppercase flex items-center gap-2 transition-colors shadow-md"
                        @click="$emit('open-credit-modal')">
                        <ClipboardList class="w-5 h-5" /> Solicitar préstamo
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
