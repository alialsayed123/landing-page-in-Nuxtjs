<template>
  <section
    class="container md:h-[100vh] h-fit flex p-4 font-bold flex-col"
    :class="{}"
  >
    <h3 class="card-title text-black px-1 mt-2 line-clamp-1">SPECAL OFFERS</h3>
    <div v-if="islodading" class="d-flex mt-12 justify-content-center">
      <div
        style="width: 10rem; height: 10rem"
        class="spinner-border"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="flex justify-center items-center my-6 h-full">
      <swiper
        :slides-per-view="slidesPerView"
        :space-between="20"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :modules="modules"
        :loop="true"
        grab-cursor
        parallax
        :speed="1000"
        :breakpoints="breakpoints"
        :creative-effect="{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }"
        :navigation="{
          nextEl: '.swiper-nav-next',
          prevEl: '.swiper-nav-prev',
        }"
      >
        <swiper-slide v-for="(item, index) in GetProductList" :key="index">
     
          <div  class="bg-white rounded-lg" style="">
            <img
              :src="item.image"
              class="card-img-top object-contain "
              style="height: 350px; width: 100%; border-radius: 10px;'"
              alt="..."
            />
          </div>
          <h5 class="card-title text-center text-black px-1 mt-2 line-clamp-1">
            {{ item.title }}
          </h5>
          <div class="flex items-center justify-center mt-4 space-x-2">
            <span class="text-black">ADU </span>
            <span class="line-through text-black">{{ item.price }} </span>
            <span class="font-bold text-black">{{ item.price }} </span>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"></div>
        <div class="swiper-nav-prev">
          <i class="fa-solid fa-angles-left"></i>
        </div>
        <div class="swiper-nav-next">
          <i class="fa-solid fa-angles-right"></i>
        </div>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { useProductsStore } from '../../../store/App';

const Store = useProductsStore();
const { GetProductList } = storeToRefs(Store);
const modules = ref([Autoplay, Navigation]);
const slidesPerView = ref(1);
const islodading = ref(true);

Store.GetProductsData().finally(() => {
  islodading.value = false;
});

const breakpoints = ref({
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
});
onMounted(() => {
  // fetchData()
});
</script>

<style lang="scss" scoped>
.card {
  border: none;
  border-radius: 0;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
}
.carousel-inner {
  padding: 1em;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: #e1e1e1;
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
.carousel-control-prev span,
.carousel-control-next span {
  width: 1.5rem;
  height: 1.5rem;
}
@media screen and (min-width: 577px) {
  .cards-wrapper {
    display: flex;
  }
  .card {
    margin: 0 0.5em;
    width: calc(100% / 2);
  }
  .image-wrapper {
    height: 20vw;
    margin: 0 auto;
  }
}
@media screen and (max-width: 576px) {
  .card:not(:first-child) {
    display: none;
  }
}

.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
}
</style>
