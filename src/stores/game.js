import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useGameStore = defineStore('game', () => {
  const totalScore = ref(0);
  const success = ref(0);
  const mistake = ref(0);
  const numberOfCards = ref(12);
  const cards = ref([]);
  const selectedCards = ref([]);

  function selectCard(newCardName) {
    selectedCards.value.push(newCardName);
    console.log('selectedcards is now')
    console.log(selectedCards.value)
  }

  watch(
    () => selectedCards.value.length,
    (newLength, oldLength) => {
      console.log('watching')
      if (newLength === 2) {
        console.log(`selectedCards.value[0] = ${selectedCards.value[0]}`)
        console.log(`selectedCards.value[1] = ${selectedCards.value[1]}`)
        if (selectedCards.value[0] === selectedCards.value[1]) {
          success.value++
          totalScore.value++;
        } else {
          mistake.value++
          totalScore.value--;
        }
        selectedCards.value.length = 0;
      }
    }
  );

  // Adds cards from gamepool to this component, duplicated and randomized
  function fillCards(origin, times = 2) {
    for (let i = 0; i < times; i++) {
      origin.forEach((data) => {
        const newData = { ...data };
        console.log(`newData is`)
        console.log(newData)
        cards.value.splice(randomPosition(cards.value), 0, newData);
        console.log("cards is now")
        console.log(cards.value)
      });
    }
  }

  // Returns a random position to insert into an array
  function randomPosition(targetArray) {
    const min = 0;
    const max = targetArray.length;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return {
    totalScore,
    success,
    mistake,
    numberOfCards,
    selectedCards,
    cards,
    fillCards,
    selectCard,
  };
});
