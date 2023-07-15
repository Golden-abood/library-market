<template>
  <div class="cat relative">
    <div class="wrapper-swiper">
      <swiper
        :modules="modules"
        :loop="true"
        navigation
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
        <swiper-slide v-for="item in explore">
          <img :src="item.featured" class="rounded-5 max-w-[95%]" />
        </swiper-slide>
      </swiper>
    </div>
    <div>
      <div
        class="lg:flex justify-between items-center m-auto lg:pl-[100px] lg:pr-[100px] pb-[100px]"
      >
        <BaseTheTitle
          text="Discover Some Of Our Items."
          title=""
          class="mb-4 lg:mb-0 text-center lg:text-left"
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
      <div class="cards pb-[200px] lg:px-[100px]">
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
const { explore, authors } = storeToRefs(appStore);
onMounted(()=> {
  appStore.getAuthors()
  appStore.getExplore()
})
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
.cat {
  background-image: url("/images/dark-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}
.box {
  border: 1px solid rgba(64, 66, 69, 0.9);
  background-color: rgba(40, 43, 47, 0.9);
  transition: 0.5s;
}
.boxs:hover .box {
  left: 40%;
}
.swiper-button-prev,
.swiper-button-next {
  background-color: white !important;
  padding: 20px;
  border-radius: 50%;
  color: red !important;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px 20px;
}
</style>
