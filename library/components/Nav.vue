<template>
  <div
    :class="{ fixed: isFixed }"
    class="relative flex justify-between items-center bg-white ml-0 w-[100%] lg:w-[85%] lg:ml-[110px] mr-[110px] px-[30px] py-[15px] sm:mt-0 rounded-0 lg:rounded-12 z-[10000]"
  >
    <img src="/images/logo.png" />
    <div
      @click="showNav()"
      :class="{ abood: show }"
      class="burger-icon relative w-[4%] right-[30px] top-[-10px] lg:hidden"
    >
      <span class="bg-primary"></span>
      <span class="bg-primary"></span>
      <span class="bg-primary"></span>
    </div>
    <client-only>
      <ul
        id="nav"
        class="hidden lg:flex items-center justify-center gap-x-[0px]"
      >
        <li
          class="mr-0 md:mr-7 font-medium cursor-pointer w-[60px] transition duration-100 text-center flex-nowrap text-base min-w-[14%] rounded-5 py-2 text-primary"
        >
          <nuxt-link
            to="/"
            class="nuxt-link-active transition duration-1000 text-black"
            >Home</nuxt-link
          >
        </li>
        <li
          class="mr-0 md:mr-7 font-medium cursor-pointer text-center flex-nowrap text-base w-[70px] transition duration-100 hover:rounded-5 min-w-[14%] hover:py-2"
        >
          <nuxt-link class="nuxt-link transition duration-300" to="Explore"
            >Explore</nuxt-link
          >
        </li>
        <li
          class="mr-0 md:mr-7 font-medium cursor-pointer w-[110px] transition duration-100 text-center flex-nowrap text-base hover:rounded-5 min-w-[23%] hover:py-2"
        >
          <nuxt-link class="nuxt-link transition duration-300" to="ItemDetails"
            >Item Details</nuxt-link
          >
        </li>
        <li
          class="mr-0 md:mr-7 font-medium cursor-pointer w-[60px] transition duration-100 text-center flex-nowrap text-base hover:rounded-5 min-w-[14%] hover:py-2"
        >
          <nuxt-link class="nuxt-link transition duration-300" to="Author"
            >Author</nuxt-link
          >
        </li>
        <li
          class="mr-0 md:mr-7 font-medium cursor-pointer w-[110px] transition duration-100 text-center flex-nowrap text-base hover:rounded-5 min-w-[23%] hover:py-2"
        >
          <nuxt-link class="nuxt-link transition duration-300" to="CreateYours"
            >Create Yours</nuxt-link
          >
        </li>
      </ul>
    </client-only>
  </div>
</template>

<script setup lang="ts">
const show = ref(false);

const showNav = function () {
  show.value = !show.value;
};

const isFixed = ref(false);

const handleScroll = () => {
  isFixed.value = window.pageYOffset > 500;
};
0;

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 !important;
  border-radius: 0;
  transition: 0.5s;
}
@media (min-width: 992px) {
  .fixed {
    padding: 10px 120px;
  }
}
@media (min-width: 992px) {
  .nuxt-link-active {
    color: white;
    background-color: #7453fc;
    padding: 10px 15px;
    border-radius: 50px;
  }
  .nuxt-link:hover {
    color: white;
    background-color: #7453fc;
    padding: 10px 15px;
    border-radius: 50px;
  }
}
@media (max-width: 991px) {
  .nuxt-link-active {
    color: #7453fc;
  }
  .nuxt-link:hover {
    color: #7453fc;
  }
}
@media (max-width: 1024px) {
  .burger-icon {
    position: absolute;
    cursor: pointer;
    width: 4%;
    right: 50px;
    top: 35px;
  }
  .abood + ul {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    top: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
  }
  .nav {
    position: fixed;
    margin-top: 0;
  }
  .abood + ul li {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }
}
a {
  color: black;
  text-decoration: none;
}
.burger-icon span {
  position: absolute;
  left: 0;
  height: 2px;
  background-color: primary;
  transition: 0.3s ease;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -ms-transition: 0.3s ease;
  -o-transition: 0.3s ease;
}
.burger-icon span:first-child {
  top: 0;
  width: 150%;
}
.burger-icon span:nth-child(2) {
  top: 10px;
  width: 200%;
}
.burger-icon span:last-child {
  top: 20px;
  width: 150%;
}
@media (min-width: 700px) {
  .burger-icon span:first-child {
    top: 0;
    width: 100%;
  }
  .burger-icon span:nth-child(2) {
    top: 10px;
    width: 150%;
  }
  .burger-icon span:last-child {
    top: 20px;
    width: 100%;
  }
}
.burger-icon:hover span:nth-child(2) {
  opacity: 0;
}
.burger-icon:hover span:first-child,
.burger-icon:hover span:last-child {
  top: 10px;
}
.burger-icon:hover span:first-child {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  height: 3px;
}
.burger-icon:hover span:last-child {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  height: 3px;
}
</style>
