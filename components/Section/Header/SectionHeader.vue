<script setup lang="ts">
import { useCartStore } from "../../../store/Cart";
const cartStore = useCartStore();

const mainMenu = [
  { name: "ELECTRONICS", href: "/electronics" },
  { name: "JEWELRY", href: "/jewelry" },
  { name: "MEN CLOTHING", href: "/menClothing" },
  { name: "WOMEN CLOTHING", href: "/womenClothing" },
];

const iconMenu = [
  { iconClass: "bi bi-person", href: "#" },
  { iconClass: "bi bi-heart", href: "#" },
];

const secondaryMenu = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/" },
  { name: "Media Center", href: "/" },
  { name: "Contact Us", href: "/" },
  { name: "AR", href: "/" },
];
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <NuxtLink to='/' class="navbar-brand" href="#">
        <img src="../../../assets/images/icons/logoBlack.png" alt="Logo" />
      </NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul
          class="navbar-nav text-center mx-auto text-nowrap font-bold flex lg:text-start lg:items-center justify-center"
        >
          <li
            v-for="(item, index) in mainMenu"
            :key="index"
            class="nav-item -mx-1"
          >
            <NuxtLink :to="item.href"   class="nav-link relative after:block after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">{{
              item.name
            }}</NuxtLink>
          </li>
          <li class="hidden lg:block nav-item">
            <form class="d-flex ms-3">
              <input
                class="form-control search-box"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-none" type="submit">
                <i class="bi bi-search" style="font-size: 24px"></i>
              </button>
            </form>
          </li>

          <li
            v-for="(icon, index) in iconMenu"
            :key="index"
            class="nav-item -mx-1 -mt-1"
          >
            <a class="nav-link" :href="icon.href">
              <i :class="icon.iconClass" style="font-size: 24px"></i>
            </a>
          </li>
          <li class="nav-item -mx-1 -mt-1">
            <NuxtLink to="/cart" lass="nav-link">
              <i class="bi bi-cart position-relative" style="font-size: 24px">
                <span
                  class="position-absolute w-8 h-8 top-0 text-center start-100 translate-middle badge rounded-pill bg-danger"
                >
                  <span class="text-sm text-center">
                    {{ cartStore.totalQuantity }}</span
                  >
                </span>
              </i>
            </NuxtLink>
          </li>
        </ul>
        <ul class="navbar-nav mb-2">
          <li
            v-for="(item, index) in secondaryMenu"
            :key="index"
            class="nav-link text-center relative after:block after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            <a class="nav-link" :href="item.href">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.collapse {
  visibility: visible !important;
}
.navbar {
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}
.navbar .navbar-brand img {
  max-width: 100px;
}
.navbar .navbar-nav .nav-link {
  font-size: smaller;
  color: #000;
}
@media screen and (min-width: 1024px) {
  .navbar {
    letter-spacing: 0.1em;
  }
  .navbar .navbar-nav .nav-link {
    padding: 0.5em 1em;
    font-size: smaller;
  }
  .search-and-icons {
    width: 50%;
  }
  .search-and-icons form {
    flex: 1;
  }
}

@media screen and (min-width: 992px) {
  .navbar .navbar-brand img {
    max-width: 7em;
  }
  .navbar .navbar-collapse {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
  }
  .search-and-icons {
    display: flex;
    align-items: center;
  }
}
.search-and-icons form input {
  border-radius: 0;
  height: 2em;
  background: #fff
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='grey' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E")
    no-repeat 95%;
}
.search-and-icons form input:focus {
  background: #fff;
  box-shadow: none;
}
.search-and-icons .user-icons div {
  padding-right: 1em;
}
.contact-info p,
.contact-info a {
  font-size: 0.9em;
  padding-right: 1em;
  color: grey;
}
.contact-info a {
  padding-right: 0;
}
</style>
