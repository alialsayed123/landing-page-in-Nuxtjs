<template>
  <section class='container md:h-[100vh] h-fit flex  p-4 font-bold flex-col '>
    <h3 class="card-title text-black px-1 mt-2 line-clamp-1">NEW ARRIVALS</h3>

    <div class="flex justify-center items-center h-full mt-6">
 
        <swiper
           :slides-per-view="slidesPerView"
          :space-between="20"
          :pagination="{ clickable: true, el: '.swiper-pagination' }"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
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
            }
          }"
          :navigation="{
            nextEl: '.swiper-nav-next',
            prevEl: '.swiper-nav-prev'
          }"
        >
          <swiper-slide v-for='(item, index) in prducts' :key='index'>
            <div class="" style=" ">
<img :src="item.img" class=" object-cover " style='height: 350px; width: 100%;' alt="...">
    </div>
    <p class="card-title text-black px-1 text-center  mt-2 line-clamp-1">{{ item.title }}</p>
    <div class="flex items-center justify-center mt-4 space-x-2">

<span class=" text-black">ADU </span>
<span class="line-through text-black mx-2">{{ item.oldPrice }} </span>
<span class="font-bold text-black">{{ item.newPrice}} </span>

</div>
          </swiper-slide>
        </swiper>

    </div>
</section>


</template>




<script setup lang='ts'>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import { Autoplay, Navigation, Pagination } from 'swiper';

const modules = ref([Autoplay, Navigation,]);
const slidesPerView = ref(1);

declare type prductType = {
  id: number;
  title: string;
  link: string;
  img: string;
  oldPrice?: number; 
  newPrice?: number;
}

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
const prducts: prductType[] = [
  {
    id: 1,
    title: 'Technologia',
    link: '/',
    img: '/1.jpg',
    oldPrice: 1000,
    newPrice: 800
  },
  {
    id: 2,
    title: 'Potęga Designu',
    link: '/',
    img: '/2.jpg',
    oldPrice: 1500,
    newPrice: 1200
  },
  {
    id: 3,
    title: 'Design wnętrza',
    link: '/',
    img: '/3.jpg',
    oldPrice: 2000,
    newPrice: 1700
  },
  {
    id: 4,
    title: 'Design wnętrza',
    link: '/',
    img: '/4.jpg',
    oldPrice: 2200,
    newPrice: 1800
  },
  {
    id: 5,
    title: 'Design wnętrza',
    link: '/',
    img: '/D.png',
    oldPrice: 2500,
    newPrice: 2100
  },
  {
    id: 6,
    title: 'Design wnętrza',
    link: '/',
    img: '/F.png',
    oldPrice: 1800,
    newPrice: 1600
  },
  {
    id: 7,
    title: 'Design wnętrza',
    link: '/',
    img: '/G.png',
    oldPrice: 2100,
    newPrice: 1900
  },
  {
    id: 8,
    title: 'Design wnętrza',
    link: '/',
    img: '/H.png',
    oldPrice: 2300,
    newPrice: 2000
  },
];

</script>

