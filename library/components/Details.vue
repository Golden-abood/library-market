<template>
  <div
    class="bg-cover bg-no-repeat h-[85vh] bg-center bg-[url(/images/heading-bg.jpg)] pt-0 lg:pt-[30px]"
  >
    <Nav />
    <div class="flex justify-center items-center">
      <div class="text-white text-center pt-[150px]">
        <p class="text-xl mb-[15px] font-medium tracking-wider">
          {{ props.title }}
        </p>
        <h2 class="text-[50px] font-bold uppercase">{{ props.text }}</h2>
        <div class="text-sm mt-[10px]">
          <span class="text-primary">Home > </span>
          <nuxt-link>{{ props.name }} </nuxt-link>
        </div>
        <div
          v-show="showButton"
          class="flex mt-[25px] items-center text-center justify-center gap-x-7 relative"
        >
          <BaseTheButton text="Explore Our Items" :back="false" />
          <BaseTheButton text="Create Your NFT" :back="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true },
  text: { type: String, required: true },
  title: { type: String, required: true },
  showButton: { type: Boolean, required: true, default: true },
});
</script>

<style scoped>
</style>
