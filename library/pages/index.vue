<template>
   <div>
        <div class="landing">
            <Nav />
            <Landing />
        </div>
        <Categories />
   </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

.landing {
    background-image: url("/images/banner-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 130vh;
    padding-top: 30px;
    background-position: center;
}
</style>