<template>
  <div class="container">
    <BaseTheTitle
      text="Our Top Sellers This Week."
      title=""
      class="text-center pt-[100px]"
    />
    <div class="boxs pt-[70px] lg:px-[100px] text-white pb-[20px]">
      <div class="box flex gap-x-3 items-center m-auto" v-for="box in boxs">
        <img :src="box.icon" class="rounded-full w-[60px]" />
        <div>
          <h4 class="text-lg mb-2">{{ box.name }}</h4>
          <p>{{ box.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app";
const appStore = useAppStore();
const { boxs } = storeToRefs(appStore);
</script>

<style>
.container {
  background-image: url("/images/main-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 75vh;
  width: 100%;
}
.boxs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px 20px;
}
.box {
  position: relative;
  counter-increment: works;
}
.box::after {
  content: "" counter(works) ".";
  position: absolute;
  top: 15px;
  left: -40px;
  height: 100%;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
</style>
