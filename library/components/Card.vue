<template>
  <div class="relative text-center">
    <img :src="author.discover" class="rounded-6 w-[100%]" />
    <img
      :src="author.avatar"
      class="rounded-full w-[20%] object-cover translate-x-[50%] absolute top-[-20px] right-[50%]"
    />
  </div>
  <h3
    class="mt-[30px] pb-[30px] font-bold text-xl border-b-2 border-b-bocolor border-b-solid"
  >
    {{ author.title }}
  </h3>
  <div class="flex pt-[30px] justify-between px-[10px]">
    <div class="left">
      <p class="mb-2">Current Bid :</p>
      <h4>{{ author.current }}</h4>
    </div>
    <div class="pr-[25px]">
      <p class="mb-2">Ends In :</p>
      <h4>{{ author.end }}</h4>
    </div>
  </div>
  <BaseTheButton
    text="View Details"
    :back="false"
    class="w-[60%] absolute bottom-[-55px] left-0 mx-auto text-center"
  />
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app";
import { PropType } from "vue";
import { Author } from "~/types";

defineProps({
  author: { type: Object as PropType<Author>, required: true },
});
</script>

<style scoped></style>
