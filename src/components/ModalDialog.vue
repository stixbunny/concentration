<script setup>
import ModalTransition from './ModalTransition.vue';

const props = defineProps({
  condition: Boolean,
})
</script>

<template>
  <!-- <div v-if="props.condition" class="backdrop h-dscreen fixed top-0 left-0 w-full bg-black/50 z-10"></div> -->
  <ModalTransition>
    <dialog
      open
      v-if="props.condition"
      class="modal-dialog max-w-sm w-4/5 z-50 rounded shadow-sm shadow-slate-600 p-0 m-0 overflow-hidden bg-background dark:bg-background-dark mx-auto font-dialog border"
    >
    <slot></slot>
    </dialog>
  </ModalTransition>
</template>