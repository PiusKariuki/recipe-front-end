<script setup>

import {routes} from "@/shared/data/routes.js";
</script>

<template>
    <div class="flex w-full justify-between px-4 py-6 border-t-[1px] curved fixed inset-x-0 bottom-0">
      <router-link
          v-for="item in routes"
          :key="item.name"
          :to="item.route"
          class="flex flex-col gap-2">
        <font-awesome-icon
            :icon="item.icon"
            class=" text-xl "/>
      </router-link>
  </div>


</template>

<style scoped>
.router-link-exact-active {
  @apply text-info
}

.curved {
  text-align: center;

}

</style>