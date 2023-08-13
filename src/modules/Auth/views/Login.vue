<script setup>
import {useRouter} from "vue-router";
import {reactive, ref} from "vue";
import {useQuery} from "@vue/apollo-composable";
import {login} from "@/shared/apollo/queryStrings/auth.js";
import Swal from "sweetalert2";
import MazInput from 'maz-ui/components/MazInput'


const router = useRouter()


const state = reactive({
  email: "",
  password: ""
})

/**
 * Login query variables
 * @type {Ref<UnwrapRef<{password: string, email: string}>>}
 */
const loginVariables = ref({
  email: "",
  password: ""
})

/**
 * Login query composable
 */
const {refetch, loading, onResult, onError} = useQuery(login, loginVariables, {
  fetchPolicy: 'no-cache'
})

/**
 * Submit handler sends login query
 * @param evt
 */
const handleSubmit = (evt) => {
  evt.preventDefault()
  /**
   * Load the query variables
   * @type {{password: UnwrapRef<string>, email: UnwrapRef<string>}}
   */
  loginVariables.value = {
    email: state.email,
    password: state.password
  }
  refetch()
}

/**
 * Success query hook for login
 */
onResult(res => {
  if (res.data)
    Swal.fire({
      icon: "success",
      text: "Fill in the OTP sent to your email"
    }).then(() => {
      router.push(`/auth/verify-otp/${res.data.login.id}`)
    })
})


/**
 * Login query error hook
 */
onError(error => {
  if (state.email && state.password)
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
    <MazInput
        v-model="state.email"
        label="Email"
        required
        type="email"
    />
    <MazInput
        v-model="state.password"
        label="Password"
        type="password"
    />
    <div class="flex flex-col gap-2 md:flex-row md:justify-between">
      <p
          class="text-right cta"
          @click="router.push('/auth/recover-password')">Forgot password?</p>
      <p
          class="text-right cta"
          @click="router.push('/auth/register')">Don't have an account?</p>
    </div>

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