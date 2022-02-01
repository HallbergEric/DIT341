<template>
<div>

      <b-jumbotron class = "greyBgColor2" >
            <h2>Get all the stories for one account</h2>
          <b-form-input v-model="accountId" placeholder="Enter your account id"></b-form-input>
<br>
<b-button
        class="btn_message"
        variant="primary"
        type="submit"
        v-on:click="getStoriesByAccount()"
        >Submit</b-button
      >
      <div class="container"  style="overflow-x:auto;">
         <br>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Story ID</th>
              <th scope="col">Content</th>
              <th scope="col">Account ID</th>
            </tr>
          </thead>
          <tbody v-for="story in message" v-bind:key="story._id">
            <tr>
              <th>{{ story._id }}</th>
              <th>{{ story.content }}</th>
              <th>{{ story.account }}</th>
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
  name: 'get-stories-by-account',
  data() {
    return {
      accountId: '',
      message: 'none'
    }
  },
  methods: {
    getStoriesByAccount() {
      Api.get('/accounts/' + this.accountId + '/stories/')
        .then(response => {
          this.message = response.data
        })
        .catch(error => {
          this.errorMessage = 'Something went wrong'
          this.message = error
        })
    }
  }
}
</script>

<style>

</style>
