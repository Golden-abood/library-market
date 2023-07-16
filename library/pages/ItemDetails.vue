<template>
  <div>
    <div
      v-if="!loading"
      class="bg-[#000] h-screen w-full flex justify-center items-center relative top-[50%]"
    >
      <span
        class="bg-primary p-3 ml-4 rounded-full absolute left-[47%] translate-x-[-50%] one"
      ></span>
      <span
        class="bg-primary p-3 ml-4 rounded-full absolute left-[50%] translate-x-[-50%] two"
      ></span>
      <span
        class="bg-primary p-3 ml-4 rounded-full absolute left-[53%] translate-x-[-50%] three"
      ></span>
      <span
        class="bg-primary p-3 ml-4 rounded-full absolute left-[56%] translate-x-[-50%] four"
      ></span>
    </div>
    <div v-else>
      <Details
        :showButton="true"
        title="Liberty NFT Market"
        text="VIEW ITEM DETAILS"
        name="Item Details"
      />
      <ViewDetails
        title="Dolores Haze Westworld Eye"
        owner="Golden Abood"
        photo="/images/author-02.jpg"
        :cat="true"
      />
      <Create />
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
.one {
  animation-name: go-right;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-direction: alternate;
}
.two {
  animation-name: go-left-two;
  animation-iteration-count: infinite;
  animation-duration: 1.6s;
  animation-timing-function: linear;
  animation-direction: alternate;
}
.three {
  animation-name: go-left-three;
  animation-iteration-count: infinite;
  animation-duration: 1.6s;
  animation-timing-function: linear;
  animation-direction: alternate;
}
.four {
  animation-name: go-left-four;
  animation-iteration-count: infinite;
  animation-duration: 1.6s;
  animation-timing-function: linear;
  animation-direction: alternate;
}
@keyframes go-right {
  0% {
    left: 47%;
  }
  100% {
    left: 56%;
  }
}

@keyframes go-left-two {
  0% {
    left: 50%;
  }
  100% {
    left: 47%;
  }
}
@keyframes go-left-three {
  0% {
    left: 53%;
  }
  100% {
    left: 50%;
  }
}
@keyframes go-left-four {
  0% {
    left: 55%;
  }
  100% {
    left: 53%;
  }
}
</style>
