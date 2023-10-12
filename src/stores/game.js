import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGameStore = defineStore('game', () => {
  const score = ref(0);
  const mistake = ref(0);
  const numberOfCards = ref(12);
  const cards = [];

  // Adds cards from gamepool to this component, duplicated and randomized
  function fillCards(origin, times = 2) {
    for (let i = 0; i < times; i++) {
      origin.forEach((data) => {
        cards.splice(randomPosition(cards), 0, { ...data });
      });
    }
  }

  // Returns a random position to insert into an array
  function randomPosition(targetArray) {
    const min = 0;
    const max = targetArray.length;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return { score, mistake, numberOfCards, cards, fillCards };
});
