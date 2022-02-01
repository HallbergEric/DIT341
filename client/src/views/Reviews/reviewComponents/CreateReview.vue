<template>
  <div class="containerBox">
        <h2>Write a review for a story</h2>
    <b-form>
      <b-form-group id="input-group-4" label="Review Title:" label-for="input-2">
     <b-form-input
      id="textarea"
      v-model="form.title"
      placeholder="Enter Title..."
    ></b-form-input>

      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Story ID:"
        label-for="input-1"
      >
        <b-form-select
      name = "story" id = "story" class="browser-default custom-select"
      v-model="form.story"
    >
      <template v-slot:first>
        <b-form-select-option v-for="story in stories.story" :key="story._id" :value="story._id">
                          {{story.title}}</b-form-select-option>
      </template>
    </b-form-select>
      </b-form-group>

    <b-form-group
        id="input-group-2"
        label="Account ID:"
        label-for="input-2"
      >
        <b-form-select
      name = "acc" id = "acc" class="browser-default custom-select"
      v-model="form.account"
    >
      <template v-slot:first>
        <b-form-select-option v-for="account in accounts.accounts" :key="account._id" :value="account._id">
                          {{account.username}}</b-form-select-option>
      </template>
    </b-form-select>
      </b-form-group>
 </b-form>

      <b-form-group id="input-group-2" label="Review content:" label-for="input-2">
     <b-form-textarea
      id="textarea"
      v-model="form.content"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>

      </b-form-group>

       <b-form>

      <button class="btn btn-primary" type="submit" variant="primary" v-on:click="postReview()">Submit</button>
    </b-form>

  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'create-review',
  data() {
    return {
      form: {
        story: '',
        content: '',
        account: '',
        title: ''
      },
      accounts: {
        fname: '',
        lanme: '',
        username: '',
        email: ''
      },
      stories: {
        content: '',
        title: '',
        account: ''
      }
    }
  },
  methods: {
    getAllAccounts() {
      Api.get('/accounts')
        .then((response) => {
          this.accounts = response.data
        })
        .catch((error) => {
          this.accounts = error
          this.errorMessage = 'Something went wrong'
        })
    },
    getAllStories() {
      Api.get('/stories')
        .then((response) => {
          this.stories = response.data
        })
        .catch((error) => {
          this.stories = error
          this.errorMessage = 'Something went wrong'
        })
    },
    postReview() {
      console.log(this.form)
      Api.post('/reviews', this.form)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.message = error
        })
    }
  },
  mounted() {
    this.getAllAccounts()
    this.getAllStories()
  }
}
</script>
