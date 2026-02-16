<script lang="ts">
import { defineComponent } from 'vue';
import { Landmark, Facebook, Mail, Globe } from 'lucide-vue-next';

export default defineComponent({
    name: 'Footer',
    components: {
        Landmark,
        Facebook,
        Mail,
        Globe
    }
});
</script>

<template>
    <footer class="bg-slate-900 text-slate-400 pt-20 pb-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
                <div class="col-span-2 lg:col-span-1">
                    <div class="flex items-center gap-2 mb-6">
                        <div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
                            <Landmark class="w-5 h-5 text-white" />
                        </div>
                        <span class="text-xl font-bold tracking-tight text-white">MiBancoApp</span>
                    </div>
                    <p class="text-sm leading-relaxed mb-6">
                        Soluciones financieras modernas diseñadas para potenciar tu viaje hacia la independencia
                        financiera.
                    </p>
                    <div class="flex space-x-4">
                        <a class="hover:text-primary transition-colors" href="#">
                            <Facebook class="w-5 h-5" />
                        </a>
                        <a class="hover:text-primary transition-colors" href="#">
                            <Mail class="w-5 h-5" />
                        </a>
                        <a class="hover:text-primary transition-colors" href="#">
                            <Globe class="w-5 h-5" />
                        </a>
                    </div>
                </div>
                <div>
                    <h5 class="text-white font-bold mb-6">Productos</h5>
                    <ul class="space-y-4 text-sm">
                        <li><a class="hover:text-white transition-colors" href="#">Cuentas Corrientes</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Ahorros y CDs</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Tarjetas de Crédito</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Préstamos Hipotecarios</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Préstamos de Auto</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-bold mb-6">Compañía</h5>
                    <ul class="space-y-4 text-sm">
                        <li><a class="hover:text-white transition-colors" href="#">Sobre Nosotros</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Carreras</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Sala de Prensa</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Relación con Inversores</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Sostenibilidad</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-bold mb-6">Soporte</h5>
                    <ul class="space-y-4 text-sm">
                        <li><a class="hover:text-white transition-colors" href="#">Centro de Ayuda</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Contáctanos</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Centro de Seguridad</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Reportar Fraude</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Buscador de Cajeros</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-bold mb-6">Legal</h5>
                    <ul class="space-y-4 text-sm">
                        <li><a class="hover:text-white transition-colors" href="#">Política de Privacidad</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Términos de Servicio</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Política de Cookies</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Divulgaciones</a></li>
                        <li><a class="hover:text-white transition-colors" href="#">Mapa del Sitio</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-slate-800 pt-10 mt-10">
                <div class="bg-slate-800/50 p-6 rounded-lg mb-10">
                    <p class="text-xs leading-relaxed uppercase tracking-wider font-bold mb-3 text-slate-300">
                        Divulgación Financiera y Advertencia de Riesgo</p>
                    <p class="text-xs leading-relaxed text-slate-500">
                        Los servicios bancarios son proporcionados por MiBancoApp, N.A., Miembro FDIC. La Tarjeta de
                        Débito Visa® MiBancoApp es emitida por MiBancoApp, N.A. de conformidad con una licencia de Visa
                        U.S.A. Inc. y puede usarse en todos los lugares donde se acepten tarjetas de débito Visa. Los
                        servicios de inversión se ofrecen a través de MiBancoApp Securities, LLC, un agente de bolsa
                        registrado y miembro de FINRA/SIPC. <br /><br />
                        <strong>Productos de inversión: No están asegurados por la FDIC • No están garantizados por el
                            banco • Pueden perder valor.</strong><br /><br />
                        El Porcentaje de Rendimiento Anual (APY) es preciso al 1 de mayo de 2026. Las tasas son
                        variables y pueden cambiar después de abrir la cuenta. Las tarifas pueden reducir las ganancias.
                        La cobertura de seguro estándar de la FDIC es de $250,000 por depositante, por banco asegurado,
                        para cada categoría de titularidad de cuenta. Por favor revise nuestros términos y condiciones
                        completos para obtener información detallada sobre el mantenimiento de la cuenta, los límites de
                        transacción y los posibles cargos por servicio.
                    </p>
                </div>
                <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p class="text-xs">© 2026 MiBancoApp Financial Services. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
</template>
