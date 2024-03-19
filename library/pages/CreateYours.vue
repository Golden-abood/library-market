<template>
  <div>
    <BaseLoading v-if="!loading" />

    <div v-else>
      <Details
        name="Create Yours"
        text="CREATE YOUR NFT NOW."
        title="Liberty NFT Market"
        :show-button="true"
      />
      <FormLibrary />
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
