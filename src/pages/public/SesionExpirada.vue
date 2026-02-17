<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-white rounded-xl shadow-lg p-10 max-w-md w-full text-center mx-auto">
      <img src="/assets/img/caratriste.svg" alt=":(" class="w-24 h-24 mx-auto mb-6" />
      <h2 class="text-3xl font-bold mb-3 text-red-600">Sesión expirada</h2>
      <p class="mb-6 text-gray-700 text-lg">Por seguridad, tu sesión ha finalizado. <br>Por favor, vuelve a iniciar el proceso.</p>
      <router-link to="./">
        <button class="bg-primary text-white px-8 py-3 rounded font-bold text-lg">Ir a página principal</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.bg-primary {
  background-color: #ff7300;
}
</style>
