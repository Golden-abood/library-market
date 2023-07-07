<template>
  <div class="cat relative text-center pb-[150px]">
    <BaseTheTitle
      text="Browse Through Our Categories Here."
      title=""
      class="pt-[150px] active"
    />
    <div>
      <div class="wrapper">
        <div
          class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 place-content-center gap-6 mt-[100px]"
        >
          <div
            v-for="category in catigories"
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
  padding-left: 80px;
  padding-right: 80px;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 768px) {
  .wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }
}
h3 {
  color: white;
}
.category {
  counter-increment: category;
}
.active::before {
  content: "" ;
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 7%;
  height: 3px;
  background-color: #7453fc;
}
.category::after {
  content: "" ;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  opacity: 0;
  transition: 0.3s;
}
.category:hover::after {
  opacity: 1;
}
</style>
