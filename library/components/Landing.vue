<template>
    <div>
        <div class="flex justify-between items-center ml-[110px] mr-[110px] mt-[140px]">
            <div class="text-white max-w-[50%]">
                <p class="font-medium text-xl mb-[15px] tracking-normal 	">
                    Liberty NFT Market
                </p>
                <h2 class="text-5xl leading-[66px] font-bold">CREATE, SELL & COLLECT TOP NFT’S.</h2>
                <p class="mt-[20px] leading-[30px] text-base font-normal">Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo's free css templates.</p>
                <div class="mt-[30px] flex gap-x-3.5 relative">
                    <base-the-button text="Watch Our Videos" :back="true"></base-the-button>
                    <base-the-button text="Explore Top NFTs" :back= false></base-the-button>
                </div>
            </div>
            <swiper
                :slides-per-view="1"
                :space-between="0"
                class="relative pl-[100px]"
                > 
                <swiper-slide class="ml-[120px]">                    
                    <img src="/images/banner-01.png" class="min-w[80%]" alt="">
                </swiper-slide>
                <swiper-slide >
                    <img src="/images/banner-02.png" class="min-w[80%]" alt="">
                </swiper-slide>
                <div class="navigation relative">
                    <div class="swiper-button-prev" slot="prevButton"></div>
                    <div class="swiper-button-next" slot="nextButton"></div>
                </div>
            </swiper>

        </div>
    </div>
</template>

<script setup lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/swiper-bundle.css';

</script>

<style scoped>

.swiper-button-next , .swiper-button-prev {
    position : absolute;
    bottom: -40px !important;
    background-color: red;
    padding: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left :50%;
    z-index: 1000;
}
.swiper-button-next{
    color : white ;
}
.swiper-button-prev {
    color : white ;
}
</style>