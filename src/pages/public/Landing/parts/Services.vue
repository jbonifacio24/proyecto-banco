<script lang="ts">
import { defineComponent } from 'vue';
import { PiggyBank, ChevronRight, Briefcase, TrendingUp } from 'lucide-vue-next';

export default defineComponent({
    name: 'Services',
    components: {
        PiggyBank,
        ChevronRight,
        Briefcase,
        TrendingUp
    }
});
</script>

<template>
    <section class="py-24 bg-background-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900 mb-4">Soluciones Integrales</h2>
                <p class="text-lg text-slate-600 max-w-2xl mx-auto">Desde gastos diarios hasta creación de riqueza a
                    largo plazo, te damos las herramientas para crecer.</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div
                    class="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all hover:shadow-xl group">
                    <div
                        class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                        <PiggyBank class="w-8 h-8" />
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">Cuentas de Ahorro</h3>
                    <p class="text-slate-600 mb-8 leading-relaxed">
                        Gana hasta un 4.50% APY con nuestro Ahorro de Alto Rendimiento. Sin saldo mínimo y
                        transferencias ilimitadas.
                    </p>
                    <a class="inline-flex items-center font-bold text-primary group-hover:underline" href="#">
                        Explorar Ahorros
                        <ChevronRight class="ml-1 w-4 h-4" />
                    </a>
                </div>
                <div
                    class="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all hover:shadow-xl group">
                    <div
                        class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Briefcase class="w-8 h-8" />
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">Préstamos Comerciales</h3>
                    <p class="text-slate-600 mb-8 leading-relaxed">
                        Impulsa tu crecimiento con líneas de crédito competitivas y préstamos a plazo diseñados para
                        emprendedores.
                    </p>
                    <a class="inline-flex items-center font-bold text-primary group-hover:underline" href="#">
                        Soluciones de Negocio
                        <ChevronRight class="ml-1 w-4 h-4" />
                    </a>
                </div>
                <div
                    class="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all hover:shadow-xl group">
                    <div
                        class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                        <TrendingUp class="w-8 h-8" />
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">Portafolios de Inversión</h3>
                    <p class="text-slate-600 mb-8 leading-relaxed">
                        Gestión de cartera impulsada por IA y operaciones bursátiles sin comisión para ayudarte a
                        generar riqueza.
                    </p>
                    <a class="inline-flex items-center font-bold text-primary group-hover:underline" href="#">
                        Empezar a Invertir
                        <ChevronRight class="ml-1 w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
