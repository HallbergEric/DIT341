<template>
  <div  id="app2">
      <div class="container">
        <div class="row">
          <div class="col-md-6">  <create-story-tail/></div>
          <div class="col-md-6"> <get-all-story-tails/></div>
        </div>
      </div>
  </div>
</template>

<script>
import CreateStoryTail from '@/views/StoryTails/storyTailComponents/CreateStoryTail.vue'
import GetAllStoryTails from '@/views/StoryTails/storyTailComponents/GetAllStoryTails.vue'

export default {
  name: 'storytail',
  components: {
    CreateStoryTail,
    GetAllStoryTails
  }

}
</script>

<style >

</style>
