<template>
  <div class="container lg:grid flex flex-col-reverse gap-4 lg:grid-cols-3 mt-4 lg:gap-8 md:h-[80vh] relative">
    <div
      class="flex w-full justify-center  h-full md:justify-center lg:justify-center flex-col items-center md:items-start lg:items-start py-14 px-8 mb-6 "
    >
      <h1 class="text-black text-6xl lg:text-5xl md:text-5xl">SALE</h1>
      <p class="text-black text-xl lg:text-xl md:text-xl">
        Access a limited selection <br />with up to 70% off
      </p>
      <button
      :style="{
  color: '#fffb00',
  'font-size': '17px',
  'background-color': '#000',
  border: '1px solid #000',
  'border-radius': '1px',
  padding: '10px',
  'box-shadow':' 0px 6px 0px #191919',
  transition: 'all 0.1s',
}"
       class= "button bg-white text-black hover:bg-secondary/80 px-4 py-2 rounded-lg"><span class='-mt-2'>ShOW MORE</span>     <i class="bi bi-arrow-right" style="font-size: 20px; margin-left: 10px;"></i> </button>

    </div>
    <div class=" lg:col-span-2 flex justify-center items-center gap-2">
    
      <div id="carouselExampleDark" class="carousel carousel-dark slide " data-bs-ride="carousel">
  <div class="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="../../../assets/images/Header.png" class="d-block  w-100" alt="...">
  
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../../../assets/images/Header.png" class="d-block  w-100" alt="...">
 
    </div>
    <div class="carousel-item">
      <img src="../../../assets/images/Header.png" class="d-block  w-100" alt="...">
    
    </div>
  </div>

</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" module>

.hero {
  height: 100vh;
  width: 100%;
  position: relative;
  .button {
    color: #ffffff;
    font-size: 17px;
    background-color: #000;
    border: 1px solid #000;
    border-radius: 1px;
    padding: 10px;
    box-shadow: 0px 6px 0px #191919;
    transition: all 0.1s;
  }
}

.carousel-indicators {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0px !important;
    left: 50px !important;
    z-index: 2;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-bottom: 1rem;
   

}
.carousel-inner {
  padding-top: 43.25%;
  display: block;
  content: '';
}
.carousel-item {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: skyblue;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 60%;
  z-index: 9;
  margin-top: 20px;
  text-align: center;
}
.caption h1 {
  color: #fff;
  font-size: 52px;
  font-weight: 700;
  margin-bottom: 23px;
}
.caption h2 {
  color: rgba(255, 255, 255, 0.75);
  font-size: 26px;
  font-weight: 300;
}
a.big-button {
  color: #fff;
  font-size: 19px;
  font-weight: 700;
  text-transform: uppercase;
  background: #eb7a00;
  background: rgba(255, 0, 0, 0.75);
  padding: 28px 35px;
  border-radius: 3px;
  margin-top: 80px;
  margin-bottom: 0;
  display: inline-block;
}
a.big-button:hover {
  text-decoration: none;
  background: rgba(255, 0, 0, 0.9);
}
a.view-demo {
  color: #fff;
  font-size: 21px;
  font-weight: 700;
  display: inline-block;
  margin-top: 35px;
}
a.view-demo:hover {
  text-decoration: none;
  color: #333;
}

.carousel-indicators .active {
  background: #fff;
}
.carousel-indicators li {
  background: rgba(255, 255, 255, 0.4);
  border-top: 20px solid;
  z-index: 15;
}
</style>
