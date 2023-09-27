<template>
  <div>
    <BaseLoading v-if="!loading" />

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
