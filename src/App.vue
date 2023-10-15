<script setup>
import TheGame from './components/TheGame.vue';
import NameRegister from './components/NameRegister.vue';
</script>

<template>
  <NameRegister />
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
