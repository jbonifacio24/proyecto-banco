<script lang="ts">
import { defineComponent } from 'vue';
import {
    Landmark,
    Star,
    StarHalf,
    Plus,
    FilePenLine,
    MessageSquare,
    Banknote,
    Headset,
    ClipboardList,
    Quote,
    Shield,
    Eye,
    Users,
    PiggyBank,
    ChevronRight,
    Briefcase,
    TrendingUp,
    Facebook,
    Mail,
    Globe
} from 'lucide-vue-next';

export default defineComponent({
    name: 'Demo',
    components: {
        Landmark,
        Star,
        StarHalf,
        Plus,
        FilePenLine,
        MessageSquare,
        Banknote,
        Headset,
        ClipboardList,
        Quote,
        Shield,
        Eye,
        Users,
        PiggyBank,
        ChevronRight,
        Briefcase,
        TrendingUp,
        Facebook,
        Mail,
        Globe
    }
});
</script>

<template>
    <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm">
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
                    <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="#">Servicios</a>
                    <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="#">Casos de
                        Éxito</a>
                    <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="#">Blog</a>
                    <a class="text-slate-600 hover:text-primary font-medium transition-colors" href="#">Contacto</a>
                </div>
                <div class="flex items-center space-x-4">
                    <button
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
                            <img class="w-full h-full object-cover object-center scale-110"
                                data-alt="Person with laptop"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA9Dr-okUF72OoP9UXDaMZrKiH_vyskBG841rMFjnbjGSgOxvXKsf--479xGonK1V1O-wnIlWwS56wuRBjspwe7xVcUuSHfNbUYb0KxfuY_hpNGnqFXXW-16uskbudHJCVkK6flf6cXyBecazMpi_46e3WWQm_4a9yYFhBchskBpmuq1FRhCFeninDLIlw8bLwms1jvW8ruZXuH-WY3PUyxJTtu_hD9c_tiOEJMc3kgGz11XnKQuxrirCNizkAmS83ZTzfl5aEoU2Z"
                                draggable="false" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-[#1a2533] py-24 relative overflow-visible">
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
                            data-alt="Person holding tablet transparent background"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA9Dr-okUF72OoP9UXDaMZrKiH_vyskBG841rMFjnbjGSgOxvXKsf--479xGonK1V1O-wnIlWwS56wuRBjspwe7xVcUuSHfNbUYb0KxfuY_hpNGnqFXXW-16uskbudHJCVkK6flf6cXyBecazMpi_46e3WWQm_4a9yYFhBchskBpmuq1FRhCFeninDLIlw8bLwms1jvW8ruZXuH-WY3PUyxJTtu_hD9c_tiOEJMc3kgGz11XnKQuxrirCNizkAmS83ZTzfl5aEoU2Z"
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
                            class="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded font-bold uppercase flex items-center gap-2 transition-colors shadow-md">
                            <ClipboardList class="w-5 h-5" /> Solicitar préstamo
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-32 bg-white relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div class="relative">
                        <div class="overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-xl h-[500px]">
                            <img class="w-full h-full object-cover" data-alt="Small business owners success story"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPmy9slGXU1hg15QP_teIWTgZeN6ORXG7K_9rFbPw4yt0VAoa_Ydg3MgWlpU3knnnTuDAf_7GTypRTcCagwzA1NlBTy43i8DPxN5NlrjhnZlcCMc597BvKLsHnRKVqIi26v19YN53t7v8A0wkBKorKT4j5RJHTWEnl4rmHJv0UDQu3PApXcDfp4Tm_k5q8HF9ED7GLwR_BrIQJcpCZFxoGRNDegW29-KcUffVhJpj_szaPfWG0GEyCYLXgPNQP6jLjplXqexGDZhY"
                                draggable="false" />
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
        <section class="py-10 bg-slate-50 border-y border-slate-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p class="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">Reconocido y
                    Regulado Por</p>
                <div
                    class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <img class="h-8" data-alt="FDIC insured logo placeholder"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh3wL4ZM9rM1-QQzrBI6iSK38v5MGopEGjJOTXfmnPW19kfInsX4VFN8JhJ88nxschbNGE5eZVFOSjLOQRy6paRom942AJ7vP0TRT05GfcbGiVgLB2tC1BuR1ZWw9qrpKTfRyH-eCz6cTn2miBb8nnJ8Rpgx3A8KtnQr7t3CdFpxXbMGQS2UdQ1uwZ1D-bLw5yKluFyUNR-xFyOvnbJBT2KTpvkaSoHBPsdItUsPPQ7C8BFCnwDop6zsFzXk_znfQyQBxExhYYbUrh"
                        dra ggable="false" />
                    <img class="h-8" data-alt="PCI-DSS compliance logo placeholder"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJve0TDscamnOAq8a9HRrwXE_8tIBZZdqHE-6sHnMfYPGoiT_p40gVzc0O_5RNKHocxPC91YePGwQLVlOM3QqvtNWqbIS9mC3sHEzW_HQwwifPudRKnLYJz_V4sBWCGiPHN8R-cPliNrmhu-jd3OJlgDWoR_OUvN8pybjj-eb1jQzFn49Qo6pAtRJhKZFSCEW6SxakkSPzrmRtsg_GFgL6XknkPGXi_M2vXUcA84RpH20WV7poxdZFAKAtFfNaP90lX_b2aEuvp35N"
                        draggable="false" />
                    <img class="h-8" data-alt="SIPC member logo placeholder"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIovSFz99F-Nj2IYdn3VArXbm12YG7-5rOR0tn4nrqr96fmFwiphb2Zq66DsM9M44_o1RdBjKVPo_XxqtaghKg0s8ArWx5OJO09Gpm0IVoXnQNaAn8stbrAyw45_5XUy5IovcjyqOV7ieeg30FhT3bOWmxek8u7FoAkwCQnvjKEvhuxk2PQCb7YTQBNfmaJ26jIdWh_tGiut__Rpeo207Wz1Z90hDFOXYcI_cywmhC50N2YtKm29ZM4dPiEZU29P7SvZ00HOICPKb2"
                        draggable="false" />
                    <img class="h-8" data-alt="Better Business Bureau A plus rating"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC61LgkRbk6BJq-3NzvQeQ5M-2e_m6u_KR3v4o_1Yz1zf3hderptIXBCGMckt-BEcB1fvsrLQ4JtXAfG6JsXkSNp2nsjEgPHREu38-rzuJLJ7PCv_KNsD-tBrm1svY-5hVP3rHozAFUbrDipiuqgRI_F-nZTEKtypuP2eYwhBEn9VMC580XbIku4YIrq6tcXE0hhDUHHZDqa1-ilKWh5DTae7G5OM5pZb5d9Lc4yTx17ZXqVFZ_7zkDazp1j6dlaBmDDUkb0KpyQlw-"
                        draggable="false" />
                    <img class="h-8" data-alt="Consumer Financial Protection Bureau logo"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuARckfcbLNok49XB9ujahfH7btoNDKYsoixXDhm64pJdhJMsepkWDOvMcGAXmUIdXboufp6M4N6AJMEW8YyX2Q1PNG6AaMU4zLWj2D0PTZ5L3KZao5c7ZMBvIEEjUIjOjCCD0MGrw6Ihxxe_nyfNQkUqJulXymCPeJjbxjDPIyLfTbxzsZqrz7Q6NXG0HoX-wm_cb_CnMAVHdjm12NQ8ec9Gtve1x-MbUKjhv9RfC5cuHOBDKsLAYCQvIOP16nqv4teneLIkYyBrMqO"
                        draggable="false" />
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
    </main>
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
                    <div class="flex items-center space-x-6">

                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>