<template>
  <Modal :show-modal="showPreviewModal" @close="showPreviewModal = false">
    <div class="preview-modal">
      <span @click="showPreviewModal = false" class="preview-modal__close-btn">
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#ff7d1a"
            fill-rule="evenodd"
          />
        </svg>
      </span>
      <div class="preview-modal__content">
        <span @click="previousImage" class="preview-modal__previous">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </span>
        <img
          class="preview-modal__current-image"
          :src="currentImage"
          alt="Imagem do preview"
        />
        <span @click="nextImage" class="preview-modal__next">
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </span>
      </div>

      <div class="preview-modal__thumbs">
        <img
          @click="selectImage(image)"
          v-for="(image, index) in images"
          :key="image"
          :src="image"
          :class="{
            selected: currentImage == image.replace('-thumbnail', ''),
          }"
          alt="Miniatura do tênis"
        />
      </div>
    </div>
  </Modal>

  <section class="main-content">
    <div class="main-content__preview">
      <span @click="nextImage" class="main-content__next-btn">
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </span>
      <span @click="previousImage" class="main-content__prev-btn">
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </span>
      <img
        @click="openPreview"
        class="main-content__current-preview"
        :src="currentImage"
        alt="Imagem do preview"
      />
      <div class="main-content__thumbs">
        <img
          @click="currentImage = image.replace('-thumbnail', '')"
          v-for="(image, index) in images"
          :key="image"
          :src="image"
          :class="{ selected: currentImage == image.replace('-thumbnail', '') }"
          alt="Miniatura do tênis"
        />
      </div>
    </div>

    <div class="main-content__product-info">
      <h5>SNEAKER COMPANY</h5>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div class="main-content__product-info__price">
        <h2>$125.00</h2>
        <span>50%</span>
        <h4>$250.00</h4>
      </div>

      <div class="main-content__product-info__footer">
        <div class="main-content__qnt-btn">
          <span @click="decrementProductQnt" class="main-content__minus-btn">
            <svg
              width="12"
              height="4"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </defs>
              <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a" />
            </svg>
          </span>
          <span>{{ productQnt }}</span>
          <span @click="incrementProductQnt" class="main-content__plus-btn">
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                />
              </defs>
              <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b" />
            </svg>
          </span>
        </div>

        <Button @click="addProduct" class="main-content__add-cart-btn">
          <span>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="black"
                fill-rule="nonzero"
              />
            </svg>
          </span>
          Add to cart
        </Button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.preview-modal {
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  position: relative;
  row-gap: 15px;

  &__close-btn {
    margin-left: auto;
    transform: scale(1.5);
    cursor: pointer;
    margin-bottom: 10px;
  }

  &__current-image {
    max-width: 550px;
    border-radius: 15px;
  }

  &__previous,
  &__next {
    position: absolute;
    padding: 10px;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 40%;
    cursor: pointer;
    transition: var(--d-transition);
  }

  &__previous svg path,
  &__next svg path {
    transition: var(--d-transition);
  }

  &__previous:hover svg path,
  &__next:hover svg path {
    stroke: #ff7d1a;
  }

  &__next {
    right: -30px;
  }

  &__previous {
    left: -30px;
  }

  &__thumbs {
    justify-content: center;
  }
}

.preview-modal__thumbs,
.main-content__thumbs {
  display: flex;
  column-gap: 30px;

  img {
    max-width: 88px;
    border-radius: 10px;
    cursor: pointer;
  }

  .selected {
    outline: 4px solid var(--col-prim-orng);
    opacity: 0.4;
    transition: var(--d-transition);
  }
}

.main-content {
  padding: 0px 195px;
  display: flex;
  column-gap: 115px;

  &__current-preview {
    max-width: 445px;
    border-radius: 10px;
    cursor: pointer;
  }

  &__preview {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }

  &__next-btn,
  &__prev-btn {
    display: none;
  }

  &__product-info {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    padding: 60px 10px;

    h5,
    h2,
    h4,
    h1 {
      margin: 0;
    }

    h5 {
      font-size: 0.9rem;
      line-height: 0.5rem;
      opacity: 0.5;
    }

    h1 {
      font-size: 2.7rem;
      margin-top: 20px;
    }

    p {
      line-height: 1.6rem;
      margin: 0;
      margin-top: 30px;
      opacity: 0.5;
      font-weight: 400;
    }

    h2 {
      font-size: 1.8rem;
    }

    &__price {
      display: grid;
      grid-template-columns: 120px 30px;
      align-items: center;
      margin-top: 23px;
      row-gap: 10px;

      span {
        margin-right: auto;
        background-color: black;
        border-radius: 5px;
        padding: 3px 10px;
        color: white;
      }

      h4 {
        text-decoration: line-through;
        opacity: 0.5;
        font-weight: 700;
      }
    }

    &__footer {
      display: flex;
      column-gap: 20px;
      margin-top: 35px;
    }
  }

  &__qnt-btn {
    display: flex;
    margin-right: auto;
    align-items: center;
    justify-content: space-between;
    background-color: var(--col-neutral-lt-gry-blu);
    padding: 16px 15px;
    font-weight: 700;
    border-radius: 5px;
    width: 30%;

    span {
      cursor: pointer;
    }
  }

  &__add-cart-btn {
    width: 70%;
    box-shadow: 0px 3px 20px rgba(255, 115, 0, 0.6);
  }
}

@media screen and (max-width: 900px) {
  .main-content {
    padding: 0;
    flex-direction: column;
    align-items: center;
    position: relative;

    &__qnt-btn {
      width: initial;
      margin: 0;
    }

    &__next-btn,
    &__prev-btn {
      position: absolute;
      background-color: white;
      width: 30px;
      height: 30px;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      top: 16%;
    }

    &__next-btn {
      right: 40px;
    }

    &__prev-btn {
      left: 40px;
    }

    &__add-cart-btn {
      width: initial;
      margin: 0;
    }

    &__thumbs {
      display: none;
    }

    &__current-preview {
      border-radius: 0px;
      height: 300px;
      width: 400px;
      object-fit: cover;
      object-position: center;
      cursor: default;
    }

    &__product-info {
      padding: 30px 25px;

      row-gap: 15px;

      h1 {
        font-size: 1.8rem;
        margin: 0;
        line-height: 2rem;
      }

      h5 {
        font-size: 0.8rem;
      }

      p {
        margin: 0;
        font-size: 0.9rem;
      }

      &__price {
        display: flex;
        column-gap: 20px;
        margin-top: 5px;
      }

      &__footer {
        flex-direction: column;
        row-gap: 20px;
        margin-top: 15px;
      }
    }
  }
}
</style>

<script setup>
import { useCartStore } from "@/stores/cart";
import { computed, ref } from "vue";
import Button from "./Button.vue";
import Modal from "./Modal.vue";
import { useWindowSize } from "@vueuse/core";

const currentImage = ref("images/image-product-1.jpg");
const images = ref([
  "images/image-product-1-thumbnail.jpg",
  "images/image-product-2-thumbnail.jpg",
  "images/image-product-3-thumbnail.jpg",
  "images/image-product-4-thumbnail.jpg",
]);

const cartStore = useCartStore();
const productQnt = ref(0);
const showPreviewModal = ref(false);
const { width } = useWindowSize();

const isMobile = computed(() => width.value < 900);

const addProduct = () => {
  cartStore.addToCart(productQnt.value);
  productQnt.value = 0;
};

const selectImage = (image) => {
 currentImage.value = image.replace("-thumbnail", "");
};

const openPreview = () => {
  if (!isMobile.value) {
    showPreviewModal.value = true;
  }
};

const previousImage = () => {
  let currentImageIndex = parseInt(currentImage.value.match(/\d+/g)[0]);
  if (currentImageIndex > 1) {
    currentImage.value = currentImage.value.replace(
      currentImageIndex,
      currentImageIndex - 1
    );
  }
};

const nextImage = () => {
  let currentImageIndex = parseInt(currentImage.value.match(/\d+/g)[0]);
  if (currentImageIndex < 4) {
    currentImage.value = currentImage.value.replace(
      currentImageIndex,
      currentImageIndex + 1
    );
  }
};

const incrementProductQnt = () => productQnt.value++;
const decrementProductQnt = () => productQnt.value > 0 && productQnt.value--;
</script>
