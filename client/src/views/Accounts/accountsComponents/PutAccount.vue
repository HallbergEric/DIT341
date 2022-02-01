<template>
<div>

  <div class="container containerBox">
      <b-form class="formbox">
        <h1 style="color: white">Recreate Your Acoount (PUT)</h1>
<b-form v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-5"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-5"
          v-model="form.email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
    </b-form>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-6"
          v-model="form.fname"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Last Name:" label-for="input-4">
        <b-form-input
          id="input-7"
          v-model="form.lname"
          required
          placeholder="Enter your last Name"
        ></b-form-input>
      </b-form-group>
       <b-form v-if="show">

      <b-form-group
        id="input-group-3"
        label="Username:"
      >
        <b-form-input
          id="input-8"
          v-model="form.username"
          required
          placeholder="choose a username"
        ></b-form-input>
      </b-form-group>
   <b-button
          style="border-radius: 2px"
          class="btn btn-primary"
          pill
          variant="button"
          onclick="window.location.href = '/accounts'"
          v-on:click="putAccount()"
          :disabled="isComplete"
        >
          Submit
        </b-button>
    </b-form>
      </b-form>
  </div>
</div>
</template>

<script>
import { Api } from '@/Api'
export default {
  props: ['accountid'],
  name: 'put-account',
  data() {
    return {
      message: '',
      form: {
        email: '',
        fname: '',
        username: '',
        lname: ''
      },
      show: true
    }
  },
  methods: {
    putAccount() {
      this.form.account = this.accountid
      Api.put('/accounts/' + this.form.account, this.form)
        .then(response => {
          this.message = response.data
        })
        .catch(error => {
          this.message = error
        })
    }
  },
  computed: {
    // This will preven users from having incomplete form
    isComplete: function () {
      if (
        this.form.username !== '' &&
        this.form.fname !== '' &&
        this.form.lname !== '' &&
        this.form.email !== '' &&
        this.form.email.includes('@') &&
        this.form.email.includes('.')
      ) {
        return false
      }
      return true
    }
  }
}
</script>

<style>

</style>
