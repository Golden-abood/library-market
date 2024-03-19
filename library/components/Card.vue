<template>
  <div class="relative text-center">
    <img :src="props.element.discover" class="rounded-6 w-[100%]" />
    <img
      :src="props.element.AuthorPhoto"
      class="rounded-full w-[20%] object-cover translate-x-[50%] absolute top-[-20px] right-[50%]"
    />
  </div>
  <h3
    class="mt-[30px] pb-[30px] font-bold text-xl border-b-2 border-b-bocolor border-b-solid"
  >
    {{ props.element.title }}
  </h3>
  <div class="flex pt-[30px] justify-between px-[10px]">
    <div class="left">
      <p class="mb-2">Current Bid :</p>
      <h4>{{ props.element.current }}</h4>
    </div>
    <div class="pr-[25px]">
      <p class="mb-2">Ends In :</p>
      <h4>{{ props.element.end }}</h4>
    </div>
  </div>
  <BaseTheButton
    text="View Details"
    :back="false"
    class="w-[60%] absolute bottom-[-55px] left-0 mx-auto text-center"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  element: { type: Array, required: true },
});
import { useAppStore } from "~/stores/app";
import { storeToRefs } from "pinia";
import { Element } from "~/types";
const appStore = useAppStore();
</script>

<style scoped></style>
