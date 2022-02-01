<template>
  <div>
    <b-jumbotron class="greyBgColor2" >
      <h2>This should get one Account</h2>
      <b-form-input v-model="text" required placeholder="Enter your id"  ></b-form-input>
      <br>
      <b-button class="btn_message" variant="primary" v-on:click="getAccount()">Get</b-button>
      <div class="container"  style="overflow-x:auto;">
     <br>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">fname</th>
              <th scope="col">lname</th>
              <th scope="col">usename</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody v-for="message in message" v-bind:key="message._id">
            <tr>
              <th>{{message._id}}</th>
              <th>{{message.fname}}</th>
              <th>{{message.lname}}</th>
              <th>{{message.username}}</th>
              <th>{{message.email}}</th>
            </tr>
          </tbody>
        </table>
      </div>
      {{errorMessage}}
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
      // extra line
      Api.get('/accounts/' + this.text)
        .then((response) => {
          this.message = response.data
        })
        .catch((error) => {
          this.message = error
          this.errorMessage = 'Something went wrong'
        })
    }
  }
}
</script>

<style>
</style>
