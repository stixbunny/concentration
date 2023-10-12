<script setup>
import { useCardStore } from '../stores/card';
import { useGameStore } from '../stores/game';

const card = useCardStore();
const game = useGameStore();

await card.fillMainPool();

// Starts/Resets the game, setting up card info
const startGame = async function () {
  if (game.cards.length != 0) game.cards.length = 0;
  if (card.animals.length == 0) {
    await card.fillMainPool();
  }
  card.fillGamePool(game.numberOfCards/2);
  game.fillCards(card.gameAnimals);
  game.cards.forEach((card) => {
    console.log(card);
  });
};

startGame();
</script>

<template>
  <div class="the-game">
    <div class="text-center" v-for="animal in card.animals" :key="animal.name">
      {{ animal.name }}
    </div>
  </div>
</template>

<style scoped></style>
