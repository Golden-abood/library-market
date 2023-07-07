<template>
  <div>
    <div
      class="lg:flex lg:justify-between items-center ml-[20px] mr-[20px] lg:ml-[110px] mt-[140px]"
    >
      <div class="text-white lg:max-w-[50%]">
        <p class="font-medium text-xl mb-[15px] tracking-normal">
          Liberty NFT Market
        </p>
        <h1 class="text-[3.5rem] leading-[66px] font-bold">
          CREATE, SELL & COLLECT TOP NFT’S.
        </h1>
        <p class="mt-[20px] leading-[30px] text-lg font-normal">
          Liberty NFT Market is a really cool and professional design for your
          NFT websites. This HTML CSS template is based on Bootstrap v5 and it
          is designed for NFT related web portals. Liberty can be freely
          downloaded from TemplateMo's free css templates.
        </p>
        <div class="mt-[30px] flex gap-x-3.5 relative">
          <base-the-button
            text="Watch Our Videos"
            :back="true"
          ></base-the-button>
          <base-the-button
            text="Explore Top NFTs"
            :back="false"
          ></base-the-button>
        </div>
      </div>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        delay
        pauseOnMouseEnter
        class="relative max-w-[100%] lg :max-w-[50%] text-center"
      >
        <swiper-slide class="pb-[200px] md:pb-0 pt-[70px] md:pt-0">
          <img src="/images/banner-01.png" class="md:w-[72%]" alt="" />
        </swiper-slide>
        <swiper-slide class="pb-[200px] md:pb-0 pt-[70px] md:pt-0">
          <img src="/images/banner-02.png" class="md:w-[72%]" alt="" />
        </swiper-slide>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";

const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  color: white;
  position: absolute;
}
</style>
