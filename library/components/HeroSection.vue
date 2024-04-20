<template>
  <div>
    <div
      class="relative lg:flex lg:justify-between items-center ml-[20px] mr-[20px] lg:ml-[110px] mt-[195px] lg:mt-[80px]"
    >
      <div data-aos="zoom-in-right" class="text-white lg:max-w-[50%]">
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
        data-aos="zoom-in-left"
        :modules="modules"
        :autoplay="{
          delay: 2500,
        }"
        :slides-per-view="1"
        :space-between="0"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        class="max-w-[100%] lg:max-w-[50%] text-center"
      >
        <swiper-slide
          class="h-[550px] pb-[200px] md:pb-0 pt-[70px] md:pt-[30px]"
        >
          <img src="/images/banner-02.png" class="md:w-[72%]" alt="" />
        </swiper-slide>
        <swiper-slide class="pb-[200px] md:pb-0 pt-[70px] md:pt-[30px]">
          <img src="/images/banner-01.png" class="md:w-[72%]" alt="" />
        </swiper-slide>
        <div
          class="!bg-primary flex justify-between items-center relative top-[-130px] lg:top-[-140px] xl:top-[-50px] mx-[150px] mx-[100px] md:mx-[160px] xl:mx-[250px]"
        >
          <span
            class="swiper-button-next text-primary bg-white rounded-full p-[20px] !after:text-[12px] !after:font-[600]"
          ></span>
          <span
            class="swiper-button-prev text-primary bg-white rounded-full p-[20px] !after:text-[12px] !after:font-[600]"
          ></span>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay, Navigation } from "swiper";

const modules = [Autoplay, Navigation];
</script>

<style scoped></style>
