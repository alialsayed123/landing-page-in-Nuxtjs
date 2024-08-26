<template>
  <footer
    class="bg-black flex flex-col justify-center items-center text-white py-8"
  >
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between md:justify-between lg:justify-between items-center"
    >
      <div class="flex flex-col justify-center items-center">
      <NuxtLink to='/'>
        <img
          aria-hidden="true"
          alt="logo"
          src="../../../assets/images/icons/whiteLogo.png"
          style="width: 200px; height: 200px"
          class="mr-2"
        /></NuxtLink>
        <div class="flex justify-center gap-6 items-start">
  <NuxtLink
    to="https://www.facebook.com"
    class="text-white no-underline"
  >
    <i class="bi bi-facebook" style="font-size: 24px"></i>
  </NuxtLink>
  <NuxtLink
    to="https://www.youtube.com"
    class="text-white no-underline"
  >
    <i class="bi bi-youtube" style="font-size: 24px"></i>
  </NuxtLink>
  <NuxtLink
    to="https://www.instagram.com"
    class="text-white no-underline"
  >
    <i class="bi bi-instagram" style="font-size: 24px"></i>
  </NuxtLink>
  <NuxtLink
    to="https://www.twitter.com"
    class="text-white no-underline"
  >
    <i class="bi bi-twitter" style="font-size: 24px"></i>
  </NuxtLink>
</div>

      </div>
      <div
        class="container mx-auto flex flex-col md:flex-row justify-center gap-x-8 items-center"
      >
        <div class="flex flex-col justify-center gap-2 items-start mt-4">
          <NuxtLink to="/" class="text-white no-underline">Home</NuxtLink>
          <NuxtLink to="/about" class="text-white no-underline"
            >About us</NuxtLink
          >
          <NuxtLink to="/media-center" class="text-white no-underline"
            >Media center</NuxtLink
          >
          <NuxtLink to="/contact" class="text-white no-underline"
            >Contact Us</NuxtLink
          >
        </div>
        <div class="flex flex-col justify-center gap-2 items-start mt-4">
          <NuxtLink to="/electronics" class="text-white no-underline"
            >Electronics</NuxtLink
          >
          <NuxtLink to="/jewelry" class="text-white no-underline"
            >Jewelry</NuxtLink
          >
          <NuxtLink to="/men-clothing" class="text-white no-underline"
            >Men Clothing</NuxtLink
          >
          <NuxtLink to="/women-clothing" class="text-white no-underline"
            >Women Clothing</NuxtLink
          >
        </div>
      </div>
      <div class="flex flex-col justify-center items-start mt-4">
  <h2 class="text-lg text-white font-semibold">Contact us</h2>
  
  <a href="tel:+97100000000" class="no-underline">
    <p class="text-white">+971 00 000 000</p>
  </a>
  
  <a href="tel:+9710000000" class="no-underline">
    <p class="text-white">+971 0 000 000</p>
  </a>
  
  <a href="mailto:info@sample.com" class="no-underline">
    <p class="text-white">info@sample.com</p>
  </a>
</div>

    </div>
    <div
      :style="{
        'background-color': '#fff',
        width: '100%',
        height: '1px',
        textAlign: 'center',
        marginTop: '15px',
      }"
      class="container mx-3"
    ></div>
    <div class="text-center mt-4 text-muted-foreground">
      © Developer Test 2024. All Rights Reserved.
    </div>
  </footer>
</template>

<style lang="scss"></style>
