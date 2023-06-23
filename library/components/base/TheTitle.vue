<template>
    <h3 class="text-white text-[30px] font-[700] ">{{ props.text }} </h3>
</template>
<script setup lang="ts">
const props = defineProps({
  text: { type: String, required: true },
  title: {type: String , required: true}, 
})
</script>

<style scoped>

</style>