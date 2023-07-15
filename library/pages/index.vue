<template>
  <div>
    <div
      v-if="!loading"
      class="bg-[#000] h-screen w-full flex justify-center items-center"
    >
      <span class="bg-primary p-3 ml-4 rounded-full one"></span>
      <span class="bg-primary p-3 ml-4 rounded-full two"></span>
      <span class="bg-primary p-3 ml-4 rounded-full three"></span>
      <span class="bg-primary p-3 ml-4 rounded-full four"></span>
    </div>
    <div v-else>
      <div class="landing pt-0 lg:pt-[30px]">
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

<style scoped>
.landing {
  background-image: url("/images/banner-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 130vh;
  background-position: center;
}
</style>
