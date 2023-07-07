<template>
    <div class="wrapper pt-[100px] px-[30px] sm:px-[100px]">
        <div class="md:flex text-center  sm:justify-between items-center">
            <BaseTheTitle class="pb-[30px] sm:pb-0" text="Create Your NFT & Put It On The Market." title=""/>
            <BaseTheButton text="Create Your NFT Now" :back="false" class="w-[50%] sm:w-[18%] m-auto sm:m-0"/>
        </div>
        <div class="steps pt-[50px] sm:pt-[150px] pb[80px] lg:pb-[10px]" >
            <div v-for="abood in create" class="step relative text-white text-center sm:text-left  ">
                <img :src="abood.icon" class="bg-white p-3 mb-[30px] rounded-full">
                <h3 class="font-bold text-xl mb-[15xp]">{{abood.title}}</h3>
                <p class="leading-8	 text-base">{{  abood.text}}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/stores/app';
    const appStore  = useAppStore();
    const {create} =storeToRefs(appStore)
</script>

<style scoped>
.wrapper {
    background-image: url('/images/main-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 75vh;
    width: 100%;
    background-position: center;
}
.steps {
    display : grid ; 
    grid-template-columns: repeat(auto-fill , minmax(400px , 1fr));
    gap :60px 30px 
}
.step {
    counter-increment: create;
}
.step:not(:last-child)::after{
    content: "";
    width: 1px;
    height: 220px;
    background-color: #9f77f6;
    position: absolute;
    top: 0;
    right: 0;
}
.step:not(:last-child)::before {
    content: "" counter(create);
    position: absolute;
    top: -25px;
    right: -2px;
    font-weight: bold;
}
@media(max-width:768px ){
    .step:not(:last-child)::before , .step:not(:last-child)::after {
        display: none;
    }
}
</style>