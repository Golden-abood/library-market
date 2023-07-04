<template>
  <div>
    <div class="landing pt-0 lg:pt-[30px]">
      <Nav />

      <Landing />
    </div>
  </div>
  <Categories />
  <Create />
  <ItemsMarket />
  <Footer />
</template>

<script setup lang="ts"></script>

<style scoped>
.landing {
  background-image: url("/images/banner-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 130vh;
  background-position: center;
}
</style>
