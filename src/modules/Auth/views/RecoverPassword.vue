<script setup>
import {useRouter} from "vue-router";
import {reactive} from "vue";
import {useMutation} from "@vue/apollo-composable";
import Swal from "sweetalert2";
import MazInput from 'maz-ui/components/MazInput'
import {recoverPassword} from "@/shared/apollo/queryStrings/auth.js";


const router = useRouter()


const state = reactive({
  email: "",
  password: ""
})


/**
 * Login query composable
 */
const { loading,mutate, onDone, onError} = useMutation(recoverPassword)

/**
 * Submit handler sends login query
 * @param evt
 */
const handleSubmit = (evt) => {
  evt.preventDefault()
  mutate({
    email: state.email
  })

}

/**
 * Success query hook for login
 */
onDone(res => {
  if (res.data)
    Swal.fire({
      icon: "success",
      text: "Login with the new password sent to your email"
    }).then(() => {
      router.push(`/auth/login`)
    })
})


/**
 * Login query error hook
 */
onError(error => {
    Swal.fire({
      icon: "info",
      text: error.message
    })
})

</script>

<template>
  <form
      class="flex flex-col w-full gap-8 my-auto"
      @submit="handleSubmit">
    <p class="text-3xl font-light">Password recovery</p>
    <MazInput
        v-model="state.email"
        label="Email"
        required
        type="email"
    />
    <p
        class="text-right cta"
        @click="router.push('/auth/register')">Don't have an account?</p>
    <spinner v-if="loading"
             :load="loading" class="self-center"/>
    <button
        v-else
        class="primary-btn lg:w-44 md:col-span-2">Submit
    </button>
  </form>

</template>

<style scoped>

</style>