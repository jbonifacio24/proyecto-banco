<script lang="ts">
import { defineComponent } from 'vue';
import { Star, StarHalf } from 'lucide-vue-next';

export default defineComponent({
    name: 'Hero',
    components: {
        Star,
        StarHalf
    }
});
</script>

<template>
    <section class="relative bg-white overflow-hidden pb-10 pt-10 lg:pb-32 lg:pt-16">
        <div
            class="absolute right-0 top-0 w-1/2 h-[120%] bg-orange-100 rounded-bl-[200px] -z-10 translate-x-20 -skew-y-6 transform origin-top-right">
        </div>
        <div
            class="absolute right-[10%] top-[10%] w-[600px] h-[600px] border-[50px] border-orange-200/40 rounded-full -z-10">
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                <div class="space-y-8 pr-8">
                    <h1 class="text-3xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                        Impulsa el poder <br />
                        de tu <span
                            class="text-primary relative inline-block underline decoration-4 decoration-primary/30 underline-offset-4">potencial.</span>
                    </h1>
                    <p class="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg">
                        Ya sea que estés buscando un préstamo personal o comercial, MiBancoApp puede ayudarte a
                        experimentar los beneficios de un despegue financiero.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            class="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-bold text-base uppercase tracking-wide transition-all shadow-lg shadow-primary/30 hover:scale-105">
                            EMPEZAR
                        </button>
                        <button
                            class="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-md font-bold text-base uppercase tracking-wide transition-all shadow-lg">
                            VER PAQUETES
                        </button>
                    </div>
                    <div class="flex items-center gap-4 pt-8">
                        <span class="text-xs font-bold text-slate-600">Excelente 4.6 | 9,542 reseñas</span>
                        <div class="flex bg-[#00b67a] px-2 py-1 gap-1">
                            <Star class="text-white fill-white w-4 h-4" />
                            <Star class="text-white fill-white w-4 h-4" />
                            <Star class="text-white fill-white w-4 h-4" />
                            <Star class="text-white fill-white w-4 h-4" />
                            <StarHalf class="text-white fill-white w-4 h-4" />
                        </div>
                        <div class="flex items-center gap-1">
                            <Star class="text-[#00b67a] fill-[#00b67a] w-5 h-5" />
                            <span class="font-bold text-slate-900 text-sm">Trustpilot</span>
                        </div>
                    </div>
                </div>
                <div class="relative h-[600px] flex items-center justify-center">
                    <div class="absolute inset-0 bg-transparent rounded-full border border-orange-200/0"></div>
                    <div class="relative w-full h-full overflow-hidden"
                        style="border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;">
                        <img class="w-full h-full object-cover object-center scale-110" data-alt="Person with laptop"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA9Dr-okUF72OoP9UXDaMZrKiH_vyskBG841rMFjnbjGSgOxvXKsf--479xGonK1V1O-wnIlWwS56wuRBjspwe7xVcUuSHfNbUYb0KxfuY_hpNGnqFXXW-16uskbudHJCVkK6flf6cXyBecazMpi_46e3WWQm_4a9yYFhBchskBpmuq1FRhCFeninDLIlw8bLwms1jvW8ruZXuH-WY3PUyxJTtu_hD9c_tiOEJMc3kgGz11XnKQuxrirCNizkAmS83ZTzfl5aEoU2Z"
                            draggable="false" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
