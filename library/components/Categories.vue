<template>
  <div class="cat relative text-center pb-[150px]">
    <BaseTheTitle
      text="Browse Through Our Here."
      title="Categories"
      :centered="true"
      class="pt-[150px]"
      :endChar="18"
      :startChar="18"
    >
    </BaseTheTitle>
    <div>
      <div class="wrapper">
        <div
          class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 place-content-center gap-6 mt-[100px]"
          data-aos="zoom-in-down"
        >
          <div
            v-for="(category, index) in categories"
            :key="category.icon"
            :data-aos="
              index === 0
                ? 'zoom-in-right'
                : index === 1
                ? 'zoom-in-right'
                : index === 2
                ? 'zoom-in-right'
                : 'zoom-in-left'
            "
            class="relative"
          >
            <div
              class="category bg-light p-[30px] rounded-6 border-2 border-solid border-[#404245]"
            >
              <img
                :src="category.icon"
                class="bg-white rounded-full p-2 bg-cover"
              />
              <h3 class="text-white mt-[10px]">{{ category.text }}</h3>
            </div>
          </div>
        </div>
      </div>
      <Collections />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import { Category } from "~/types";

defineProps({
  categories: { type: Array as PropType<Category[]>, required: true },
});
</script>

<style scoped></style>
