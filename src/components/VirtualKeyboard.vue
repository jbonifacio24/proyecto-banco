<script lang="ts">
import { defineComponent } from 'vue';
import { X, Delete, Eraser } from 'lucide-vue-next';

export default defineComponent({
    name: 'VirtualKeyboard',
    components: {
        X,
        Delete,
        Eraser
    },
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        maxLength: {
            type: Number,
            default: 6
        },
        title: {
            type: String,
            default: 'Teclado Virtual Seguro'
        }
    },
    emits: ['update:modelValue', 'close'],
    data() {
        return {
            inputValue: '',
            keys: [] as string[]
        };
    },
    mounted() {
        this.inputValue = this.modelValue;
        this.generateRandomKeys();
    },
    methods: {
        generateRandomKeys() {
            const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            // Solo números y shuffle
            this.keys = numbers.sort(() => Math.random() - 0.5);
        },
        addKey(key: string) {
            if (this.inputValue.length < this.maxLength) {
                this.inputValue += key;
                this.$emit('update:modelValue', this.inputValue);
            }
        },
        backspace() {
            this.inputValue = this.inputValue.slice(0, -1);
            this.$emit('update:modelValue', this.inputValue);
        },
        clear() {
            this.inputValue = '';
            this.$emit('update:modelValue', this.inputValue);
        },
        close() {
            this.$emit('close');
        }
    }
});
</script>

<template>
    <div
        class="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm transition-all animate-in fade-in duration-300">
        <div
            class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform animate-in zoom-in-95 slide-in-from-bottom-10 duration-300 border border-slate-200">
            <!-- Header -->
            <div class="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <h3 class="text-slate-800 font-bold flex items-center gap-2">
                    <div class="w-1.5 h-6 bg-primary rounded-full"></div>
                    {{ title }}
                </h3>
                <button @click="close"
                    class="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-200">
                    <X class="w-6 h-6" />
                </button>
            </div>

            <!-- Display Area -->
            <div class="p-6 space-y-6">
                <div class="relative">
                    <input v-model="inputValue" readonly type="password" placeholder="••••••"
                        class="w-full bg-slate-50 border-2 border-slate-100 text-slate-900 text-center text-3xl tracking-[1.5em] font-mono py-4 rounded-xl focus:outline-none focus:border-primary/30 transition-all placeholder:tracking-normal placeholder:text-slate-300"
                        maxlength="maxLength" />
                    <div class="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                        <button @click="clear" class="p-2 text-slate-400 hover:text-red-500 transition-colors"
                            title="Limpiar">
                            <Eraser class="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <!-- Keyboard Grid -->
                <div class="grid grid-cols-6 gap-2">
                    <button v-for="key in keys" :key="key" @click="addKey(key)"
                        class="h-12 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-primary hover:border-primary hover:text-white active:scale-95 transition-all shadow-sm hover:shadow-md cursor-pointer text-lg">
                        {{ key }}
                    </button>

                    <!-- Control Keys -->
                    <button @click="backspace"
                        class="col-span-2 h-12 flex items-center justify-center bg-slate-100 border border-slate-200 rounded-lg text-slate-600 font-bold hover:bg-slate-200 active:scale-95 transition-all shadow-sm cursor-pointer gap-2">
                        <Delete class="w-5 h-5" />
                        <span class="text-sm">Borrar</span>
                    </button>

                    <button @click="close"
                        class="col-span-4 h-12 flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary-dark active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer">
                        Aceptar
                    </button>
                </div>
            </div>

            <!-- Footer Note -->
            <div class="bg-slate-50 px-6 py-3 border-t border-slate-100 italic text-[10px] text-slate-400 text-center">
                Por su seguridad, las teclas se ordenan aleatoriamente en cada acceso.
            </div>
        </div>
    </div>
</template>

<style scoped>
.font-mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style>
