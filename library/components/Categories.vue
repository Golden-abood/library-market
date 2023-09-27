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
        >
          <div
            v-for="category in categories"
            :key="category.icon"
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
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app";
const appStore = useAppStore();
const { categories } = storeToRefs(appStore);
onMounted(() => {
  appStore.getCategories();
});
</script>

<style scoped>
</style>
