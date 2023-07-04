<template>
  <div class="relative">
    <BaseTheTitle
      class="pt-[150px]"
      title=""
      text="Explore Some Hot Collections In Market."
    />
    <div class="wrapper-swiper pb-[100px] px-[120px]">
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        
      >
        <swiper-slide
          v-for="collection in collections"
          class="h-[150%] mt-[100px] text-white overflow-hidden bg-light rounded-6 border-sloid border-1 border-bocolor pb-9 px-0"
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
            <BaseTheButton
              :back="false"
              text="Explore Worldwide"
              class="w-[80%] absolute bottom-[-60px] left-[50%] translate-x-[-50%] z-[100]"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
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

const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>

<style scoped>
.swsiper {

}
</style>
