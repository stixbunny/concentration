<script setup>
import { useStorage } from '@vueuse/core';
import TheGame from './components/TheGame.vue';

const user = useStorage('user-name', '', localStorage);
</script>

<template>
  <Suspense>
    <TheGame />
  </Suspense>
  <div v-if="!user">no user</div>
  <div>{{ user }}</div>
</template>

<style scoped></style>
