<template>
  <div id="app2">
      <div class="container">
        <div class="row">
          <div class="col-md-12"> <get-all-stories/></div>
        </div>
      </div>
</div>
</template>

<script>
// import CreateStory from '@/views/Stories/storiesComponents/CreateStory.vue'
import GetAllStories from '@/views/Stories/storiesComponents/GetAllStories.vue'

export default {
  name: 'story',
  components: {
  //  CreateStory,
    GetAllStories
  }

}
</script>

<style >

</style>
