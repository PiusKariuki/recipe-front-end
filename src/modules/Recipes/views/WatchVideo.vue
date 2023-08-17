<script setup>
import {comments} from "@/shared/data/comments.js";
import {reactive} from "vue";

const state = reactive({
  newComment:" "
})
</script>

<template>
  <div class="flex flex-col lg:flex-row w-full relative pb-20">
    <div class="flex flex-col gap-2 lg:w-9/12">
      <video class="w-full h-screen bg-slate-100" controls src="volk.mp4"></video>
      <div class="flex items-center justify-between mt-8 px-8 ">
        <p class="text-xl md:text-2xl font-bold w-6/12 text-ellipsis break-words">Fried Fish and Salad</p>
        <button class="bg-info px-4 py-2 rounded-xl text-white font-bold">
          <font-awesome-icon icon="fa-solid fa-link"/>
          Share Video
        </button>
      </div>
    </div>
    <!--   comment section-->
    <div class="flex flex-col p-8 relative lg:w-3/12">
      <p class="text-2xl font-medium underline">Comments <font-awesome-icon icon="fa-solid fa-comments" class="text-info"/></p>
      <maz-input placeholder="Your message " class="mt-8 " v-model="state.newComment"/>
      <div class="flex flex-col h-96 lg:h-full overflow-y-scroll gap-2">
        <div
            v-for="(comment , index) in comments"
            :key="index"
            class="flex w-full p-2 gap-3">
          <img :src="comment.avatar" alt="" class="w-8 h-8 object-center object-cover rounded-xl border-2">
          <div class="flex flex-col ">
            <p class="font-bold text-sm">{{comment.name}} <span class="text-slate-400">&nbsp;&nbsp;{{comment.timestamp}}</span></p>
            <p class="text-sm text-black font-medium">{{comment.comment}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>