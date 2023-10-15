<script setup>
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import ModalTransition from './ModalTransition.vue';

const user = useStorage('user-name', '', localStorage);

const error = ref(false);

function checkName(event) {
  const name = event.target.elements.name.value.trim();
  if( name.length < 3 || name.length > 10) {
    error.value = true;
  } else {
    user.value = name;
  }
}
</script>

<template>
  <div v-if="!user" class="backdrop fixed top-0 left-0 h-screen w-full bg-black/75 z-10"></div>
  <ModalTransition>
    <dialog
      open
      v-if="!user"
      class="name-register fixed top-1/3 max-w-sm w-4/5 z-50 rounded shadow-sm shadow-black p-0 m-0 overflow-hidden bg-white mx-auto font-dialog"
    >
      <form @submit.prevent="checkName" class="name-register_form p-4 flex flex-col gap-4">
        <h2 class="name-register_title m-0 text-center font-bold">
          Por favor ingresa tu nombre para poder jugar
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Jugador"
          class="name-register_name rounded shadow bg-white border p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p class="name-register_warning text-red-500 text-xs italic data-[error=false]:hidden" :data-error="error">
          Ingresa un nombre entre 3 y 10 caracteres.
        </p>
        <button
          type="submit"
          class="name-register_submit rounded shadow bg-cyan-500 hover:bg-cyan-700 p-2 font-bold text-white focus:outline-none focus:shadow-outline"
        >
          Ingresar
        </button>
      </form>
    </dialog>
  </ModalTransition>
</template>

<style scoped>
.name-register_title {
  text-wrap: balance;
}
</style>
