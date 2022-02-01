<template>
  <div class="containerBox">
<h2>Create your story</h2>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Title:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"

          required
          placeholder="Enter title..."
        ></b-form-input>
      </b-form-group>
    </b-form>

      <b-form-group id="input-group-2" label="Story content:" label-for="input-2">
     <b-form-textarea
      id="textarea"
      v-model="form.content"
      placeholder="Write here..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>

      </b-form-group>
       <b-form>

      <b-button type="button" variant="primary" v-on:click="postStory()"
      onclick="window.location.href = '/stories'">Submit</b-button>

    </b-form>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  props: ['msg'],
  name: 'create-story',
  data() {
    return {
      form: {
        account: Object,
        content: '',
        title: ''
      }
    }
  },
  methods: {
    postStory() {
      this.form.account = this.msg
      Api.post('/accounts/' + this.msg + '/stories', this.form)
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>
