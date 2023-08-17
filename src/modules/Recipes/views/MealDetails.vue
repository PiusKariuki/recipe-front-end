<script setup>
import {useRouter} from "vue-router";

const ingredients = ["2 cups pecans, divided", "1 Tablespoon unsalted butter", "1/4 teaspoon kosher salt, plus more",]
const router = useRouter()
</script>

<template>
  <div class="flex flex-col w-full px-4 py-8 gap-2 lg:px-12 pb-32">
    <div class="flex items-center justify-between">
      <font-awesome-icon class="text-xl" icon="fa-solid fa-chevron-left"/>
      <font-awesome-icon class="text-xl" icon="fa-regular fa-heart"/>
    </div>

    <p class="text-2xl mt-8 font-bold">Watercress Salad</p>
    <p class="text-slate-400 w-8/12">White Onion, Fennel, and watercress salad</p>

    <div class="flex flex-col gap-2  mt-8">
      <img
          alt=""
          class="bg-white"
          src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
      <div class="flex justify-between ">
        <div class="flex items-center shadow-lg rounded-3xl px-2 py-1 gap-2 border-2">
          <font-awesome-icon class="text-[#FBB741] text-lg" icon="fa-solid fa-star"/>
          <p class="px-1 py-1 font-semibold text-sm">5.0&nbsp;<span class=" text-sm">(2k)</span></p>
        </div>
        <div class="flex items-center shadow-lg rounded-3xl px-2 py-1 gap-2 border-2">
          <font-awesome-icon class="text-[#FBB741] text-lg" icon="fa-solid fa-fire"/>
          <p class="px-1 py-1 font-semibold text-sm">250&nbsp;Kcal</p>
        </div>
        <div class="flex items-center shadow-lg rounded-3xl px-2 py-1 gap-2 border-2">
          <font-awesome-icon class="text-[#FBB741] text-lg" icon="fa-solid fa-clock"/>
          <p class="px-1 py-1 font-semibold text-sm">30&nbsp;min</p>
        </div>
      </div>
    </div>

    <p class="text-xl font-semibold mt-8">Ingredients</p>
    <div class="flex flex-col">
      <p v-for="(item, index) in ingredients" :key="index" class="text-slate-600">{{ item }}</p>
    </div>

    <p class="text-xl font-semibold mt-8">Preparation</p>
    <div class="text-slate-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
    </div>

    <button
        @click="router.push('/video')"
        class="px-4 py-2 rounded-[32px] text-white w-44 font-medium bg-info fixed left-1/2 -translate-x-1/2 bottom-20
        flex items-center gap-1 justify-center">
      <font-awesome-icon class=" text-lg" icon="fa-solid fa-play-circle"/>
      Watch Video
    </button>
  </div>
</template>

<style scoped>

</style>