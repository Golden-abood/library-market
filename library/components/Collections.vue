<template>
  <div class="relative">
    <BaseTheTitle
      class="pt-[150px]"
      title="Collections"
      :centered="true"
      text="Explore Some Hot In Market."
      :startChar="16"
      :endChar="17"
      data-aos="zoom-in-down"
    />
    <div class="px-[20px] lg:px-[120px]">
      <swiper
        :speed="300"
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :autoplay="{
          delay: 2500,
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }"
      >
        <swiper-slide
          v-for="collection in collections"
          class="pb-[50px] relative mt-[100px] text-white overflow-hidden bg-light rounded-6 border-sloid border-1 border-bocolor px-0"
        >
          <div class="flex-col items-start">
            <img
              :src="collection.photo"
              class="w-[100%] border-b-4 border-b-bocolor"
            />
            <h3 class="text-left font-bold text-xl py-6 px-[30px]">
              {{ collection.title }}
            </h3>
            <div class="flex justify-between px-[30px]">
              <div class="flex-col">
                <p class="font-medium text-lg pb-[10px]">
                  Items in collection :
                </p>
                <span class="font-bold text-xl">{{ collection.items }}</span>
              </div>
              <div class="flex-col">
                <p class="font-medium text-lg pb-[10px]">Category :</p>
                <span class="font-bold text-xl">{{ collection.category }}</span>
              </div>
            </div>
          </div>
          <BaseTheButton
            :back="false"
            text="Explore World wide"
            class="w-[80%] absolute bottom-[-30px] left-[50%] translate-x-[-50%] z-[100]"
          />
        </swiper-slide>
        <div>
          <span
            class="swiper-button-prev text-primary bg-white p-[20px] !font-bold rounded-full m-auto !after:text-[13px]"
          ></span>
          <span
            class="swiper-button-next text-primary bg-white p-[20px] !font-bold rounded-full m-auto !after:text-[13px]"
          ></span>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
const modules = [Navigation, Autoplay];

const collections = [
  {
    title: "Genesis Collective Statue",
    category: "Music Art",
    items: "530/890",
    photo: "/images/collection-01.jpg",
  },
  {
    title: "Bored Ape Kennel Club",
    category: "Visual Art",
    items: "320/490",
    photo: "/images/collection-01.jpg",
  },
  {
    title: "Mutant Bored Ape Yacht Club",
    category: "Blockchain",
    items: "620/910",
    photo: "/images/collection-01.jpg",
  },
  {
    title: "Bored Collective Statue",
    category: "Digital Crypto",
    items: "150/562",
    photo: "/images/collection-01.jpg",
  },
];
</script>

<style scoped></style>
