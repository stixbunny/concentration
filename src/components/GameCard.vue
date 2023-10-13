<script setup>
import { ref, computed, watch } from 'vue';
import { useGameStore } from '../stores/game';
const props = defineProps({
  title: String,
  url: String,
});

const game = useGameStore();

const image = computed(() => props.url);
const selected = ref(false);
const cleared = ref(false);

function flipCard() {
  selected.value = !selected.value;
  console.log('flippling ' + props.title)
  game.selectCard(props.title);
}

watch(
  () => game.totalScore,
  (newScore, oldScore) => {
    if (selected.value === true && cleared.value === false) {
      if (newScore > oldScore) {
        console.log(`newScore: ${newScore} oldScore: ${oldScore}`)
        cleared.value = true;
      } else {
        setTimeout(() => {
          selected.value = false;
        }, 700);
      }
    }
  }
);
</script>

<template>
  <div
    class="game-card-container w-40 h-60 aria-hidden:pointer-events-none aria-hidden:cursor-not-allowed"
    @click="flipCard"
    :aria-hidden="cleared"
  >
    <div
      class="game-card h-full w-full relative cursor-pointer hover:scale-105 transition duration-700 shadow-sm aria-selected:scale-105 aria-selected:shadow-lg aria-selected:z-10"
      :aria-selected="selected"
    >
      <div class="game-card_back h-full w-full rounded-lg absolute bg-cyan-300"></div>
      <div
        class="game-card_front h-full w-full rounded-lg absolute object-cover bg-cover bg-center"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.game-card-container {
  perspective: 18rem;
}
.game-card[aria-selected='true'] {
  transform: rotateY(180deg) scale(1.05);
}
.game-card {
  transform-style: preserve-3d;
}
.game-card_back,
.game-card_front {
  backface-visibility: hidden;
}
.game-card_front {
  background-image: v-bind("'url(' + image + ')'");
  transform: rotateY(180deg);
}
</style>
