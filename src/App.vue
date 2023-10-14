<script setup>
import TheGame from './components/TheGame.vue';
import NameRegister from './components/NameRegister.vue';
import { useStorage } from '@vueuse/core';
import ModalTransition from './components/ModalTransition.vue';

const user = useStorage('user-name', '', localStorage);

</script>

<template>
  <ModalTransition>
    <NameRegister v-if="!user" />
  </ModalTransition>
  <Suspense>
    <TheGame />
  </Suspense>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
