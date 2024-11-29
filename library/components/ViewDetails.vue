<template>
  <div
    :class="{
      'bg-[url(/images/dark-bg.jpg)] bg-no-repeat bg-cover min-h-[100vh] w-[100%]':
        cat,
    }"
    class="pb-[100px] relative text-white"
  >
    <BaseTheTitle
      text="View Details Here."
      title="For Item"
      :centered="true"
      :startChar="12"
      :endChar="12"
      class="pt-[150px] text-center"
      data-aos="zoom-in-down"
    />
    <div class="lg:flex justify-center gap-x-[50px] items-center mt-[100px]">
      <div
        class="left max-w-[70%] lg:max-w-[50%] m-auto lg:m-0"
        data-aos="zoom-in-right"
      >
        <img src="/images/item-details-01.jpg" class="rounded-5 w-[100%]" />
      </div>
      <div
        class="right max-w-[70%] lg:max-w-[30%] m-auto lg:m-0 pt-[20px] lg:pt-0"
        data-aos="zoom-in-left"
      >
        <h4 class="text-xl mb-[25px]">{{ data.item.title }}</h4>
        <div class="flex gap-x-4 w-[40%] items-center pb-[30px]">
          <img :src="data.item.avatar" class="rounded-full w-[30%]" />
          <div class="leading-5">
            <h6 class="text-base font-normal">{{ data.item.username }}</h6>
            <nuxt-link class="font-bold text-primary">{{
              data.item.email
            }}</nuxt-link>
          </div>
        </div>
        <div class="text-base leading-8">
          Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div class="flex justify-between items-center pt-[40px] pb-[40px]">
          <div class="flex-col text-base">
            <p class="mb-[10px]">Current Bid</p>
            <h3 class="text-primary mb-[10px]">{{ data.item.current }}</h3>
            <span class="text-lighten">{{ data.item.sa }}</span>
          </div>
          <div class="flex-col text-base">
            <p class="mb-[10px]">Owner</p>
            <h3 class="text-primary mb-[10px]">{{ data.item.username }}</h3>
            <span class="text-lighten">{{ data.item.email }}</span>
          </div>
          <div class="flex-col text-base">
            <p class="mb-[10px]">Ends In</p>
            <h3 class="text-primary mb-[10px]">{{ data.item.end }}</h3>
            <span class="text-lighten">{{ data.item.date }}</span>
          </div>
        </div>
        <div class="flex justify-between w-[75%] items-center">
          <span class="text-lighten">Place Bid:</span>
          <input
            type="text"
            :value="data.item.current"
            class="rounded-8 w-[100px] h-[50px] bg-transparent border-primary outline-0 text-center font-normal text-lg text-white"
          />
          <BaseTheButton text="Submit Now" :back="false" />
        </div>
      </div>
    </div>
    <div v-show="showPrice" class="px-[100px] m-auto">
      <Prices />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cat: { type: Boolean, default: false },
});
const route = useRoute();
console.log(route.params.id);

const { data } = await useFetch(`/api/itemsMarket/${route.params.id}`);
</script>

<style scoped></style>
