<template>
  <div class="create-warapper relative pt-[100px] px-[30px] sm:px-[100px]">
    <div class="lg:flex text-center lg:justify-between items-center">
      <BaseTheTitle
        class="pb-[30px] sm:pb-0 before:!bg-white before:!top-[70px] before:!left-[150px]"
        text="Create Your NFT & Put It On The Market."
        title="create"
        :centered="false"
        data-aos="zoom-in-right"
      />
      <BaseTheButton
        text="Create Your NFT Now"
        :back="false"
        class="mt-10 lg:mt-0 w-[60%] lg:w-[18%] m-auto lg:m-0"
        data-aos="zoom-in-left"
      />
    </div>
    <div
      class="grid grid-cols-1 xl:grid-cols-3 gap-x-[60px] gap-y-[30px] pt-[50px] lg:pt-[150px] pb[80px] xl:pb-[120px]"
    >
      <div
        v-for="(item, index) in items"
        class="step relative text-white text-center lg:text-left"
        :data-aos="
          index === 0
            ? 'zoom-in-right'
            : index === 2
            ? 'zoom-in-left'
            : 'zoom-in-down'
        "
      >
        <img :src="item.icon" class="bg-white p-3 mb-[30px] rounded-full" />
        <h3 class="font-bold text-xl pb-[20px]">{{ item.title }}</h3>
        <p class="leading-8 text-base">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    icon: "images/icon-02.png",
    text: "Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Set Up Your Wallet ",
  },
  {
    icon: "images/icon-04.png",
    text: "Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Add Your Digital NFT",
  },
  {
    icon: "images/icon-06.png",
    text: "Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Sell Your NFT & Make Profit",
  },
];
</script>

<style scoped>
.step {
  counter-increment: create;
}
.step:not(:last-child)::after {
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
@media (max-width: 768px) {
  .step:not(:last-child)::before,
  .step:not(:last-child)::after {
    display: none;
  }
}
</style>
