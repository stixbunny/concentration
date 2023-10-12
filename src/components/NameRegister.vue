<script setup>
import { useStorage } from '@vueuse/core';

const user = useStorage('user-name', '', localStorage);
</script>

<template>
  <div class="name-register">
    <div v-if="!user">no user</div>
    <div>{{ user }}</div>
  </div>
</template>

<style scoped></style>
