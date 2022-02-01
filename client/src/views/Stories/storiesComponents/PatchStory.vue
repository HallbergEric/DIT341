<template>
<div>

<div class="container containerBox">
      <b-form class="formbox">
        <h1 style="color: white">Edit(Patch) Your Story</h1>

<b-form v-if="show">
    </b-form>

      <b-form-group id="input-group-2" label="Title" label-for="input-4">
        <b-form-input
          id="input-7"
          v-model="form.title"
          placeholder="Title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Story" label-for="input-4">
        <b-form-input
          id="input-7"
          v-model="form.content"
          placeholder="Story"
        ></b-form-input>
      </b-form-group>

       <b-button
          style="border-radius: 2px"
          class="btn btn-primary"
          pill
          variant="button"
          onclick="window.location.href = '/stories'"
          v-on:click="patchStory()"
        >
          Submit
        </b-button>
       </b-form>

</div>
</div>
</template>

<script>
import { Api } from '@/Api'
export default {
  props: ['storyid'],
  name: 'patch-story',
  data() {
    return {
      form: {
        content: '',
        title: ''
      }
    }
  },
  methods: {
    patchStory() {
      console.log(this.form.title)
      console.log(this.form.content)

      Api.patch('/stories/' + this.storyid, this.form)
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
