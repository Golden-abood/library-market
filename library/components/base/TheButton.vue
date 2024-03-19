<template>
  <nuxt-link
    :class="{ back: back }"
    class="bg-primary font-medium block rounded-6 border-1 border-primary relative border-solid py-3 px-6 cursor-pointer text-white after:absolute after:content-[''] after:h-[2px] after:left-0 after:translate-x-[12%] after:w-[82%] after:bottom-0 after:bg-white hover:after:hidden"
  >
    {{ props.text }}
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  text: { type: String, required: true },
  back: { type: Boolean, required: true },
});
</script>

<style scoped>
.back {
  background-color: transparent !important;
}

a {
  transition: 0.5s;
}
a:first-child:hover {
  background-color: #7453fc !important;
}
a:last-child:hover {
  background-color: white !important;
  color: #7453fc !important;
}
/*
a:first-child::after {
    content : "";
    position: absolute;
    bottom: 0.5px;
    left: 19px;
    width:18%;
    height: 2px;
    background-color: white;
}
a:last-child::after{
    content : "";
    position: absolute;
    bottom: 0.5px;
    right: 55%;
    width:18%;
    height: 2px;
    background-color: white;
}
*/
</style>
