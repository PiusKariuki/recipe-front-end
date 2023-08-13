<script setup>
import {useRouter} from "vue-router";
import { reactive, watch} from "vue";
import {useMutation} from "@vue/apollo-composable";
import MazInput from 'maz-ui/components/MazInput'
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput.mjs";
import MazRadioButtons from "maz-ui/components/MazRadioButtons.mjs";
import MazPicker from 'maz-ui/components/MazPicker'
import {register} from "@/shared/apollo/queryStrings/auth.js";
import Swal from "sweetalert2";
import {genderOptions} from "@/shared/data/dummyData.js";


const router = useRouter()


const state = reactive({
  fullName: "",
  email: "",
  phoneNumber: "",
  gender: "",
  dob: "",
  genderError: "",
})

/**
 * Register mutation composable
 */
const {mutate, loading, onDone, onError} = useMutation(register)

/**
 * Error query hook for register mutation
 * Display error message
 */
onError((error) => {
  Swal.fire({
    icon: "info",
    text: error.message
  })
})

/**
 * Success hook for register mutation
 * Redirects to OTP page
 */
onDone((res) => {
  Swal.fire({
    icon: "success",
    text: "Check your email for an OTP"
  }).then(()=>{
    router.push(`/auth/verify-otp/${res.data.register.id}`)
  })
})

/**
 * Submit handler
 * @param evt
 * @returns {string}
 */
const handleSubmit = (evt) => {
  evt.preventDefault()
  /**
   * Confirm password and gender errors
   */
  if (state.password !== state.confirmPassword)
    return state.passwordError = "Confirm you password please"
  else state.passwordError=""
  if (state.gender.length === 0)
    return state.genderError = "Please select a gender"
  else state.genderError = ""

  mutate({
    ...state
  })
}


watch(()=> state.confirmPassword, value => {
  if(value !== state.password)
    state.passwordError = "Passwords do not match"
  else state.passwordError = ""
})


watch(()=> state.gender, value => {
  if(value)
    state.genderError = ""
})

</script>

<template>
  <form
      class="flex flex-col w-full gap-12"
      @submit="handleSubmit">

    <MazInput
        v-model="state.fullName"
        label="Full Name"
        required
    />

    <MazInput
        v-model="state.email"
        label="Email"
        required
        type="email"
    />

    <MazPhoneNumberInput
        v-model="state.phoneNumber"
        color="primary"
        label="PhoneNumber"

    />

    <div class="flex flex-col gap-1">
      <p class="font-semibold cursor-pointer">Gender</p>
      <MazRadioButtons
          v-model="state.gender"
          :options="genderOptions"
          required
      />
      <p v-if="state.genderError" class="text-red-500 font-semibold">{{ state.genderError }}</p>
    </div>

    <MazPicker
        v-model="state.dob"
        color="primary"
        label="Date of birth"
    />

      <p
          class="text-right cta"
          @click="router.push('/auth/login')">Already have an account?</p>

    <spinner v-if="loading"
             :load="loading" class="self-center"/>
    <button
        v-else
        class="primary-btn lg:w-44 md:col-span-2">Save
    </button>
  </form>

</template>

<style scoped>

</style>