<script lang="ts">
import { defineComponent } from 'vue';
import {
    Wallet,
    Search,
    Headset,
    Bell,
    LogOut,
    ChevronDown,
    Gift,
    ChevronRight,
    Landmark,
    PiggyBank,
    ArrowRight,
    Banknote,
    CreditCard,
    FileText,
    PlusCircle,
    ArrowLeftRight,
    Receipt,
    Pencil,
    UserPlus
} from 'lucide-vue-next';

export default defineComponent({
    name: 'Dashboard',
    components: {
        Wallet,
        Search,
        Headset,
        Bell,
        LogOut,
        ChevronDown,
        Gift,
        ChevronRight,
        Landmark,
        PiggyBank,
        ArrowRight,
        Banknote,
        CreditCard,
        FileText,
        PlusCircle,
        ArrowLeftRight,
        Receipt,
        Pencil,
        UserPlus
    }
});
</script>

<template>
    <header class="bg-[#1a2533] text-white px-6 py-3 flex items-center justify-between shadow-md relative z-20">
        <div class="flex items-center gap-6 w-full max-w-7xl mx-auto">
            <div class="flex items-center gap-2 flex-shrink-0 cursor-pointer">
                <Wallet class="text-primary w-9 h-9" />
                <span class="text-xl font-bold tracking-tight"><span class="text-white">MiBanco</span><span
                        class="text-primary">App</span></span>
            </div>
            <div class="flex-grow max-w-xl mx-4 hidden md:block">
                <div class="relative">
                    <Search class="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                    <input
                        class="w-full bg-white text-gray-800 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary border-none text-sm placeholder-gray-500"
                        placeholder="Buscar servicios, pagos o ayuda..." type="text" />
                </div>
            </div>
            <div class="flex items-center gap-4 ml-auto">
                <div class="hidden lg:flex items-center gap-1 text-sm text-gray-300 hover:text-white cursor-pointer">
                    <Headset class="w-4 h-4" />
                    <span>Ayuda</span>
                </div>
                <button class="relative p-1 hover:bg-white/10 rounded-full transition-colors">
                    <Bell class="w-6 h-6" />
                    <span class="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                </button>
                <button class="p-1 hover:bg-white/10 rounded-full transition-colors">
                    <LogOut class="w-6 h-6" />
                </button>
                <div
                    class="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold border-2 border-white cursor-pointer text-white">
                    RR
                </div>
            </div>
        </div>
    </header>
    <nav
        class="bg-surface-light/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 py-0 shadow-sm sticky top-0 z-10 z-50">
        <div class="max-w-7xl mx-auto px-6">
            <ul
                class="flex items-center gap-8 overflow-x-auto text-sm font-medium hide-scrollbar min-h-[50px] overflow-y-hidden">
                <li><a class="text-primary border-b-2 border-primary pb-3 px-1 whitespace-nowrap" href="#">Inicio</a>
                </li>
                <li><a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap"
                        href="#">Cuentas</a></li>
                <li><a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap"
                        href="#">Transferir</a></li>
                <li><a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
                        href="#">Tarjetas
                        <ChevronDown class="w-4 h-4" />
                    </a></li>
                <li><a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
                        href="#">Préstamos
                        <ChevronDown class="w-4 h-4" />
                    </a></li>
                <li><a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
                        href="#">Inversiones
                        <ChevronDown class="w-4 h-4" />
                    </a></li>
                <li><a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap"
                        href="#">Seguros</a></li>
            </ul>
        </div>
    </nav>
    <main class="flex-grow bg-secondary-dark pt-8 pb-12 px-6">
        <div class="max-w-7xl mx-auto space-y-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-slate-900">
                <div>
                    <h1 class="text-2xl md:text-3xl font-bold">Bienvenido, Ravi Ramesh</h1>
                    <p class="text-gray-400 text-xs mt-1">Último acceso: 22/08/25, 12:08 PM</p>
                </div>
                <div
                    class="bg-gradient-to-r from-blue-400 to-cyan-300 text-secondary-dark rounded-lg px-4 py-2 flex items-center gap-3 shadow-lg cursor-pointer hover:shadow-xl transition-shadow w-full md:w-auto max-w-md">
                    <div class="bg-primary/20 p-2 rounded-full">
                        <Gift class="text-primary-dark w-5 h-5" />
                    </div>
                    <div class="flex-grow">
                        <p class="font-bold text-sm">¡Oferta Especial para ti!</p>
                        <p class="text-xs opacity-80">Préstamo personal pre-aprobado.</p>
                    </div>
                    <ChevronRight class="w-5 h-5" />
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                <div class="lg:col-span-2 space-y-6">
                    <div class="flex flex-wrap gap-3">
                        <button
                            class="bg-surface-light/10 backdrop-blur-sm border border-white/20 text-primary hover:text-white hover:bg-primary hover:border-primary px-4 py-2 rounded-full flex items-center gap-2 transition-all active-pill ring-2 ring-primary bg-secondary-dark border-primary">
                            <Landmark class="w-4 h-4" />
                            <span class="font-medium text-sm">Cuentas</span>
                        </button>
                        <button
                            class="bg-surface-light/5 text-gray-900 hover:bg-surface-light/10 hover:text-slate-600 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer">Tarjetas</button>
                        <button
                            class="bg-surface-light/5 text-gray-900 hover:bg-surface-light/10 hover:text-slate-600 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer">Depósitos</button>
                        <button
                            class="bg-surface-light/5 text-gray-900 hover:bg-surface-light/10 hover:text-slate-600 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer">Préstamos</button>
                        <button
                            class="bg-surface-light/5 text-gray-900 hover:bg-surface-light/10 hover:text-slate-600 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer">Inversiones</button>
                    </div>
                    <div class="flex items-center gap-3 text-slate-900">
                        <span class="text-sm font-medium">Mostrar Balance</span>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input :checked="false" class="sr-only peer" type="checkbox" value="" />
                            <div
                                class="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                            </div>
                        </label>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div
                            class="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-lg border-l-4 border-purple-500 relative overflow-hidden group">
                            <div
                                class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <PiggyBank class="w-16 h-16 text-purple-500" />
                            </div>
                            <div class="relative z-10">
                                <div class="flex justify-between items-start mb-4">
                                    <div
                                        class="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-300">
                                        <Wallet class="w-5 h-5" />
                                    </div>
                                    <ArrowRight class="text-gray-400 cursor-pointer hover:text-gray-600 w-5 h-5" />
                                </div>
                                <h3 class="text-sm text-gray-500 dark:text-gray-400 font-medium">Cuenta de Ahorros</h3>
                                <p class="text-lg font-bold text-gray-800 dark:text-white mt-1">XXXXXXXX1234</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-white mt-2">$ 12,450.00</p>
                                <button
                                    class="mt-4 w-full bg-secondary-dark text-white hover:bg-blue-900 py-2 rounded-md text-sm font-medium transition-colors">
                                    Ver Estado
                                </button>
                            </div>
                        </div>
                        <div
                            class="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-lg border-l-4 border-blue-500 relative overflow-hidden group">
                            <div
                                class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Banknote class="w-16 h-16 text-blue-500" />
                            </div>
                            <div class="relative z-10">
                                <div class="flex justify-between items-start mb-4">
                                    <div
                                        class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-300">
                                        <Landmark class="w-5 h-5" />
                                    </div>
                                    <ArrowRight class="text-gray-400 cursor-pointer hover:text-gray-600 w-5 h-5" />
                                </div>
                                <h3 class="text-sm text-gray-500 dark:text-gray-400 font-medium">Cuenta Corriente</h3>
                                <p class="text-lg font-bold text-gray-800 dark:text-white mt-1">XXXXXXXX5678</p>
                                <p class="text-2xl font-bold text-gray-900 dark:text-white mt-2">$ 5,230.50</p>
                                <button
                                    class="mt-4 w-full bg-white border border-secondary-dark text-secondary-dark hover:bg-gray-50 py-2 rounded-md text-sm font-medium transition-colors">
                                    Transferir
                                </button>
                            </div>
                        </div>
                        <div
                            class="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-5 shadow-lg text-white relative overflow-hidden">
                            <div class="absolute bottom-0 right-0 opacity-20 transform translate-y-4 translate-x-4">
                                <CreditCard class="w-32 h-32" />
                            </div>
                            <div class="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div class="flex justify-between items-start mb-2">
                                        <div class="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                            <CreditCard class="w-5 h-5" />
                                        </div>
                                        <ArrowRight class="cursor-pointer hover:text-gray-200 w-5 h-5" />
                                    </div>
                                    <h3 class="text-sm font-medium text-white/90">Tarjeta Platinum</h3>
                                    <p class="text-xs mt-2 text-white/80">Paga tu estado de cuenta en cuotas cómodas.
                                    </p>
                                </div>
                                <button
                                    class="mt-4 w-full bg-white text-indigo-600 hover:bg-gray-100 py-2 rounded-md text-sm font-bold transition-colors">
                                    Convertir Compra
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-1">
                    <div class="bg-surface-light dark:bg-surface-dark rounded-xl p-6 h-full shadow-lg">
                        <h2
                            class="text-xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                            Mis Enlaces Favoritos</h2>
                        <div class="space-y-1">
                            <a class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 group transition-colors"
                                href="#">
                                <div class="flex items-center gap-3">
                                    <FileText
                                        class="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform w-5 h-5" />
                                    <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">Descargar
                                        Estados</span>
                                </div>
                                <ChevronRight class="text-gray-400 w-4 h-4" />
                            </a>
                            <a class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 group transition-colors"
                                href="#">
                                <div class="flex items-center gap-3">
                                    <PlusCircle
                                        class="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform w-5 h-5" />
                                    <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">Abrir Depósito a
                                        Plazo</span>
                                </div>
                                <ChevronRight class="text-gray-400 w-4 h-4" />
                            </a>
                            <a class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 group transition-colors"
                                href="#">
                                <div class="flex items-center gap-3">
                                    <CreditCard
                                        class="text-primary group-hover:scale-110 transition-transform w-5 h-5" />
                                    <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">Pagar
                                        Tarjetas</span>
                                </div>
                                <ChevronRight class="text-gray-400 w-4 h-4" />
                            </a>
                            <a class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 group transition-colors"
                                href="#">
                                <div class="flex items-center gap-3">
                                    <ArrowLeftRight
                                        class="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform w-5 h-5" />
                                    <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">Transferencias
                                        Frecuentes</span>
                                </div>
                                <ChevronRight class="text-gray-400 w-4 h-4" />
                            </a>
                            <a class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 group transition-colors"
                                href="#">
                                <div class="flex items-center gap-3">
                                    <Receipt
                                        class="text-red-500 dark:text-red-400 group-hover:scale-110 transition-transform w-5 h-5" />
                                    <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">Centro de
                                        Impuestos</span>
                                </div>
                                <ChevronRight class="text-gray-400 w-4 h-4" />
                            </a>
                        </div>
                        <div class="mt-8 pt-4 border-t border-gray-100 dark:border-gray-700 text-center">
                            <button
                                class="text-primary hover:text-primary-dark font-medium text-sm flex items-center justify-center gap-2 w-full py-2 hover:bg-orange-50 dark:hover:bg-orange-900/10 rounded-lg transition-colors">
                                <Pencil class="w-4 h-4" />
                                Editar Enlaces
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg p-6 mt-8">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div class="flex items-center gap-3">
                        <h2 class="text-lg font-bold text-gray-800 dark:text-white">Transferencia Rápida</h2>
                        <span
                            class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-600">Doméstica</span>
                    </div>
                    <button class="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-1">
                        <UserPlus class="bg-orange-100 dark:bg-orange-900/30 rounded-full p-1 w-7 h-7" />
                        Agregar Beneficiario
                    </button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div class="md:col-span-4">
                        <label
                            class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">Cuenta
                            Destino</label>
                        <div class="relative">
                            <select
                                class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option>Mis Cuentas / Otras Cuentas</option>
                                <option>Juan Pérez (Beneficiario)</option>
                                <option>Electricidad (Servicio)</option>
                            </select>
                            <ChevronDown class="absolute right-3 top-3.5 text-gray-400 pointer-events-none w-5 h-5" />
                        </div>
                    </div>
                    <div class="md:col-span-4">
                        <label
                            class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">Cuenta
                            Origen</label>
                        <div class="relative">
                            <select
                                class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option>Seleccionar una Cuenta</option>
                                <option>Ahorros - 1234 ($12,450)</option>
                                <option>Corriente - 5678 ($5,230)</option>
                            </select>
                            <ChevronDown class="absolute right-3 top-3.5 text-gray-400 pointer-events-none w-5 h-5" />
                        </div>
                    </div>
                    <div class="md:col-span-2">
                        <label
                            class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">Importe</label>
                        <div class="relative">
                            <span class="absolute left-3 top-3 text-gray-500 font-bold">$</span>
                            <input
                                class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg py-3 pl-7 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium"
                                placeholder="0.00" type="text" />
                        </div>
                    </div>
                    <div class="md:col-span-2">
                        <button
                            class="w-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8">
        <div class="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© 2026 MiBancoApp. Todos los derechos reservados.</p>
            <div class="flex justify-center gap-4 mt-2">
                <a class="hover:text-primary" href="#">Privacidad</a>
                <a class="hover:text-primary" href="#">Seguridad</a>
                <a class="hover:text-primary" href="#">Términos de Uso</a>
            </div>
        </div>
    </footer>
</template>
