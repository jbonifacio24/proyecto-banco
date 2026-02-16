<script lang="ts">
import { defineComponent } from 'vue';
import {
    Globe,
    Facebook,
    SquarePlay,
    Info,
    Landmark,
    User,
    Lock,
    ArrowRight
} from 'lucide-vue-next';

export default defineComponent({
    name: 'LoginForm',
    components: {
        Globe,
        Facebook,
        SquarePlay,
        Info,
        Landmark,
        User,
        Lock,
        ArrowRight
    }
});
</script>

<template>
    <div class="font-display bg-slate-900 text-slate-100 h-screen overflow-hidden flex flex-col md:flex-row">
        <div class="hidden md:flex flex-1 relative bg-slate-800 items-center justify-center overflow-hidden">
            <img alt="Laptop showing banking dashboard" class="absolute inset-0 w-full h-full object-cover opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy5R4uf6K49jenHj-hZ2n6Gh7c6YGPurye3USXgfCYV48-2vC0yHib7Ea3O4kXv_QWrg9WZ9LEBORP_zMzRZ8-Fl2Ogjywz7I26Fax386Tve9rJrhmKrUWiGQbk5C_-jH9hdoGUHFNTJT_U15AecjHYTB0P5A_sWEOsTANXVz5sEyVLJZ1YVJohXc2DNrqeweXPWV_GIkVFt_qjS9IMulTkgPSFZgfhfPr4BxMKrbOAnZCMtJM6QqTZUK9IfXxHhTxDvHnrkzzSrUj" />
            <div class="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent"></div>
            <div class="absolute bottom-8 left-8 flex items-center gap-4 text-white/80 z-10">
                <div class="flex gap-3">
                    <a class="hover:text-primary transition-colors" href="#">
                        <Globe class="w-5 h-5" />
                    </a>
                    <a class="hover:text-primary transition-colors" href="#">
                        <Facebook class="w-5 h-5" />
                    </a>
                    <a class="hover:text-primary transition-colors" href="#">
                        <SquarePlay class="w-5 h-5" />
                    </a>
                    <a class="hover:text-primary transition-colors" href="#">
                        <Info class="w-5 h-5" />
                    </a>
                </div>
                <div class="h-4 w-px bg-white/30"></div>
                <span class="text-sm font-medium tracking-wide">+51 998 457 845</span>
            </div>
        </div>
        <div
            class="w-full md:w-[480px] lg:w-[550px] bg-[#1a2533]/95 relative flex flex-col justify-between p-8 md:p-12 shadow-2xl z-20 border-l border-white/5">

            <div class="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
                <div class="flex items-center gap-3 mb-12">
                    <div
                        class="w-10 h-10 bg-gradient-to-br from-primary to-orange-400 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                        <Landmark class="text-white w-6 h-6" />
                    </div>
                    <span class="text-2xl font-extrabold tracking-tight text-white">MiBanco<span
                            class="text-primary">App</span></span>
                </div>
                <h1 class="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Banca por Internet</h1>
                <form action="#" class="space-y-6">
                    <div class="flex justify-between items-end mb-2">
                        <label class="text-sm font-bold text-slate-300" for="username">ID de Usuario</label>
                        <a class="text-xs text-primary hover:text-primary-dark transition-colors" href="#">¿Olvidé mi
                            usuario?</a>
                    </div>
                    <div class="relative group">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User class="text-slate-500 group-focus-within:text-primary transition-colors w-5 h-5" />
                        </div>
                        <input
                            class="block w-full pl-10 pr-3 py-3 bg-white text-slate-900 border-0 rounded-md ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-primary focus:bg-white placeholder:text-slate-400 sm:text-sm sm:leading-6 transition-all"
                            id="username" placeholder="Ingrese su ID" type="text" />
                    </div>
                    <div class="space-y-2 pt-2">
                        <div class="flex justify-between items-end mb-2">
                            <label class="text-sm font-bold text-slate-300" for="password">Contraseña</label>
                            <a class="text-xs text-primary hover:text-primary-dark transition-colors" href="#">¿Olvidé
                                mi
                                contraseña?</a>
                        </div>
                        <div class="relative group">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock
                                    class="text-slate-500 group-focus-within:text-primary transition-colors w-5 h-5" />
                            </div>
                            <input
                                class="block w-full pl-10 pr-3 py-3 bg-white text-slate-900 border-0 rounded-md ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-primary focus:bg-white placeholder:text-slate-400 sm:text-sm sm:leading-6 transition-all"
                                id="password" placeholder="••••••••" type="password" />
                        </div>
                    </div>
                    <button @click="$router.push({ name: 'dashboard' })"
                        class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded-md shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 mt-6 flex justify-center items-center gap-2 cursor-pointer"
                        type="button">
                        <span>Iniciar Sesión</span>
                        <ArrowRight class="w-4 h-4" />
                    </button>
                </form>
                <div class="mt-8 pt-8 border-t border-white/10 text-center">
                    <p class="text-slate-400 text-sm">¿Aún no tienes cuenta?</p>
                    <a class="text-primary font-semibold hover:text-primary-dark text-sm mt-2 inline-block"
                        href="#">Registrarse Ahora</a>
                </div>
            </div>
            <div
                class="mt-12 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <a class="hover:text-white transition-colors" href="#">Ayuda</a>
                <span class="text-slate-700">|</span>
                <a class="hover:text-white transition-colors" href="#">Privacidad</a>
                <span class="text-slate-700">|</span>
                <a class="hover:text-white transition-colors" href="#">Seguridad</a>
                <span class="text-slate-700">|</span>
                <a class="hover:text-white transition-colors" href="#">Requisitos</a>
            </div>
        </div>
    </div>
</template>
