<template>
  <section class="container flex flex-col mx-auto">
    <h3 class="text-black font-bold text-center pt-6 mt-2 line-clamp-1">
      Product Details 
    </h3>
    <div v-if="islodading" class="d-flex my-12 justify-content-center">
      <div
        style="width: 10rem; height: 10rem"
        class="spinner-border"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div
      v-else
      class="   w-full mx-auto "
    >
      <div class="card  my-4 relative" style="width: 100%">
        <div class="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center items-center">
  <img
    :src="ProductDetails.image"
    class="object-contain w-full h-64"
    :alt="ProductDetails.title"
  />
  <div class="mt-4 md:mt-0 lg:mt-0">
    <h5 class="card-title font-bold line-clamp-1">
      {{ ProductDetails.title }}
    </h5>
    <p class="card-text line-clamp-2 mb-6">
      {{ ProductDetails.description }}
    </p>

    <ButtonsAddToCart
      :product="ProductDetails"
      :price="ProductDetails.price"
    />
  </div>
</div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductsStore } from '../../store/App';

const Store = useProductsStore();
const { ProductDetails } = storeToRefs(Store);
const islodading = ref(true);
const { id } = useRoute().params;
Store.GetDetailsProducts(id).finally(() => {
  islodading.value = false;
});
</script>

<style lang="scss" scoped>
.eye {
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(
    90.1deg,
    rgb(25, 28, 29) 0.2%,
    rgb(16, 8, 42) 99.9%
  );
  color: white;
  padding: 9px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 5px;
  transition: background 0.3s ease; /* Transition specifically for background */
  cursor: pointer;
}

.eye:hover {
  background-image: linear-gradient(
    90.1deg,
    rgb(35, 39, 41) 0.2%,
    rgb(24, 22, 30) 99.9%
  );
}
</style>
