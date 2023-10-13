<script setup>
import { computed } from 'vue';
import { useGameStore } from '../stores/game';

const game = useGameStore();
const baseClasses = ['the-board', 'grid', 'gap-4'];
const gridClasses = computed(() => {
  // Possible number of cards are 4, 6, 12, 16 and 20
  switch (game.numberOfCards) {
    case 4:
      return ['grid-cols-2', 'grid-rows-2'];
    case 6:
      return ['grid-cols-3', 'grid-rows-2'];
    case 12:
      return ['grid-cols-4', 'grid-rows-3'];
    case 16:
      return ['grid-cols-4', 'grid-rows-4'];
    case 20:
      return ['grid-cols-5', 'grid-rows-4'];
    default:
      return ['grid-cols-2', 'grid-rows-3'];
  }
});
</script>

<template>
  <div :class="baseClasses + gridClasses"></div>
</template>

<style scoped></style>
