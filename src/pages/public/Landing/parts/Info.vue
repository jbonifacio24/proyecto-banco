<script lang="ts">
import { defineComponent } from 'vue';
import { Quote, Shield, Eye, Users } from 'lucide-vue-next';

export default defineComponent({
    name: 'Info',
    components: {
        Quote,
        Shield,
        Eye,
        Users
    }
});
</script>

<template>
    <section class="py-32 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                    <div class="overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-xl h-[500px]">
                        <img class="w-full h-full object-cover" data-alt="Small business owners success story"
                            src="/assets/img/holder3.webp" draggable="false" />
                    </div>
                </div>
                <div>
                    <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Tu historia de éxito <br />
                        <span class="text-primary">comienza aquí.</span>
                    </h2>
                    <p class="text-slate-600 mb-8 leading-relaxed">
                        Nos enorgullecemos de las historias de éxito de las que hemos sido parte. Hemos ayudado a
                        empresas en una variedad de etapas a dar el siguiente paso para elevar su operación. Hemos
                        ayudado a muchas empresas locales a obtener la ayuda que necesitan para convertir sus sueños
                        en realidad.
                    </p>
                    <div class="bg-orange-50 p-8 rounded-xl rounded-tr-[50px] relative mt-8">
                        <Quote class="w-16 h-16 text-slate-800 absolute -bottom-8 -right-4 rotate-180 opacity-20" />
                        <p class="text-slate-800 italic font-medium text-lg leading-relaxed relative z-10">
                            "¡El equipo de MiBancoApp está de tu lado! Fueron excelentes para trabajar y facilitaron
                            el acceso al capital. Recomendaría encarecidamente a cualquiera que esté considerando
                            comenzar un negocio."
                        </p>
                        <div class="mt-6 font-bold text-primary">Dueños de Negocios Locales</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="text-primary font-bold tracking-widest uppercase text-sm mb-4">Quienes Somos</h2>
            <h3 class="text-4xl font-bold text-slate-900 mb-8 leading-tight">Banca construida sobre una base de
                seguridad, transparencia y comunidad.</h3>
            <p class="text-lg text-slate-600 mb-12 leading-relaxed">
                En MiBancoApp, creemos que los servicios financieros deben ser accesibles, honestos y poderosos.
                Hemos rediseñado la banca desde cero para enfocarnos en la persona detrás de la cuenta, asegurando
                que cada transacción sirva a tu prosperidad a largo plazo.
            </p>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="p-6 bg-slate-50 rounded-xl hover:bg-orange-50/50 transition-colors cursor-default">
                    <div class="text-primary mb-3">
                        <Shield class="w-10 h-10" />
                    </div>
                    <h4 class="font-bold text-slate-900 mb-2 text-lg">Seguridad Bancaria</h4>
                    <p class="text-slate-600 text-sm">Encriptación de 256 bits y autenticación multifactor para
                        proteger tus activos.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-xl hover:bg-orange-50/50 transition-colors cursor-default">
                    <div class="text-primary mb-3">
                        <Eye class="w-10 h-10" />
                    </div>
                    <h4 class="font-bold text-slate-900 mb-2 text-lg">Cero Cargos Ocultos</h4>
                    <p class="text-slate-600 text-sm">Precios claros y sin costos mensuales de mantenimiento para
                        cuentas estándar.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-xl hover:bg-orange-50/50 transition-colors cursor-default">
                    <div class="text-primary mb-3">
                        <Users class="w-10 h-10" />
                    </div>
                    <h4 class="font-bold text-slate-900 mb-2 text-lg">Comunidad Primero</h4>
                    <p class="text-slate-600 text-sm">Reinvertimos el 10% de nuestras ganancias en proyectos de
                        desarrollo local.</p>
                </div>
            </div>
        </div>
    </section>
</template>
