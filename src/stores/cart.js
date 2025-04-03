import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: 0,
  }),
  actions: {
    addToCart(qnt) {
      this.cart += qnt;
    },
    removeFromCart() {
        this.cart = 0;
    },
  },
});
