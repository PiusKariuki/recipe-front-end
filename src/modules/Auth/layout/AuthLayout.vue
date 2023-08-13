<script setup>
import {useRoute} from "vue-router";


const headerText = {
  login: {
    header: "Welcome back",
    sub: "Fill out the details below"
  },
  register: {
    header: "Welcome",
    sub: "Fill out the details below"
  },
  otp: {
    header: "",
    sub: ""
  },

}

const route = useRoute()


</script>

<template>
  <div class="page flex-row">
    <div class="flex flex-col w-full lg:w-6/12 gap-12 ">
      <div class="flex flex-col gap-2 items-center lg:items-start">
        <p class="subtitle text-info">{{headerText[route?.name]?.header}}</p>
        <p class=" text-info">{{headerText[route?.name]?.sub}}</p>
      </div>
      <router-view/>
    </div>
    <div class="hidden lg:flex w-full bg min-h-full bg-cover bg-center bg-no-repeat rounded-md"/>
  </div>
</template>

<style scoped>
.bg {
  background-image: url("https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800");
}
</style>