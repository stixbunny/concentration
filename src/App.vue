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

<style scoped></style>
