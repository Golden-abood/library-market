<template>
  <div
    class="min-h-[75vh] bg-no-repeat bg-cover min-w-[100%] bg-[url(/images/main-bg.jpg)]"
  >
    <BaseTheTitle
      text="Our Top Sellers This Week."
      title="create"
      :centered="true"
      class="text-center pt-[100px]"
    />
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[20px] gap-y-[30px] pt-[70px] lg:px-[100px] text-white pb-[20px]"
    >
      <div class="box flex gap-x-3 items-center m-auto" v-for="box in sellers">
        <img :src="box.icon" class="rounded-full w-[60px]" />
        <div>
          <h4 class="text-lg mb-2">{{ box.name }}</h4>
          <p>{{ box.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  sellers: { type: Array, required: true },
});
</script>

<style>
.box {
  position: relative;
  counter-increment: works;
}
.box::after {
  content: "" counter(works) ".";
  position: absolute;
  top: 15px;
  left: -40px;
  height: 100%;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
</style>
