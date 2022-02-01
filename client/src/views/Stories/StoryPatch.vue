<template>
    <div id="app2">
      <div class="container">
        <div class="row">
          <div class="col-md-12"> <patch-story :storyid="$route.params.storyId"/></div>
        </div>
      </div>
    </div>
</template>

<script>
import PatchStory from '@/views/Stories/storiesComponents/PatchStory.vue'
export default {
  name: 'edit-story',
  components: {
    PatchStory
  }

}
</script>

<style >

</style>
