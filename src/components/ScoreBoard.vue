<script setup>
import { useGameStore } from '../stores/game';

const game = useGameStore();
</script>

<template>
  <div class="name-register">
    <div>success: {{ game.success }}</div>
    <div>mistakes: {{ game.mistake }}</div>
  </div>
</template>

<style scoped></style>
