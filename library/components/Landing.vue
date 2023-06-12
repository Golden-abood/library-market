<template>
    <div>
        <div class="flex justify-between items-center ml-[110px] mr-[110px] mt-[150px]">
            <div class="text-white max-w-[50%]">
                <p class="font-medium text-xl mb-[15px] tracking-normal 	">
                    Liberty NFT Market
                </p>
                <h2 class="text-5xl leading-[66px] font-bold">CREATE, SELL & COLLECT TOP NFT’S.</h2>
                <p class="mt-[20px] leading-[30px] text-base font-normal">Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo's free css templates.</p>
                <div class="mt-[30px] flex gap-x-3.5 relative">
                    <nuxt-link class="one bg-transparent block rounded-6 border-2 border-primary font-medium	 border-solid py-3 px-6 cursor-pointer">Watch Our Videos</nuxt-link>
                    <nuxt-link class="two transition ease-in-out delay-150 font-medium bg-transparent block rounded-6 border-2 border-primary border-solid py-3 px-6 cursor-pointer">Explore Top NFTs</nuxt-link>
                </div>
            </div>
            <swiper
                :slides-per-view="1"
                :space-between="0"
                navigation
                :pagination="{ clickable: false }"
                class="ml-[120px]"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide class="height: 200%">                    
                    <img src="/images/banner-01.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/banner-02.png" alt="">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide} from 'swiper/vue';
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
</script>

<style scoped>
nuxt-link::after {
    content : "";
    position: absolute;
    bottom: 0px;
    left: 10xp;
    width:80%;
    height: 5px;
    background-color: white;
}
.one:hover {
    background-color: #7453fc;
}
.two:hover {
    background-color: white;
    color : #7453fc;
}
.swiper-button-next, .swiper-button-prev {
    position : absolute;
    top : 0% !important;
    color : white ;
}
@media(max-width : 1024){

}

</style>