<template>
<div>
      <b-jumbotron class = "greyBgColor2" >
        <h2>Get all story tails</h2>
        <br>
                <b-button class="btn_message" variant="primary" v-on:click="getMessage()" >Get</b-button>
      <div class="container"  style="overflow-x:auto;">
      <br>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Content</th>
              <th scope="col">Account ID</th>
              <th scope="col">Story ID</th>
            </tr>
          </thead>
          <tbody v-for="storytail in message.storyTail" v-bind:key="storytail._id">
            <tr>
              <th>{{ storytail._id }}</th>
              <th>{{ storytail.content }}</th>
              <th>{{ storytail.account }}</th>
              <th>{{ storytail.story }}</th>
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
  name: 'get-all-story-tails',
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    getMessage() {
      Api.get('/storytails')
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
