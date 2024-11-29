<template>
  <div>
    <BaseLoading v-if="!loading" />
    <div v-else>
      <div
        class="bg-[url(/images/banner-bg.jpg)] bg-no-repeat pt-0 lg:pt-[30px] bg-center bg-cover min-h-[130vh]"
      >
        <Nav />

        <HeroSection />
      </div>
      <Categories :categories="categories" />
      <Create />
      <ItemsMarket />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Category } from "@/types/index";

const loading = ref(false);

const categories: Category[] = [
  {
    icon: "images/icon-01.png",
    text: "Blockchain",
  },
  {
    icon: "images/icon-02.png",
    text: "Digital Art",
  },
  {
    icon: "images/icon-03.png",
    text: "Digital Art",
  },
  {
    icon: "images/icon-04.png",
    text: "Virtual World",
  },
  {
    icon: "images/icon-05.png",
    text: "Valuable",
  },
  {
    icon: "images/icon-06.png",
    text: "Triple NFT",
  },
];
onMounted(async () => {
  setTimeout(async () => {
    loading.value = true;
  }, 3000);
});
</script>

<style scoped></style>
