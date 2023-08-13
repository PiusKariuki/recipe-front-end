<script setup>

import TabBar from "@/shared/components/Nav/TabBar.vue";
</script>

<template>
  <div class="flex w-full justify-between">
    <slot/>
    <tab-bar/>
  </div>
</template>

<style scoped>

</style>