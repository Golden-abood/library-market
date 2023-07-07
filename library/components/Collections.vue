<template>
  <div class="relative">
    <BaseTheTitle
      class="pt-[150px]"
      title=""
      text="Explore Some Hot Collections In Market."
    />
    <div class="wrapper-swiper  px-[20px] lg:px-[120px]">
      <swiper
        :loop="true"
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        :navigation="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700 :{
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
          class="pb-[100px] relative mt-[100px] text-white overflow-hidden bg-light rounded-6 border-sloid border-1 border-bocolor px-0"
        >
          <div class="flex-col items-start relative">
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
              text="Explore Worldwide"
              class="w-[80%] absolute bottom-[20px] left-[50%] translate-x-[-50%] z-[100]"
            />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useAppStore } from "~/stores/app";
const appStore = useAppStore();
const { collections } = storeToRefs(appStore);

// Import Swiper styles
import "swiper/css";

const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};

const modules = [Navigation, Pagination, Scrollbar, Autoplay];
</script>

<style scoped>
.swiper-slide{
}
</style>
