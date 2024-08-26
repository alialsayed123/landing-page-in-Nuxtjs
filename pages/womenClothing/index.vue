<template>
  <section class="container flex flex-col mx-auto">
    <h3 class="text-black font-bold text-center py-6 mt-2 line-clamp-1">
      WOMEN'S CLOTHING
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
      class="grid grid-cols-12 md:gap-8 lg:gap-8 gap-y-12 w-full mx-auto p-4"
    >
      <div
        v-for="product in GetProductList.filter(
          (ele) => ele.category == 'women\'s clothing'
        )"
        :key="product.id"
          class="col-span-12 md:col-span-4 lg:col-span-4 self-center"
      >
        <div class="card relative" style="width: 100%">
          <img
            :src="product.image"
            class="card-img-top object-contain"
            style="height: 300px"
            :alt="product.title"
          />
          <div class="card-body flex flex-col justify-center items-center">
            <h5 class="card-title font-bold line-clamp-1">
              {{ product.title }}
            </h5>
            <p class="card-text line-clamp-2 mb-12">
              {{ product.description }}
            </p>
                      <i class="bi bi-eye eye" @click="$router.push(`/detailsProduct/${product.id}`)"></i>
            <ButtonsAddToCart :product="product" :price="product.price" />
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
const { GetProductList } = storeToRefs(Store);
const islodading = ref(true);
Store.GetProductsData().finally(() => {
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
