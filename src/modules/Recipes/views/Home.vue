<script setup>

</script>

<template>
  <div class="flex flex-col w-full px-4 py-8 gap-2">
    <div class="flex items-center gap-8">
      <div class="flex flex-col">
        <p class="text-slate-400">Hello, Pius</p>
        <p class="text-2xl font-medium">What would you like to cook today?</p>
      </div>
      <img
          alt=""
          class="w-10 h-10 rounded-full"
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?size=626&ext=jpg">
    </div>


    <div class="flex relative mt-8 w-full text-slate-400">
      <font-awesome-icon class="absolute left-4 z-10 top-1/2 -translate-y-1/2" icon="fa-solid fa-magnifying-glass"/>
      <input
          class="w-full pl-12 rounded-3xl py-1 focus:outline-0 border-[1px] border-slate-400"
          placeholder="     Search any recipes"
          type="text"/>
    </div>


  </div>
</template>

<style scoped>

</style>