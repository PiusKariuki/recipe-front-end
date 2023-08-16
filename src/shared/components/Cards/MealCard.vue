<script setup>
defineProps(['meal'])
</script>

<template>
  <div class="flex flex-col rounded-xl w-[80vw] md:w-64 lg:w-96 flex-shrink-0">
    <img :src="meal.banner" alt="" class="object-cover object-center rounded-xl w-full h-64">
    <p class="font-semibold text-xl">{{meal.name}}</p>
    <p class="text-slate-500 font-light text-sm">{{meal.chef}}</p>
  </div>
</template>

<style scoped>

</style>