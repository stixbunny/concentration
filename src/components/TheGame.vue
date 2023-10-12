<script setup>
import { useCardStore } from '../stores/card';

const card = useCardStore();
await card.fill();
</script>

<template>
  <div class="text-center" v-for="animal in card.animals" :key="animal.name">{{ animal.name }}</div>
</template>

<style scoped>

</style>
