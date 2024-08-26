<template >
<section style='height:30vh'>
    <div class="bg-yellow-300 p-4 h-full flex flex-col mt-4 md:flex-row lg:flex-row md:justify-around lg:justify-around justify-center  items-center">
  <h1 class="font-bold text-black">BECOME A MEMBER & GET 15% OFF</h1>
  <button @click="$router.push('/')" class= " button bg-black text-white hover:bg-secondary/80 px-4 py-2 rounded-lg"><span class='-mt-2'>SIGN UP FOR FREE</span>     <i class="bi bi-arrow-right" style="font-size: 20px; margin-left: 10px;"></i> </button>
  </div>
  
</section>

</template>
<script setup lang="ts">

</script>

<style lang="scss" scoped>
.button {
  color: #fffb00;
  font-size: 17px;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 1px;
  padding: 10px;
  box-shadow: 0px 6px 0px #191919;
  transition: all 0.1s;
}



</style>