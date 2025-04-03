<template>
  <Transition name="fade">
    <div v-if="showModal" class="modal" @click.self="$emit('close')">
      <slot></slot>
    </div>
  </Transition>
</template>
<style lang="scss">
.modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
}
</style>
<script setup>
defineProps({ showModal: Boolean });
</script>
