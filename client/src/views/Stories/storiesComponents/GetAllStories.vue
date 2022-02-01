<template>
<div class = "container containerBox" >
      <div>
        <h2>Stories</h2>
        <div class = "row">
        <div class="align col-md-6"> </div>
        <div class="align col-md-6"> <delete-all-stories/></div>
        </div>
      <div class="container"  style="overflow-x:auto;">
        <table class="table">
          <thead>
            <tr>
              <th class="whiteColor" scope="col">Title</th>
            </tr>
          </thead>
          <tbody v-for="story in stories.story" v-bind:key="story._id">
            <tr>
              <th class="whiteColor">{{ story.title }}
                <div class = "alignr ">
                <div> <delete-story :msg="story._id" /></div>
                 <b-button variant="outline-primary" @click="$router.push('/stories/' + story._id)" style="margin :1%"> View </b-button>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
</div>
</template>

<script>
import { Api } from '@/Api'
import DeleteStory from '@/views/Stories/storiesComponents/DeleteStory.vue'
import DeleteAllStories from '@/views/Stories/storiesComponents/DeleteAllStories.vue'

export default {
  name: 'get-all-stories',
  components: {
    DeleteAllStories,
    DeleteStory
  },
  data() {
    return {
      stories: ''
    }
  },
  methods: {
    getAllStories() {
      Api.get('/stories')
        .then(response => {
          this.stories = response.data
        })
        .catch(error => {
          this.stories = error
        })
    }
  },
  mounted() {
    this.getAllStories()
  }
}
</script>

<style>

</style>
