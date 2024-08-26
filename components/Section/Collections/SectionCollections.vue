<template>
  <div class="coverSection relative text-white">
  </div>
</template>
<style lang="scss" scoped>
.coverSection {
    background: url("../../../public/Untitled-1.jpg");
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
    background: url("../../../public/Untitled-1.jpg");
    background-size: contain;
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
    background: url("../../../public/Untitled-1.jpg");
    background-size: contain;
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
