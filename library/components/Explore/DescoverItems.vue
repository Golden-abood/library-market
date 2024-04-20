<template>
  <div
    class="bg-[url(/images/dark-bg.jpg)] bg-no-repeat relative bg-cover min-h-[100vh] w-[100%] mx-auto px-[15px] relative"
  >
    <div class="wrapper-swiper">
      <swiper
        :modules="modules"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :speed="500"
        :autoplay="{
          delay: 2500,
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          // when window width is >= 480px
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }"
        class="relative top-[-140px]"
      >
        <swiper-slide v-for="item in items">
          <img :src="item.featured" class="rounded-5 max-w-[95%]" />
        </swiper-slide>

        <div>
          <span
            class="swiper-button-prev text-primary bg-white p-[20px] font-bold rounded-full m-auto !after:text-[13px]"
          ></span>
          <span
            class="swiper-button-next text-primary bg-white p-[20px] font-bold rounded-full m-auto !after:text-[13px]"
          ></span>
        </div>
      </swiper>
    </div>
    <div>
      <div
        class="lg:flex relative justify-between items-center m-auto lg:pl-[100px] lg:pr-[100px] pb-[100px]"
      >
        <BaseTheTitle
          text="Discover Some Of Our "
          title="Items"
          :startChar="20"
          :endChar="20"
          :centered="false"
          class="mb-4 lg:mb-0 text-center lg:text-left before:!top-[-20px]"
        />
        <div class="lg:flex items-center lg:gap-x-12">
          <input
            type="text"
            placeholder="Type Something..."
            class="my-3 lg:my-0 w-[100%] lg:w-[45%] bg-transparent outline-0 border-0 text-white p-4 rounded-10 border-2 border-solid border-bocolor"
          />
          <div
            class="my-3 lg:my-0 rounded-10 border-2 border-solid border-bocolor w-[100%] lg:w-[45%] p-4"
          >
            <label for="one" class="flex justify-between text-white">
              All Categories
              <select name="" id="one" class="rounded-5 w-[20%] lg:w-[13%]">
                <option v-for="item in list" value="">{{ item }}</option>
              </select>
            </label>
          </div>
          <div
            class="my-3 lg:my-0 rounded-10 border-2 border-solid border-bocolor w-[100%] lg:w-[40%] p-4"
          >
            <label class="flex justify-between text-white" for="two">
              Available
              <select name="" id="two" class="rounded-5 w-[20%] lg:w-[13%]">
                <option v-for="item in list2" value="">{{ item }}</option>
              </select>
            </label>
          </div>
          <BaseTheButton text="Search" :back="false" class="text-center" />
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[20px] gap-y-[40px] pb-[200px] lg:px-[100px]"
      >
        <div
          v-for="author in authors"
          class="card relative text-white flex-col justify-center rounded-5 py-[40px] px-[30px] bg-light border-1 border-solid border-bocolor"
        >
          <Card :element="author" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useAppStore } from "../../stores/app";
const appStore = useAppStore();
const items = [
  {
    AuthorPhoto: "images/author.jpg",
    featured: "images/featured-03.jpg",
    name: "Bored Ape Club",
  },
  {
    AuthorPhoto: "images/author-02.jpg",
    featured: "images/featured-01.jpg",
    name: "Bored Ape Club",
  },
  {
    AuthorPhoto: "images/author.jpg",
    featured: "images/featured-02.jpg",
    name: "Bored Ape Club",
  },
  {
    AuthorPhoto: "images/author-03.jpg",
    featured: "images/featured-04.jpg",
    name: "Bored Ape Club",
  },
];
onMounted(() => {
  appStore.getExplore();
});
defineProps({
  authors: { type: Array, required: true },
});
const actions = [
  "material-symbols:favorite-rounded",
  "material-symbols:back-hand",
  "ph:currency-dollar",
];
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const list = ref([
  "All Items",
  "Music Art",
  "Digital Art",
  "Blockchain ",
  "Virtual",
]);
const list2 = ref(["Avilable", "Comming soon", "Ending soon", "closed"]);
const modules = [Navigation, Autoplay];
</script>

<style scoped>
.cards {
}
</style>
