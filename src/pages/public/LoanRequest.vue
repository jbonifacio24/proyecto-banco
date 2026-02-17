<template>
  <div class="loan-steps-container max-w-4xl mx-auto py-10">
    <div class="flex flex-col md:flex-row justify-between items-center mb-10">
      <div class="flex-1 flex flex-col items-center">
        <img src="/assets/img/step1.png" alt="Paso 1" class="w-24 h-24 mb-2" />
        <p class="text-center text-lg"><span class="font-semibold">1. </span>Ingresa tu <span class="font-bold">DNI</span> o <span class="font-bold">RUC</span> para validar si calificas</p>
      </div>
      <div class="flex-1 flex flex-col items-center mt-8 md:mt-0">
        <img src="/assets/img/step2.png" alt="Paso 2" class="w-24 h-24 mb-2" />
        <p class="text-center text-lg"><span class="font-semibold">2. </span>Desembolsa el monto que desees directamente a tu cuenta BCP.</p>
      </div>
      <div class="flex-1 flex flex-col items-center mt-8 md:mt-0">
        <img src="/assets/img/step3.png" alt="Paso 3" class="w-24 h-24 mb-2" />
        <p class="text-center text-lg"><span class="font-semibold">3. </span><span class="font-bold">¡Listo!</span> Ya estás participando.</p>
      </div>
    </div>
    <div class="bg-white rounded shadow p-6 max-w-md mx-auto">
      <h2 class="text-xl font-bold mb-4 text-center">Validar Calificación</h2>
      <form @submit.prevent="validateDocument">
        <div class="flex mb-4">
          <select v-model="docType" class="border rounded-l px-4 py-3 text-lg bg-white">
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
          </select>
          <input v-model="docNumber" type="text" placeholder="Nro Documento" class="w-full border-t border-b border-r rounded-r px-4 py-3 text-lg placeholder-gray-400" required />
        </div>
        <button type="submit" class="bg-primary text-white px-6 py-3 rounded font-bold w-full">Validar</button>
      </form>
      <div v-if="validationResult !== null" class="mt-4 text-center">
        <span v-if="validationResult" class="text-green-600 font-semibold">¡Estás calificado para solicitar un préstamo!</span>
        <span v-else class="text-red-600 font-semibold">No calificas para un préstamo en este momento.</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const docType = ref('DNI');
const docNumber = ref('');
const validationResult = ref<null | boolean>(null);

function validateDocument() {
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
</style>
