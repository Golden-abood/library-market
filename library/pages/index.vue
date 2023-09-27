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
      <Categories />
      <Create />
      <ItemsMarket />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false);
onBeforeMount(() => {
  setTimeout(() => {
    loading.value = true;
  }, 5000);
});
</script>

<style scoped></style>
