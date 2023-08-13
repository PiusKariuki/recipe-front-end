<script setup>
import {ref} from "vue";
import VOtpInput from "vue3-otp-input";
import { useMutation, useQuery} from "@vue/apollo-composable";
import {userEmail} from "@/shared/apollo/queryStrings/user.js";
import {useRoute, useRouter} from "vue-router";
import {resendOTP, verifyOTP} from "@/shared/apollo/queryStrings/auth.js";
import Swal from "sweetalert2";
import {useAuthStore} from "@/shared/stores/authStore.js";

const route = useRoute()
const router = useRouter()
/**
 * Pinia initialization for user store
 * @type {Store<"auth", {phoneNumber: string, gender: string, dob: string, fullName: string, id: string, email: string, token: string}, {}, {loadUser(*): void}>}
 */
const authStore = useAuthStore()

/**
 * Refs for the OTP field package
 * @type {null}
 */
const otpInput = ref(null);
const bindModal = ref("");


/**
 * Variables for the get user query
 * @type {Ref<UnwrapRef<{id: string | RouteParamValue[] | undefined}>>}
 */
const getEmailVariables = ref({
  id: route?.params?.userId
})


/**
 * User query to get the user email by ID to display it
 */
const {loading, result} = useQuery(userEmail, getEmailVariables)


/**
 * Mutation hook to verify the OTP
 */
const {loading: verificationLoading, mutate, onError, onDone} = useMutation(verifyOTP)

/**
 * Success hook for the verification mutation
 * Loads the verified user details to the store
 */
onDone((res)=>{
  Swal.fire({
    icon: 'success',
    text: 'Authentication successful'
  }).then(()=>{
    authStore.loadUser(res?.data?.verifyOTP)
        router.replace("/")
  })
})

/**
 * error hook for verification mutation
 */
onError(error=> {
  Swal.fire({
    icon: 'info',
    text: error.message
  })
})

/**
 * Submit handler that sends the verification mutation
 * @param evt
 */
const handleSubmit = (evt) => {
  evt.preventDefault()
  mutate({
    OTP: bindModal.value,
    id: route.params.userId
  })
}



/**
 * Resend password mutation
 */
const {mutate: resendMutation, loading:resendLoading} = useMutation(resendOTP)

/**
 * Get a new password sent  to your email
 */
const newOTP = () => {
  resendMutation({
    id: route.params.userId
  })
}

</script>

<template>
  <form
      class="flex flex-col w-full gap-12 items-center"
      @submit="handleSubmit">
    <font-awesome-icon class="text-4xl text-info" icon="fa-solid fa-shield"/>
    <div class="flex flex-col gap-4 text-center">
      <p class="text-3xl font-light">OTP Verification</p>
      <p class="">Enter OTP sent to <br>
        <span class="cta">{{ result?.user?.email }}</span>
      </p>
    </div>
    <div class="flex flex-col gap-2">
      <v-otp-input
          ref="otpInput"
          v-model:value="bindModal"
          :conditionalClass="['one', 'two', 'three', 'four']"
          :num-inputs="4"
          :should-auto-focus="true"
          input-classes="otp-input"
          input-type="number"
          required
          separator="<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>"
      />

      <p @click="newOTP" class="cta text-right ">Resend OTP</p>
    </div>

    <spinner
        v-if="verificationLoading || loading || resendLoading"
        :load="verificationLoading || loading || resendLoading"/>
    <button v-else class="primary-btn">Verify</button>
  </form>
</template>

<style>
.otp-input {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
}
</style>