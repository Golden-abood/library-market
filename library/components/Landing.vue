<template>
  <div>
    <div
      class="relative lg:flex lg:justify-between items-center ml-[20px] mr-[20px] lg:ml-[110px] mt-[140px]"
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
        :navigations="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: true,
        }"
        :slides-per-view="1"
        :space-between="0"
        class="max-w-[100%] lg :max-w-[50%] text-center"
      >
        <swiper-slide class="h-[550px] pb-[200px] md:pb-0 pt-[70px] md:pt-0">
          <img src="/images/banner-01.png" class="md:w-[72%]" alt="" />
        </swiper-slide>
        <swiper-slide class="pb-[200px] md:pb-0 pt-[70px] md:pt-0">
          <img src="/images/banner-02.png" class="md:w-[72%]" alt="" />
        </swiper-slide>
        <div class="abood">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Navigation, Autoplay } from "swiper";

const modules = [Navigation];
</script>

<style scoped>
.abood {
  position: relative;
  z-index: 1000;
  padding-bottom: 70px;
}
.swiper-button-next,
.swiper-button-prev {
  color: #7453fc;
  background-color: white;
  border-radius: 50%;
  padding: 25px;
  margin-left: 300px;
  margin-right: 300px;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 16px;
  font-weight: bold;
}
</style>
