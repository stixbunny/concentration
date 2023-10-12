<script setup>
const props = defineProps({
  title: String,
  url: String,
});
</script>

<template>
  <div class="game-card h-full w-full">
    <img :src="props.url" alt="card" class="object-cover">
  </div>
</template>

<style scoped>

</style>