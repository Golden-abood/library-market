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
        <h4 class="text-xl mb-[25px]">{{ props.title }}</h4>
        <div class="flex gap-x-4 w-[40%] items-center pb-[30px]">
          <img :src="props.photo" class="rounded-full w-[30%]" />
          <div class="leading-5">
            <h6 class="text-base font-normal">Liberty Artist</h6>
            <nuxt-link class="font-bold text-primary">@libertyart</nuxt-link>
          </div>
        </div>
        <div class="text-base leading-8">
          Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div class="flex justify-between items-center pt-[40px] pb-[40px]">
          <div class="flex-col text-base">
            <p class="mb-[10px]">Current Bid</p>
            <h3 class="text-primary mb-[10px]">6.06 ETH</h3>
            <span class="text-lighten">($8,025.50)</span>
          </div>
          <div class="flex-col text-base">
            <p class="mb-[10px]">Owner</p>
            <h3 class="text-primary mb-[10px]">{{ props.owner }}</h3>
            <span class="text-lighten">(@davidwalker)</span>
          </div>
          <div class="flex-col text-base">
            <p class="mb-[10px]">Ends In</p>
            <h3 class="text-primary mb-[10px]">3D 05H 20M 58S</h3>
            <span class="text-lighten">(January 22nd, 2021)</span>
          </div>
        </div>
        <div class="flex justify-between w-[75%] items-center">
          <span class="text-lighten">Place Bid:</span>
          <input
            type="text"
            value="1 ETH"
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
  title: { type: String, required: true },
  photo: { type: String, required: true },
  owner: { type: String, required: true },
  showPrice: { type: Boolean, default: false },
  cat: { type: Boolean, default: false },
});
</script>

<style scoped></style>
