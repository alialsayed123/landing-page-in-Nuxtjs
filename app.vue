<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #d9d9d9;
  border-radius: 25px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 25px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #363535;
}

.page-enter-active,
.page-leave-active {
  transition: all 1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>