<template>
<div>

      <b-jumbotron class = "greyBgColor2"  header="This should get one Account">
          <b-form-input v-model="text" placeholder="Enter your id"></b-form-input>

                <b-button class="btn_message" button :disabled="!text"
variant="primary" v-on:click="getAccount()" >Get Account</b-button>
      <p>Message from the server:<br/>
      {{ message }}</p>
    </b-jumbotron>

</div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'get-account',
  data() {
    return {
      text: '',
      message: ''
    }
  },
  methods: {
    getAccount() {
      Api.get('/accounts/' + this.text)
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
