<template>
  <div class="wrapper px-[20px] md:px-[100px] pt-[180px]">
    <div class="md:flex justify-center sm:justify-between md:items-center">
      <div class="flex items-center justify-center pb-10 sm-pb-0 gap-x-9">
        <img src="images/single-author.jpg" class="rounded-full" />
        <div>
          <h4 class="text-white font-bold text-xl">Melanie Smith</h4>
          <p class="text-primary text-[15px] font-bold">@melanie32</p>
        </div>
      </div>
      <div
        class="bg-light border-solid border-1 border-bocolor rounded-5 min-w-[300px] sm:min-w-[500px] p-[20px]"
      >
        <div class="flex justify-around pb-[30px]">
          <div class="action flex-col" v-for="action in actions">
            <Icon size="30" :name="action" color="#7453fc" />
            <p class="text-white pt-[5px] text-base">
              <span class="font-bold text-xl text-primary">1238</span> Likes
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <h3 class="text-lighten">559 Followers</h3>
          <BaseTheButton text="Follow @Melanie32" :back="false" />
        </div>
      </div>
    </div>
    <BaseTheTitle text="Melanie Smith’s Items." title="abood" class="pt-[100px]" />
    <div class="cards py-[100px]">
      <div
        v-for="author in authors"
        class="card relative text-white flex-col justify-center rounded-5 py-[40px] px-[30px] bg-light border-1 border-solid border-bocolor"
        >
        <Card :element="author"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app";
import { storeToRefs } from "pinia";
const appStore = useAppStore();
const { authors } = storeToRefs(appStore);

const actions = [
  "material-symbols:favorite-rounded",
  "material-symbols:back-hand",
  "ph:currency-dollar",
];
</script>

<style scoped>
.wrapper {
  background-image: url("/images/dark-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px 20px;
}
</style>
