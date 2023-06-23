<template>
  <div class="cat">
    <div class="wrapper text-center flex-col items-center justify-center">
      <div class="relative">
        <BaseTheTitle
          text="Browse Through Our Categories Here."
          title=""
          class="pt-[150px] active"
        />
      </div>
      <div class="categories mt-[100px] ml-[120px]">
        <div
          v-for="category in catigories"
          :key="category.icon"
          class="jsutify-center m-auto"
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
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app";
const appStore = useAppStore();
const { catigories } = storeToRefs(appStore);
</script>

<style scoped>
.cat {
  background-image: url("/images/dark-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
}
.wrapper {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
h3 {
  color: white;
}
.active::before {
  content: "";
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 7%;
  height: 3px;
  background-color: #7453fc;
}
.categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 20px 25px;
  position: relative;
}
</style>
