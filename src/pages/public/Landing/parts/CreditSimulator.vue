<template>
  <div class="credit-simulator p-6 bg-white rounded shadow-md max-w-md mx-auto max-h-[80vh] overflow-y-auto">
    <h3 class="text-xl font-bold mb-4">Datos de simulación</h3>
    <p class="text-xs text-gray-500 mb-2">Puedes ingresar hasta S/ 350,000</p>
    <form @submit.prevent="calculate">
      <div v-if="errorMsg" class="mb-4 text-red-600 text-sm font-semibold">{{ errorMsg }}</div>
      <div class="mb-4">
        <input v-model.number="amount" type="number" min="0" max="350000" placeholder="Monto en soles" class="w-full border rounded px-4 py-3 text-lg placeholder-gray-400" required />
      </div>
      <div class="mb-4">
        <input v-model.number="months" type="number" min="1" placeholder="Nro de cuotas" class="w-full border rounded px-4 py-3 text-lg placeholder-gray-400" required />
      </div>
      <div class="mb-4">
        <p class="text-xs text-gray-500 mb-1">Puedes ingresar desde 12.00%</p>
        <div class="relative">
          <input v-model.number="rate" type="number" min="12" step="0.01" placeholder="TEA(%)" class="w-full border rounded px-4 py-3 text-lg placeholder-gray-400 pr-10" required :class="{'border-red-500': rate < 12}" />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 cursor-pointer" title="Tasa Efectiva Anual mínima 12%">&#9432;</span>
        </div>
        <p v-if="rate < 12" class="text-xs text-red-600 mt-1">TEA mínimo 12.00%</p>
      </div>
      <button v-if="monthlyPayment === null || errorMsg" type="submit" class="bg-primary text-white px-6 py-3 rounded font-bold w-full mt-4">Simular Préstamo</button>
    </form>
    <div v-if="monthlyPayment !== null && !errorMsg" class="mt-6">
      <h3 class="font-semibold text-lg mb-2">Resultado de la simulación</h3>
      <div class="bg-gray-50 border rounded p-4">
        <p class="mb-1"><span class="font-semibold">Monto solicitado:</span> S/ {{ amount }}</p>
        <p class="mb-1"><span class="font-semibold">Nro de cuotas:</span> {{ months }}</p>
        <p class="mb-1"><span class="font-semibold">TEA:</span> {{ rate }}%</p>
        <p class="mb-1"><span class="font-semibold">Cuota mensual estimada:</span> <span class="text-primary font-bold">S/ {{ monthlyPayment.toFixed(2) }}</span></p>
      </div>
      <div class="flex gap-4 mt-4">
        <button @click="redirectToLoanPage" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold flex-1">Solicitar préstamo</button>
        <button @click="resetForm" class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded font-semibold flex-1">Volver a simular</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
function redirectToLoanPage() {
  // Guarda los datos simulados en localStorage antes de redirigir (cuota mensual a 2 decimales)
  localStorage.setItem('simulacion-prestamo', JSON.stringify({
    amount: amount.value,
    months: months.value,
    rate: rate.value,
    monthlyPayment: monthlyPayment.value !== null ? Number(monthlyPayment.value.toFixed(2)) : null
  }));
  window.location.href = '/solicitud-prestamo';
}

const amount = ref<number|null>(null);
const months = ref<number|null>(null);
const rate = ref(12);
const docNumber = ref('');
const errorMsg = ref('');
const monthlyPayment = ref<number|null>(null);



function resetForm() {
  amount.value = null;
  months.value = null;
  rate.value = 12;
  docNumber.value = '';
  errorMsg.value = '';
  monthlyPayment.value = null;
  // Recalcular inmediatamente después de limpiar
  calculate();
}


// Limpiar resultado de simulación al modificar cualquier input
watch([amount, months, rate], () => {
  monthlyPayment.value = null;
  errorMsg.value = '';
});

function calculate() {
  errorMsg.value = '';
  if (amount.value <= 0 || amount.value > 350000) {
    errorMsg.value = 'El monto debe ser mayor a 0 y hasta S/ 350,000.';
    return;
  }
  if (rate.value < 12) {
    errorMsg.value = 'La TEA mínima es 12.00%';
    return;
  }
 
  
  const principal = amount.value;
  const n = months.value || 1;
  const r = rate.value / 100 / 12;
  if (r === 0) {
    monthlyPayment.value = principal / n;
  } else {
    monthlyPayment.value = principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  }
}
</script>

<style scoped>
.credit-simulator input, .credit-simulator select {
  outline: none;
}
</style>
