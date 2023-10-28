<template>
  <div>
    <BaseLoading v-if="!loading" />
    <div v-else>
      <Details
        name="Author"
        text="VIEW DETAILS FOR AUTHOR"
        title="Author Details"
        :showButton="true"
      />
      <AuthorItems :authors="authors" />
      <Create />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app";
const loading = ref(false);

const appStore = useAppStore();
const { authors } = storeToRefs(appStore);
onMounted(async () => {
  setTimeout(async () => {
    loading.value = true;
    await appStore.getAuthors();
  }, 3000);
});
loading.value = false;
</script>

<style scoped></style>
