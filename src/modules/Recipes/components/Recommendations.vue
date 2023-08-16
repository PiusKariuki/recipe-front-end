<script setup>

import MealCard from "@/shared/components/Cards/MealCard.vue";
import {meals} from "@/shared/data/meals.js";
</script>

<template>
  <div class="flex flex-col gap-4 py-8">
    <div class="flex items-baseline justify-between">
      <p class="text-2xl font-semibold">Recommendations</p>
      <p class="text-info font-semibold">See all</p>
    </div>
    <div class="flex gap-4 overflow-x-scroll py-4">
      <MealCard v-for="(meal, index) in meals" :key="index" :meal="meal" />
    </div>
  </div>
</template>

<style scoped>

</style>