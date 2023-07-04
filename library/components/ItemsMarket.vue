<template>
  <div class="cat m-auto px-[20px] md:px-[110px] pb-[150px]">
    <div class="flex justify-between pt-[150px]">
      <BaseTheTitle text="Items Currently In The Market." title="" />
      <!--            <div v-for="item in list" class="flex justify-around gap-x-0">
                <p class="text-white">{{ item }}</p>
            </div>-->
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 place-content-center gap-8 mt-[100px] md:mr-[100px]"
    >
      <div v-for="item in itemsMarket">
        <div
          class="flex gap-x-8 bg-light p-[40px] rounded-6 border-solid border-1 border-bocolor"
        >
          <img :src="item.photo" class="rounded-6" />
          <div class="flex-col w-[100%]">
            <h3 class="text-white text-xl mb-[25px]">{{ item.title }}</h3>
            <div
              class="flex gap-x-3 pb-[30px] border-b-solid border-b-bocolor border-b-1"
            >
              <img src="/images/author-02.jpg" class="rounded-full w-[20%]" />
              <div class="flex-col text-base font-normal">
                <p class="text-white">Liberty Artist</p>
                <span class="text-primary">@libertyart</span>
              </div>
            </div>
            <div class="flex justify-between text-white pt-[30px]">
              <div class="flex-col text-base">
                <p class="pb-[15px]">Current Bid</p>
                <p class="font-bold pb-[15px]">2.03 ETH</p>
                <span>($8,240.50)</span>
              </div>
              <div class="flex-col text-base">
                <p class="pb-[15px]">Ends In</p>
                <p class="font-bold pb-[15px]">4D 08H 15M 42S</p>
                <span>(July 24th, 2022)</span>
              </div>
            </div>
            <nuxt-link class="text-primary">
              View Item Details
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app";
const appStore = useAppStore();
const { itemsMarket } = storeToRefs(appStore);
const list = ref([
  "All Items",
  "Music Art",
  "Digital Art",
  "Blockchain Virtual",
]);
</script>

<style scoped>
.cat {
  background-image: url("/images/dark-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
}
</style>
