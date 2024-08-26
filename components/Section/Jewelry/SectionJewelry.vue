<template>
  <section class="coverSection relative text-white">
    <button
      @click="handleClick"
      class="button absolute bottom-16 left-6 bg-white text-black hover:bg-secondary/80 cursor-pointer px-4 py-2 rounded-lg"
    >
      <span class="-mt-2">SEE MORES</span>
      <i
        class="bi bi-arrow-right"
        style="font-size: 20px; margin-left: 10px"
      ></i>
    </button>
  </section>
</template>


<script setup>
const router = useRouter()
const handleClick = () => {
 router.push('/jewelry')
};
</script>

<style lang="scss" scoped>
/* From Uiverse.io by JasonMep */
.button {
  color: #000;
  font-size: 17px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 1px;
  padding: 10px;
  box-shadow: 0px 6px 0px #606060;
  transition: all 0.1s;
}


.coverSection {
    background: url("../../../public/Jewelry.jpg");
    background-size: cover;
    background-repeat: no-repeat;   
    font-family: "Roboto";
    font-weight: 100;
    font-style: normal;
    min-height: 100vh;
    overflow:hidden;
    background-position: 50% 50%;
   -webkit-animation-delay: 0.1s;
    -webkit-animation-name: fontfix;
    -webkit-animation-duration: 0.1s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: linear;
}

@-webkit-keyframes fontfix {
    from { opacity: 1; }
    to   { opacity: 1; }
}

.center-block { display: table;
    height: 100vh;
    width: 100%;
}

.content {
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle !important;
}
/* Media queries*/

@media screen and (max-width: 794px) {

  .coverSection {
    background: url("../../../public/Jewelry.jpg");
    background-size: cover;
    background-repeat: no-repeat;   
    min-height: 40vh;
    overflow:hidden;
    background-position: 50% 50%;
   -webkit-animation-delay: 0.1s;
    -webkit-animation-name: fontfix;
    -webkit-animation-duration: 0.1s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: linear;
}
}

@media screen and (max-width: 393px) {
  .coverSection {
    background: url("../../../public/Jewelry.jpg");
    background-size: cover;
    background-repeat: no-repeat;   
    min-height: 40vh;
    overflow:hidden;
    background-position: 50% 50%;
   -webkit-animation-delay: 0.1s;
    -webkit-animation-name: fontfix;
    -webkit-animation-duration: 0.1s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: linear;
}
}
</style>
