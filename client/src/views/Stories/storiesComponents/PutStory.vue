<template>
<div>

      <b-jumbotron class = "greyBgColor2" header="This should Replace(PUT) one Account">
          <b-form-input v-model="text" placeholder="Enter your id to replace"></b-form-input>
      <p>Message from the server:<br/>
      {{ message }}</p>
    </b-jumbotron>

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
          v-model="form.name"
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

      <b-button type="button" variant="primary" v-on:click="putAccount()">Submittt</b-button>
    </b-form>

</div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'put-account',
  data() {
    return {
      text: '',
      message: 'none',
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
      // eslint-disable-next-line no-template-curly-in-string
      Api.put('/accounts/' + this.text, this.form)
        .then(response => {
          this.message = response.data
        })
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

<style>

</style>
