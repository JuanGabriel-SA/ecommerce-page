<template>
  <Transition name="fade">
    <div v-show="isCartVisible" class="cart">
      <div class="cart__header">
        <h3>Cart</h3>
      </div>

      <div class="cart__body">
        <h3
          class="cart__content cart__content--empty"
          v-if="cartStore.cart == 0"
        >
          Your cart is empty.
        </h3>
        <div v-else class="cart__content cart__content--products">
          <CartItem />
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.cart {
  background-color: white;
  top: 60px;
  right: -75px;
  width: 360px;
  height: 260px;
  border-radius: 10px;
  position: absolute;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  z-index: 3;

  button {
    width: 100%;
  }

  h3 {
    font-size: 16px;
  }

  &__header {
    border-bottom: 1px solid rgb(229, 229, 229);
    padding: 10px 20px;
  }

  &__content--empty {
    height: 170px;
    text-align: center;
    display: flex;
    align-items: center;
    margin: 0;
    opacity: 0.5;
  }

  &__content--products {
    display: flex;
    flex-direction: column;
    row-gap: 27px;
    padding: 20px 25px;
  }

  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 900px) {
  .cart {
    top: 55px;
    right: -17px;
  }
}
</style>

<script setup>
import { useCartStore } from "@/stores/cart";
import CartItem from "./CartItem.vue";
import Button from "./Button.vue";

const cartStore = useCartStore();

defineProps({ isCartVisible: Boolean });
</script>
