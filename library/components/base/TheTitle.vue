<template>
  <h3
    class="text-white text-[30px] font-[700] before:absolute before:bg-primary before:content-[''] before:h-[2px] before:w-[20%] lg:before:w-[7%]"
    :class="
      props.centered
        ? 'before:left-[50%] before:translate-x-[-50%] before:top-[120px]'
        : 'before:left-[50%] before:translate-x-[-50%] before:lg:left-[10%] before:top-0 '
    "
  >
    {{ props.text.slice(0, props.endChar) }}
    <span v-if="props.title != 'create'" class="text-primary">{{
      props.title
    }}</span>
    <span v-if="props.title != 'create'">
      {{ props.text.slice(props.startChar, props.text.length) }}
    </span>
  </h3>
</template>
<script setup lang="ts">
const props = defineProps({
  text: { type: String, required: true },
  title: { type: String, required: true },
  centered: { type: Boolean },
  startChar: { type: Number },
  endChar: { type: Number },
});
provide("title", props.title);
</script>

<style scoped></style>
