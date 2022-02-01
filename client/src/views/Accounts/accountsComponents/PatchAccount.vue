<template>
<div>

      <b-jumbotron class = "greyBgColor2">
        <h2>This should Replace(PATCH) one Account</h2>
          <b-form-input v-model="text" placeholder="Enter your id to replace"></b-form-input>
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
          placeholder="Enter your Fistname"
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

      <b-button type="button" variant="primary" v-on:click="patchAccount()">Submit</b-button>
    </b-form>
      {{errorMessage}}
  </b-jumbotron>
</div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'patch-account',
  data() {
    return {
      text: '',
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
    ifEmplty() {
      if (this.form.email === '') {
        delete this.form.email
      }
      if (this.form.fname === '') {
        delete this.form.fname
      }
      if (this.form.lname === '') {
        delete this.form.lname
      }
      if (this.form.username === '') {
        delete this.form.username
      }
    },
    patchAccount() {
      this.ifEmplty()
      Api.patch('/accounts/' + this.text, this.form)
        .then(response => {
          this.message = response.data
        })
        .catch(error => {
          this.message = error
          this.errorMessage = 'Something went wrong'
        })
    }
  }
}
</script>

<style>

</style>
