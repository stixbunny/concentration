import { defineStore } from 'pinia';
import { useAnimals } from '../composables/useAnimals';

export const useCardStore = defineStore('card', () => {
  const animals = [];
  async function fill() {
    if (animals.length != 0) return;
    animals.push(...(await useAnimals()));
  }

  return { animals, fill };
});
