<template>
  <div>
    <BaseLoading v-if="!loading" />
    <div v-else>
      <Details
        name="Explore"
        title="Liberty NFT Market"
        text="DISCOVER SOME TOP ITEMS"
        :show-button="false"
      />
      <ExploreDescoverItems :authors="authors" />
      <ExploreTopSellers :sellers="sellers" />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app";
const loading = ref(false);

const appStore = useAppStore();
const { sellers, authors } = storeToRefs(appStore);
onMounted(async () => {
  setTimeout(async () => {
    loading.value = true;
    await appStore.getsellers();
    await appStore.getAuthors();
  }, 3000);
});
loading.value = false;
</script>

<style scoped></style>
