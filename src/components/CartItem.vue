<template>
  <div class="cart-item">
    <img src="../assets/images/image-product-1-thumbnail.jpg" alt="Thumbnail do carrinho" class="cart-item__thumb" />
    <div class="cart-item__info">
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        $125.00 x {{ cartStore.cart }} <strong>${{ calculatePrice }}</strong>
      </p>
    </div>
    <span @click="deleteItem" class="cart-item__delete-icon">
      <svg
        width="14"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
            id="a"
          />
        </defs>
        <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
      </svg>
    </span>
  </div>
</template>

<style lang="scss">

.cart-item {
    display: flex;
    column-gap: 15px;
    align-items: center;
    h1, p {
        margin: 0;
    }

    &__thumb {
        max-width: 50px;
        max-height: 50px;
    }

    &__info {
        display: flex;
        flex-direction: column;
        row-gap: 5px;

        h1 {
            font-size: 1rem;
            opacity: 0.4;
            font-weight: 400;
        }
    }

    &__delete-icon {
        cursor: pointer;
    }
}

</style>

<script>
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";

export default {
  setup() {
    const cartStore = useCartStore();
    const calculatePrice = computed(() => (cartStore.cart * 125).toFixed(2));

    const deleteItem = () => cartStore.removeFromCart();
    return { cartStore, calculatePrice, deleteItem };
  },
};
</script>
