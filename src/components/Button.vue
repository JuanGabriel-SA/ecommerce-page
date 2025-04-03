<template>
  <button class="button-component">
    <slot></slot>
  </button>
</template>

<style>
.button-component {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  column-gap: 13px;
  border: none;
  background-color: var(--col-prim-orng);
  color: black;
  font-weight: 700;
  border-radius: 10px;
  color: black;
  cursor: pointer;
  transition: var(--d-transition);
  padding: 17px 20px;

  span {
    transform: scale(0.8);
  }
}

.button-component:hover {
  opacity: 0.7;
}
</style>
