<template>
    <div id="app2">
      <div class="container">
        <div class = "row">
            <div class="align col-md-12"> <create-story-tail :msg="$route.params.storyId"/></div>
        </div>
      </div>
    </div>
</template>

<script>
import CreateStoryTail from '@/views/StoryTails/storyTailComponents/CreateStoryTail.vue'

export default {
  name: 'storytail-create',
  components: {
    CreateStoryTail
  }

}
</script>

<style >

</style>
