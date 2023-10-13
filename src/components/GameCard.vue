<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
  title: String,
  url: String,
});
const image = computed(() => props.url);
const selected = ref(false);

function flipCard() {
  selected.value = !selected.value;
}
</script>

<template>
  <div class="game-card-container w-40 h-60" @click="flipCard" :aria-selected="selected">
    <div class="game-card h-full w-full relative cursor-pointer hover:scale-105 transition duration-700 aria-selected:scale-105" :aria-selected="selected">
      <div
        class="game-card_front h-full w-full absolute rounded-lg object-cover bg-cover bg-center backface-hidden"
      ></div>
      <div class="game-card_back h-full w-full absolute rounded-lg bg-cyan-300 backface-hidden"></div>
    </div>
  </div>
</template>

<style scoped>
.game-card-container[aria-selected='true'] > .game-card {
  transform: rotateY(180deg);
}
.game-card {
  transform-style: preserve-3d;
}
.game-card_front {
  background-image: v-bind("'url(' + image + ')'");
}
.game-card_back {
  transform: rotateY(180deg);
}
</style>
