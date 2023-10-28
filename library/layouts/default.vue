<template>
  <div></div>
  <slot />
</template>

<script setup lang="ts">
import AOS from "aos";

onMounted(() => {
  AOS.init({
    once: true,
    offset: 50,
    duration: 700,
  });
});
</script>

<style>
*::selection {
  background-color: #7453fc;
  color: white;
}
</style>
