<script setup>
import ModalTransition from './ModalTransition.vue';

const props = defineProps({
  condition: Boolean,
})
</script>

<template>
  <div v-if="props.condition" class="backdrop fixed top-0 left-0 h-screen w-full bg-black/50 z-10"></div>
  <ModalTransition>
    <dialog
      open
      v-if="props.condition"
      class="modal-dialog fixed top-1/3 max-w-sm w-4/5 z-50 rounded shadow-sm shadow-black p-0 m-0 overflow-hidden bg-white mx-auto font-dialog"
    >
    <slot></slot>
    </dialog>
  </ModalTransition>
</template>