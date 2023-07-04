<template>
  <div class="cat relative">
    <div class="wrapper-swiper">
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="40"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="item in explore" >
          <img :src="item.featured" class="rounded-5" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex justify-between items-center">
      <BaseTheTitle text="Discover Some Of Our Items." title="" />
      <div class="right">
        <input type="text" placeholder="Type Something" />
        <select name="" id="">
          All Categories
        </select>
        <select name="" id="">
          Available
        </select>
        <BaseTheButton text="Search" :back="true" />
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
const { explore } = storeToRefs(appStore);
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
const modules = [Navigation]

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
</style>
