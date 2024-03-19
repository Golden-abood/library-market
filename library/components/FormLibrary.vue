<template>
  <div
    class="bg-[url(/images/dark-bg.jpg)] bg-no-repeat bg-cover min-h-[100vh] w-[100%] pt-[200px] pb-[100px]"
  >
    <BaseTheTitle
      text="Apply For Here."
      title="Your Item"
      :startChar="9"
      :endChar="10"
      :centered="true"
      class="text-center"
    />
    <form
      class="text-[#fff] bg-dark px-6 py-10 w-[80%] m-auto mt-[100px] rounded-3"
    >
      <div class="sm:flex justify-start gap-x-[15%] items-center pb-[35px]">
        <div class="flex-col">
          <label class="block mb-[10px] font-medium">Item Title</label>
          <input
            type="text"
            placeholder="Ex. Layon King"
            class="bg-light rounded-8 text-lighten w-[100%] sm:w-[170%] outline-0 border-solid border-1 border-bocolor p-3 font-bold text-base"
          />
        </div>
        <div class="flex-col pt-[30px] sm:pt-0">
          <label class="block mb-[10px] font-medium" for=""
            >Description For Item</label
          >
          <input
            type="text"
            placeholder="Give Us Your Idea"
            class="bg-light rounded-8 text-lighten w-[100%] sm:w-[170%] outline-0 border-solid border-1 border-bocolor p-3 font-bold text-base"
          />
        </div>
        <div class="flex-col pt-[30px] sm:pt-0">
          <label class="block mb-[10px] font-medium" for=""
            >Your Username</label
          >
          <input
            type="text"
            placeholder="@Ex.alansmith"
            class="bg-light rounded-8 text-lighten w-[100%] sm:w-[170%] outline-0 border-solid border-1 border-bocolor p-3 font-bold text-base"
          />
        </div>
      </div>
      <div class="sm:flex justify-start gap-x-[32%] items-center pb-[35px]">
        <div class="flex-col sm:pt-0">
          <label class="block mb-[10px] font-medium" for=""
            >Price Of Item</label
          >
          <input
            type="text"
            placeholder="Price depends on quality. Ex. 0.06 ETH"
            class="bg-light rounded-8 text-lighten w-[100%] sm:w-[260%] outline-0 border-solid border-1 border-bocolor p-3 font-bold text-base"
          />
        </div>
        <div class="flex-col pt-[30px] sm:pt-0">
          <label class="block mb-[10px] font-medium" for="">Royalties </label>
          <input
            type="text"
            placeholder="Common royalties 1-25%"
            class="bg-light rounded-8 text-lighten w-[100%] sm:w-[260%] outline-0 border-solid border-1 border-bocolor p-3 font-bold text-base"
          />
        </div>
      </div>
      <div class="sm:flex justify-center items-center">
        <div class="flex-col">
          <label class="block mb-[10px] font-medium">Your File</label>
          <input type="file" class="font-bold text-base" />
        </div>
        <BaseTheButton
          text="Submit Your Applying"
          class="w-[67%] text-center m-auto mt-10 sm:mt-0"
          :back="false"
        />
      </div>
    </form>
    <ViewDetails
      title="Dolores Haze Westworld Eye"
      owner="Golden Za "
      photo="images/author-03.jpg"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
