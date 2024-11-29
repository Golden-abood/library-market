<template>
  <div
    class="bg-cover bg-no-repeat min-h-[100vh] w-[100%] bg-[url(/images/dark-bg.jpg)] m-auto px-[20px] md:px-[110px] pb-[150px] pt-[100px]"
  >
    <div
      class="relative xl:flex justify-between items-center text-center m-auto"
    >
      <BaseTheTitle
        text="Items Currently In The Market."
        title="Items"
        :startChar="5"
        :endChar="0"
        class="w-[100%] lg:w-[100%] text-center lg:text-start pt-[40px] before:!lg:left-[4%]"
        :centered="false"
        data-aos="zoom-in-right"
      />
      <ul class="flex justify-center" data-aos="zoom-in-left">
        <li
          v-for="(item, index) in list"
          class="mr-0 md:mr-1 font-medium cursor-pointer w-[100px] my-2 transition duration-100 text-center mt-7 flex-nowrap text-[15px] min-w-[14%] hover:rounded-5 py-2 hover:bg-primary"
          :class="item.category === activeCategory && 'rounded-5 bg-primary'"
          @click="handleSelect(item.category)"
        >
          <nuxt-link class="text-white">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[100px] md:mr-[100px]">
      <div v-for="item in filteredItems" data-aos="zoom-in-down">
        <div
          class="flex gap-x-8 bg-light p-[40px] rounded-6 border-solid border-1 border-bocolor"
        >
          <img :src="item.photo" class="rounded-6" />
          <div class="flex-col w-[100%]">
            <h3 class="text-white text-xl mb-[25px]">{{ item.title }}</h3>
            <div
              class="flex gap-x-3 pb-[30px] border-b-solid border-b-bocolor border-b-1"
            >
              <img :src="item.avatar" class="rounded-full w-[20%]" />
              <div class="flex-col text-base font-normal">
                <p class="text-white">{{ item.username }}</p>
                <span class="text-primary">{{ item.email }}</span>
              </div>
            </div>
            <div class="flex justify-between text-white pt-[30px]">
              <div class="flex-col text-base">
                <p class="pb-[15px]">Current Bid</p>
                <p class="font-bold pb-[15px]">{{ item.current }}</p>
                <span>($8,240.50)</span>
              </div>
              <div class="flex-col text-base">
                <p class="pb-[15px]">Ends In</p>
                <p class="font-bold pb-[15px]">{{ item.end }}</p>
                <span>{{ item.date }}</span>
              </div>
            </div>
            <div class="mt-3">
              <nuxt-link :to="`ItemDetails-${item.id}`" class="text-primary">
                View Item Details
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeCategory = ref("all");

const { data: items } = await useFetch("/api/itemsMarket");

const handleSelect = (category: string) => {
  activeCategory.value = category;
};

const list = reactive([
  {
    title: "All Items",
    category: "all",
  },
  {
    title: "Music Art",
    category: "music",
  },
  {
    title: "Digital Art",
    category: "digital",
  },
  {
    title: "Blockchain",
    category: "blockchain",
  },
  {
    title: "Virtual",
    category: "virtual",
  },
]);

const filteredItems = computed(() => {
  if (activeCategory.value === "all") return items.value!.itemsMarket;
  return items.value!.itemsMarket.filter(
    (e) => e.category === activeCategory.value
  );
});
</script>

<style scoped></style>
