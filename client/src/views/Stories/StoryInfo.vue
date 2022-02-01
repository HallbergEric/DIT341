<template>
    <div id="app2">
<div class = " container containerBox">
      <br>
      <div>
        <h2 v-for="story in story" v-bind:key="story._id">{{story.title}}    </h2>
         <br>
        <div class = "row">
                  <div class=" col-md-12 "> <router-link class = "greyBgColor whiteColor btn btn-primary" :to="'/stories/' + $route.params.storyId + '/storytails'" >Add Storytail</router-link></div>
        </div>

                         <b-button variant="outline-warning" @click="$router.push('/patchstories/' + $route.params.storyId)" style="margin :1%"> Edit Story </b-button>
        <div class="container" style="overflow-x: auto">
          <br />
          <table class="align table">
            <tbody v-for="story in story" v-bind:key="story._id">
              <tr>
                <th class="whiteColor">{{ story.content }}</th>
              </tr>
              <br>
            <h2>Story Tails</h2>
            </tbody>
          </table>
          <table class="align table">
            <tbody v-for="storyTail in storyTails" v-bind:key="storyTail._id">
              <tr>
                <th class = "whiteColor">{{ storyTail.content }}</th>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'storyinfo',
  data() {
    return {
      story: '',
      storyTails: ''
    }
  },
  methods: {
    getStory() {
      var temp = this.$route.params.storyId
      Api.get('/stories/' + temp)
        .then(response => {
          this.story = response.data
        })
        .catch(error => {
          this.story = error
        })
    },
    getStoryTails() {
      var temp = this.$route.params.storyId
      Api.get('/stories/' + temp + '/storytails')
        .then(response => {
          this.storyTails = response.data
        })
        .catch(error => {
          this.storyTails = error
        })
    }
  },
  mounted() {
    this.getStory()
    this.getStoryTails()
  }
}
</script>

<style>

</style>
