<template>
    <div class="flex justify-between items-center pt-[100px]">
    <BaseTheButton
      text="Current Biddings prices (ETH) "
      :back="false"
      class="w-[25%] text-xl text-center"
    />
    <label for="abood"
      >sort by
      <select name="" id="abood">
        <option value="">smand</option>
        <option value="">djnfn</option>
        <option value="">smdf</option>
        <option value="">smjnfbd</option>
      </select>
    </label>
  </div>
  <div class="prices pt-[80px]">
    <div v-for="price in prices">
      <div
        class="flex gap-x-7 rounded-5 bg-light overflow-hidden border-1 border-solid border-bocolor"
      >
        <img :src="price.photo" />
        <div class="flex-col py-[20px] pt-[30px] w-[45%]">
          <div class="pb-[20px] border-b-1 border-b-solid border-b-bocolor">
            <h4 class="text-xl">{{ price.title }}</h4>
            <nuxt-link class="text-primary font-bold text-base">{{
              price.link
            }}</nuxt-link>
          </div>
          <div class="pt-[20px]">
            <div class="flex items-center gap-x-1">
              <p>Bid :</p>
              <span class="text-primary text-xl font-bold">{{
                price.bid
              }}</span>
            </div>
            <p class="text-base text-primary pt-2">{{ price.date }}</p>
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
const { prices } = storeToRefs(appStore);
</script>

<style scoped>
.prices {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 40px 30px;
}
</style>
