<template>
  <div>
    <BaseLoading v-if="!loading" />

    <div v-else>
      <Details
        :showButton="true"
        title="Liberty NFT Market"
        text="VIEW ITEM DETAILS"
        name="Item Details"
      />
      <ViewDetails
        title="Dolores Haze Westworld Eye"
        owner="Golden Abood"
        photo="/images/author-02.jpg"
        :cat="true"
      />
      <Create />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false);
onBeforeMount(() => {
  setTimeout(() => {
    loading.value = true;
  }, 3000);
});
</script>

<style scoped></style>
