<template>
    <div>
        <div class=" flex justify-between items-center    ml-[110px] mr-[110px] mt-[110px]">
            <div class="text-white max-w-[50%]">
                <p class="font-medium text-xl mb-[15px] tracking-normal 	">
                    Liberty NFT Market
                </p>
                <h2 class="text-5xl leading-[66px] font-bold">CREATE, SELL & COLLECT TOP NFT’S.</h2>
                <p class="mt-[20px] leading-[30px] text-base font-normal">Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo's free css templates.</p>
                <div class="mt-[30px] flex gap-x-3.5 relative   " >
                    <nuxt-link class="one bg-transparent block rounded-6 border-2 border-[#7453fc] border-solid py-3 px-6 cursor-pointer">Watch Our Videos</nuxt-link>
                    <nuxt-link class="two bg-transparent block rounded-6 border-2 border-[#7453fc] border-solid py-3 px-6 cursor-pointer">Explore Top NFTs</nuxt-link>
                </div>
            </div>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <img class="swiper-slide" src="/images/banner-01.png" alt="">
                </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.nuxt-link::after {
    content : "";
    position: absolute;
    bottom: 10px;
    left: 10xp;
    width:80%;
    height: 5px;
    background-color: white;
}
</style>