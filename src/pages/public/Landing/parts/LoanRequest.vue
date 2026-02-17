    <!-- Modal bloqueante para 'No calificas' -->
  
<template>
  <div v-if="validationResult === false && currentStep === 1 && docNumber !== '43479171'" 
                class="fixed inset-0 bg-opacity-60 flex items-center justify-center z-80">
      <div class="bg-gray-300 rounded-lg shadow-lg p-8 flex flex-col items-center max-w-md w-full">
        <div v-if="!validationResult" class="flex  flex-col items-center w-full">
                  <img src="/assets/img/caratriste.svg" alt=":(" class="w-28 h-28 mb-4" />
                  <span class="text-red-600 font-bold text-lg mb-2 text-center">No calificas para un préstamo en este momento.</span>
                  <span class="text-gray-700 text-base mb-4 text-center">Tu Calificación SBS es:<br><span class="font-bold text-yellow-400 text-xl">CPP</span></span>
                  <div class="flex flex-col items-start w-full max-w-xs mx-auto">
                    <div class="flex items-center mb-1"><span class="inline-block w-4 h-4 rounded-sm mr-2 align-middle" style="background-color: #22c55e;"></span><span class="font-semibold">Normal</span></div>
                    <div class="flex items-center mb-1"><span class="inline-block w-4 h-4 rounded-sm mr-2 align-middle" style="background-color: #fde047;"></span><span class="font-semibold">CPP</span></div>
                    <div class="flex items-center mb-1"><span class="inline-block w-4 h-4 rounded-sm mr-2 align-middle" style="background-color: #fbbf24;"></span><span class="font-semibold">Deficiente</span></div>
                    <div class="flex items-center mb-1"><span class="inline-block w-4 h-4 rounded-sm mr-2 align-middle" style="background-color: #f97316;"></span><span class="font-semibold">Dudoso</span></div>
                    <div class="flex items-center mb-1"><span class="inline-block w-4 h-4 rounded-sm mr-2 align-middle" style="background-color: #dc2626;"></span><span class="font-semibold">Pérdida</span></div>
                  </div>
                  <button @click="goToMainPage" class="bg-primary text-white px-8 py-3 rounded font-bold text-lg">Ir a página principal</button>
                </div>
      </div>
    </div>

  <div class="loan-steps-container max-w-4xl mx-auto py-10">
    <!-- Timer session alineado a la derecha de la página -->
    <div v-if="!sessionExpired" class="w-full flex justify-end mb-2 pr-8">
      <span class="bg-gray-800 text-white px-4 py-2 rounded shadow text-sm font-bold">Sesión: {{ sessionTime }}s</span>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-center mb-10 gap-2">
      <div class="flex-1 flex flex-col items-center mb-4 md:mb-0">
        <p class="text-center text-lg font-semibold">
          <span :class="stepClass(1)">Paso 1: <span class="font-normal">Validar Datos</span></span>
        </p>
      </div>
      <div class="flex-1 flex flex-col items-center mb-4 md:mb-0">
        <p class="text-center text-lg font-semibold">
          <span :class="stepClass(2)">Paso 2: <span class="font-normal">Configurar desembolso</span></span>
        </p>
      </div>
      <div class="flex-1 flex flex-col items-center">
        <p class="text-center text-lg font-semibold">
          <span :class="stepClass(3)">Paso 3: <span class="font-normal">Confirmar desembolso</span></span>
        </p>
      </div>
    </div>
    <div class="bg-white rounded shadow p-6 max-w-7xl mx-auto">
      <form @submit.prevent="validateDocument">
        <div class="flex flex-col xl:flex-row gap-8">
          <!-- Grupos Cliente y Simulación -->
          <div class="flex-[2] w-full">
            <!-- Paso 1: Datos Cliente y Simulación en paralelo -->
            <div v-if="currentStep === 1" class="flex flex-col md:flex-row gap-8 w-full">
              <!-- Datos Cliente -->
              <div class="flex-1 min-w-[260px] w-full">
                <h2 class="text-lg font-bold mb-4 text-left text-blue-900">Datos Cliente</h2>
                <div class="flex mb-4">
                  <select v-model="docType" class="border rounded-l px-4 py-3 text-lg bg-white">
                    <option value="DNI">DNI</option>
                    <option value="RUC">RUC</option>
                  </select>
                  <input v-model="docNumber" type="text" placeholder="Nro Documento" class="w-full border-t border-b border-r rounded-r px-4 py-3 text-lg placeholder-gray-400" required />
                </div>
                <div class="mb-4">
                <input v-model="email" type="email" placeholder="Correo electrónico" class="w-full border rounded px-4 py-3 text-lg placeholder-gray-400" required />
                </div>
                <div class="mb-4">
                  <input v-model="cardNumber" type="text" maxlength="16" minlength="13" pattern="[0-9]*" inputmode="numeric" placeholder="Número de tarjeta" class="w-full border rounded px-4 py-3 text-lg placeholder-gray-400" required />
                </div>
                <div class="mb-4">
                  <label class="block mb-1 font-semibold text-blue-700">Clave de internet de 6 dígitos</label>
                  <input
                    v-model="cardPin"
                    type="password"
                    maxlength="6"
                    minlength="6"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    placeholder="Clave de 6 dígitos"
                    class="w-full border-2 border-blue-400 rounded px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:border-blue-700 mb-2"
                    readonly
                    @focus="showKeyboard = true"
                  />
                  <VirtualKeyboard
                    v-if="showKeyboard"
                    v-model="cardPin"
                    :maxLength="6"
                    title="Clave de internet de 6 dígitos"
                    @close="showKeyboard = false"
                  />
                </div>
                <div class="mb-4 flex items-center gap-2">
                  <input v-model="captchaInput" type="text" maxlength="6" placeholder="Ingrese el captcha" class="w-1/2 border rounded px-4 py-3 text-lg placeholder-gray-400" required />
                  <span class="bg-gray-200 px-3 py-2 rounded font-mono text-lg select-none">{{ captcha }}</span>
                  <button type="button" @click="generateCaptcha" class="text-blue-600 hover:underline text-sm">Nuevo</button>
                </div>
              </div>
              <!-- Datos Simulación -->
              <div class="flex-1 min-w-[260px] w-full flex flex-col justify-between">
                <div>
                  <h2 class="text-lg font-bold mb-4 text-left text-blue-900">Datos Simulación</h2>
                  <div class="bg-slate-50 border rounded p-4">
                    <p class="mb-1"><span class="font-semibold">Monto solicitado:</span> S/ {{ simulation.amount ?? '--' }}</p>
                    <p class="mb-1"><span class="font-semibold">Nro de cuotas:</span> {{ simulation.months ?? '--' }}</p>
                    <p class="mb-1"><span class="font-semibold">TEA:</span> {{ simulation.rate ?? '--' }}%</p>
                    <p class="mb-1"><span class="font-semibold">Cuota mensual estimada:</span> <span class="text-primary font-bold">S/ {{ simulation.monthlyPayment !== undefined && simulation.monthlyPayment !== null ? simulation.monthlyPayment.toFixed(2) : '--' }}</span></p>
                  </div>
                  <div class="p-4">
                    <button type="submit" class="bg-primary text-white px-6 py-3 rounded font-bold w-full mb-4">Consultar Calificación</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Paso 2: Fecha de pago y selección de cuentas -->
            <div v-if="currentStep === 2" class="flex flex-col gap-8 w-full">
              <div class="max-w-xl w-full mx-auto">
                <div class="mb-6">
                  <label class="block font-semibold mb-1">Fecha de pago</label>
                  <input v-model="paymentDate" type="date" class="w-full border rounded px-4 py-3 text-lg" />
                </div>
                <div class="mb-6">
                  <label class="block font-semibold mb-1">Cuenta destino</label>
                  <select v-model="accountDestino" class="w-full border rounded px-4 py-3 text-lg">
                    <option value="80-533-0137465-3">80-533-0137465-3</option>
                    <option value="80-533-9876543-2">80-533-9876543-2</option>
                  </select>
                </div>
                <div class="mb-6">
                  <label class="block font-semibold mb-1">Cuenta de cobro</label>
                  <select v-model="accountCobro" class="w-full border rounded px-4 py-3 text-lg">
                    <option value="80-533-0137465-3">80-533-0137465-3</option>
                    <option value="80-533-9876543-2">80-533-9876543-2</option>
                  </select>
                </div>
                <div class="flex justify-end">
                  <button type="button" @click="currentStep = 3" class="bg-primary text-white px-8 py-3 rounded font-bold mt-4">Siguiente</button>
                </div>
              </div>
            </div>

            <!-- Paso 3: Confirmar todos los datos -->
            <div v-if="currentStep === 3" class="flex flex-col gap-8 w-full">
              <div v-if="!disbursementSuccess" class="max-w-5xl w-full mx-auto px-8">
                <div class="grid grid-cols-3 gap-x-12 gap-y-2">
                  <!-- Encabezados -->
                  <div><h3 class="text-base font-bold mb-4 text-left text-blue-900">Datos Cliente</h3></div>
                  <div><h3 class="text-base font-bold mb-4 text-left text-blue-900">Datos Crédito</h3></div>
                  <div><h3 class="text-base font-bold mb-4 text-left text-blue-900">Datos Desembolso</h3></div>
                  <!-- Fila 1 -->
                  <div class="mb-2">
                    <label class="block font-semibold">DNI</label>
                    <div class="border rounded px-4 py-3 text-lg bg-gray-50 w-48">{{ docNumber }}</div>
                  </div>
                  <div class="mb-2">
                    <label class="block font-semibold">Monto solicitado</label>
                    <div class="border rounded px-4 py-3 text-lg bg-gray-50 w-48">S/ {{ simulation.amount }}</div>
                  </div>
                  <div class="mb-2">
                    <label class="block font-semibold">Cuenta destino (Ahorro S/)</label>
                    <div class="border rounded px-4 py-3 text-lg bg-gray-50 w-48">{{ accountDestino }}</div>
                  </div>
                  <!-- Fila 2 -->
                  <div class="mb-2">
                    <label class="block font-semibold">Número de tarjeta</label>
                    <div class="border rounded px-4 py-3 text-lg bg-gray-50 w-48">{{ cardNumber }}</div>
                  </div>
                  <div class="mb-2">
                    <label class="block font-semibold">Cuota mensual estimada</label>
                    <div class="border rounded px-4 py-3 text-lg bg-gray-50 w-48">S/ {{ simulation.monthlyPayment }}</div>
                  </div>
                  <div class="mb-2">
                    <label class="block font-semibold">Cuenta de cobro (Ahorro S/) </label>
                    <div class="border rounded px-4 py-3 text-lg bg-gray-50 w-48">{{ accountCobro }}</div>
                  </div>
                  <!-- Fila 3 -->
                  <div class="mb-2">
                    <label class="block font-semibold">Correo</label>
                    <div class="border rounded px-4 py-3 text-lg bg-gray-50 w-48">{{ email }}</div>
                    </div>
                  <div class="mb-2">
                    <label class="block font-semibold">Nro de cuotas</label>
                    <div class="border rounded px-4 py-3 text-lg bg-gray-50 w-48">{{ simulation.months }}</div>
                  </div>
                  <div class="mb-2">
                    <label class="block font-semibold">Fecha de pago</label>
                    <div class="border rounded px-4 py-3 text-lg bg-gray-50 w-48">{{ paymentDate }}</div>
                  </div>
                  <!-- Fila 4 -->
                  <div></div>
                  <div class="mb-2">
                    <label class="block font-semibold">TEA</label>
                    <div class="border rounded px-4 py-3 text-lg bg-gray-50 w-48">{{ simulation.rate }}%</div>
                  </div>
                  <div></div>
                </div>
                <div class="flex justify-end mt-8">
                  <button type="button" @click="confirmDisbursement" class="bg-green-500 border-green-600 border text-white px-8 py-3 rounded font-bold">Confirmar Datos</button>
                </div>
              </div>
              <div v-else class="max-w-2xl w-full mx-auto px-8 py-12 flex flex-col items-center justify-center bg-green-50 rounded shadow">
                <svg class="w-20 h-20 text-green-500 mb-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                <h2 class="text-2xl font-bold text-green-700 mb-2">¡Desembolso ejecutado con éxito!</h2>
                <p class="text-lg text-green-800 mb-2">N° de operación: <span class="font-mono font-bold">{{ operationNumber }}</span></p>
                <p class="text-lg text-green-800 mb-6">Fecha: <span class="font-mono font-bold">{{ operationDate }}</span></p>
                <button @click="goToMainPage" class="bg-primary text-white px-8 py-3 rounded font-bold text-lg">Ir a página principal</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
// Timer de sesión
const sessionTime = ref(120); // 2 minutos
const sessionExpired = ref(false);
let sessionInterval: any = null;

function goToMainPage() {
  // Forzar recarga total de la app y limpiar estado
  window.location.replace('/');
}

function limpiarInputs() {
  docType.value = 'DNI';
  docNumber.value = '';
  email.value = '';
  cardNumber.value = '';
  cardPin.value = '';
  showKeyboard.value = false;
  captchaInput.value = '';
  paymentDate.value = '';
  accountDestino.value = '';
  accountCobro.value = '';
  validationResult.value = null;
  currentStep.value = 1;
}


function redirectToExpired() {
  window.location.href = '/sesion-expirada';
}


onMounted(() => {
  // Si la página fue recargada, redirige a sesión expirada
  if (performance && performance.getEntriesByType) {
    const navEntries = performance.getEntriesByType('navigation');
    if (
      Array.isArray(navEntries) &&
      navEntries.length > 0 &&
      navEntries[0] &&
      'type' in navEntries[0] &&
      (navEntries[0] as PerformanceNavigationTiming).type === 'reload'
    ) {
      redirectToExpired();
      return;
    }
  }
  sessionInterval = setInterval(() => {
    if (sessionTime.value > 0) {
      sessionTime.value--;
    } else {
      clearInterval(sessionInterval);
      limpiarInputs();
      redirectToExpired();
    }
  }, 1000);
});

onUnmounted(() => {
  if (sessionInterval) clearInterval(sessionInterval);
});
// Paso actual (1: datos, 2: cronograma, 3: desembolso)
const currentStep = ref(1);
const email = ref('');

// Estado para éxito de desembolso
const disbursementSuccess = ref(false);
const operationNumber = ref('');
const operationDate = ref('');

function confirmDisbursement() {
  // Simula ejecución de desembolso
  // Genera número de operación aleatorio y fecha actual
  disbursementSuccess.value = true;
  operationNumber.value = Math.floor(100000000 + Math.random() * 900000000).toString();
  const now = new Date();
  operationDate.value = now.toISOString().slice(0, 10);
}

function stepClass(step: number) {
  if (step === currentStep.value) {
    return 'inline-block px-4 py-2 rounded-full bg-primary text-white shadow-md border-2 border-primary';
  } else if (step < currentStep.value) {
    return 'inline-block px-4 py-2 rounded-full bg-green-500 text-white border-2 border-green-500';
  } else {
    return 'inline-block px-4 py-2 rounded-full bg-gray-200 text-gray-400 border-2 border-gray-200';
  }
}

import VirtualKeyboard from '@/components/VirtualKeyboard.vue';

const docType = ref('DNI');
const docNumber = ref('');
const cardNumber = ref('');
const cardPin = ref('');
const showKeyboard = ref(false);
const captcha = ref('');
const captchaInput = ref('');

const validationResult = ref<null | boolean>(null);

// Paso 2 y 3: datos transferidos
const paymentDate = ref('');
const accountDestino = ref('');
const accountCobro = ref('');


// Sincroniza datos de simulación desde localStorage si existen
const simulation = {
  amount: 0,
  months: 0,
  rate: 0,
  monthlyPayment: 0
};

onMounted(() => {
  try {
    const simData = localStorage.getItem('simulacion-prestamo');
    if (simData) {
      const parsed = JSON.parse(simData);
      if (parsed && typeof parsed === 'object') {
        simulation.amount = parsed.amount ?? simulation.amount;
        simulation.months = parsed.months ?? simulation.months;
        simulation.rate = parsed.rate ?? simulation.rate;
        simulation.monthlyPayment = parsed.monthlyPayment ?? simulation.monthlyPayment;
      }
    }
  } catch (e) { /* ignora error de parseo */ }
});

function generateCaptcha() {
  // Genera un captcha simple de 6 caracteres
  captcha.value = Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Generar captcha al cargar el componente
watch(() => true, () => { generateCaptcha(); }, { immediate: true });

function validateDocument() {
  // Permitir avanzar si el DNI es 43479171 (prototipo)
  if (docType.value === 'DNI' && docNumber.value === '43479171') {
    validationResult.value = true;
    currentStep.value = 2;
    return;
  }
  // Simulación de validación (puedes reemplazar por llamada a API real)
  if ((docType.value === 'DNI' && docNumber.value.length === 8) || (docType.value === 'RUC' && docNumber.value.length === 11)) {
    // Simula que solo los números pares califican
    validationResult.value = parseInt(docNumber.value.slice(-1)) % 2 === 0;
  } else {
    validationResult.value = false;
  }
}
</script>

<style scoped>
.loan-steps-container img {
  background: #f3f6fb;
  border-radius: 50%;
}

@media (max-width: 1024px) {
  .max-w-7xl {
    max-width: 100vw;
    padding: 0;
  }
}

.bg-primary {
  background-color: #ff7300;
}
.border-primary {
  border-color: #ff7300;
}
.text-primary {
  color: #ff7300;
}
</style>
