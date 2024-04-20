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
      <AuthorItems :authors="data?.authors" />
      <Create />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false);

const { data } = await useFetch("/api/authors");

onMounted(async () => {
  setTimeout(async () => {
    loading.value = true;
  }, 3000);
});
loading.value = false;
</script>

<style scoped></style>
