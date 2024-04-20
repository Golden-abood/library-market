<template>
  <div
    class="bg-[url(/images/dark-bg.jpg)] bg-cover bg-no-repeat min-h-[100vh] relative px-[20px] md:px-[100px] pt-[180px]"
  >
    <div class="md:flex justify-center sm:justify-between md:items-center">
      <div class="flex items-center justify-center pb-10 sm-pb-0 gap-x-9">
        <img src="../../public/images/single-author.jpg" class="rounded-full" />
        <div>
          <h4 class="text-white font-bold text-xl">Melanie Smith</h4>
          <p class="text-primary text-[15px] font-bold">@melanie32</p>
        </div>
      </div>
      <div
        class="bg-light border-solid border-1 border-bocolor rounded-5 min-w-[300px] sm:min-w-[500px] p-[20px]"
      >
        <div class="flex justify-around pb-[30px]">
          <div class="action flex-col" v-for="action in actions">
            <Icon size="30" :name="action" color="#7453fc" />
            <p class="text-white pt-[5px] text-base">
              <span class="font-bold text-xl text-primary">1238</span> Likes
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <h3 class="text-lighten">559 Followers</h3>
          <BaseTheButton text="Follow @Melanie32" :back="false" />
        </div>
      </div>
    </div>
    <div class="relative pt-[100px]">
      <BaseTheTitle
        text="Melanie Smith’s "
        title="Items"
        :startChar="15"
        :endChar="15"
        :centered="false"
        class="before:!top-[70px] before:!left-[10%] before:!lg:left-[4%]"
      />
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[40px] xl:grid-cols-4 py-[100px]"
      >
        <div
          v-for="author in authors.slice(0, 4)"
          class="card relative text-white flex-col justify-center rounded-5 py-[40px] px-[30px] bg-light border-1 border-solid border-bocolor"
        >
          <Card :element="author" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  authors: { type: Object, required: true },
});
const actions = [
  "material-symbols:favorite-rounded",
  "material-symbols:back-hand",
  "ph:currency-dollar",
];
</script>

<style scoped></style>
