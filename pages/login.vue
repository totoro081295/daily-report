<template>
  <div>
    <div class="text-center">
      <h1>login</h1>
    </div>
    <div class="w-4/5 items-center mx-auto border">
      <div class="w-4/5 items-center mx-auto">
        <input
          v-model="mailAddress"
          type="email"
          class="w-full border mb-1"
        >
        <input
          v-model="password"
          type="password"
          class="border w-full"
        >
      </div>
    </div>
    <div class="w-4/5 items-center mx-auto mt-4">
      <div
        class="mx-auto text-center w-1/6 border"
        @click="submit"
      >
        aaa
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class login extends Vue {
  mailAddress: string = ''
  password: string = ''

  submit() {
    console.log('submit')
    const loginForm: object = {
      email: this.mailAddress,
      password: this.password,
    }
    this.$axios.post('http://localhost:1323/auth/login',JSON.stringify(loginForm), {
        headers: {
          'Content-Type': 'application/json'
        },
        // crossDomain: true
      }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
