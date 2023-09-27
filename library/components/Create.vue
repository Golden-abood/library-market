<template>
  <div class="create-warapper relative pt-[100px] px-[30px] sm:px-[100px]">
    <div class="lg:flex text-center lg:justify-between items-center">
      <BaseTheTitle
        class="pb-[30px] sm:pb-0 before:!bg-white before:!top-[70px] before:!left-[150px]"
        text="Create Your NFT & Put It On The Market."
        title="create"
        :centered="false"
      />
      <BaseTheButton
        text="Create Your NFT Now"
        :back="false"
        class="mt-10 lg:mt-0 w-[60%] lg:w-[18%] m-auto lg:m-0"
      />
    </div>
    <div
      class="grid grid-cols-1 xl:grid-cols-3 gap-x-[60px] gap-y-[30px] pt-[50px] lg:pt-[150px] pb[80px] xl:pb-[120px]"
    >
      <div
        v-for="abood in create"
        class="step relative text-white text-center lg:text-left"
      >
        <img :src="abood.icon" class="bg-white p-3 mb-[30px] rounded-full" />
        <h3 class="font-bold text-xl pb-[20px]">{{ abood.title }}</h3>
        <p class="leading-8 text-base">{{ abood.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app";
const appStore = useAppStore();
const { create } = storeToRefs(appStore);
onMounted(() => {
  appStore.getCreate();
});
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
