<template>
  <div>
    <BaseLoading v-if="!loading" />
    <div v-else>
      <div
        class="bg-[url(/images/banner-bg.jpg)] bg-no-repeat pt-0 lg:pt-[30px] bg-center bg-cover min-h-[130vh]"
      >
        <Nav />

        <Landing />
      </div>
      <Categories :categories="categories" />
      <Create />
      <ItemsMarket :items="itemsMarket" />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app";
const loading = ref(false);

const appStore = useAppStore();
const { categories, itemsMarket } = storeToRefs(appStore);
onMounted(async () => {
  setTimeout(async () => {
    loading.value = true;
    await appStore.getCategories();
    await appStore.getItemsMarket();
  }, 3000);
});
loading.value = false;
</script>

<style scoped></style>
