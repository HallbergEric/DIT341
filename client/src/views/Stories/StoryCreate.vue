<template>
    <div id="app2">
      <div class="container">
        <div class="row">
          <div class="col-md-12"> <create-story :msg="$route.params.accountId" /></div>
        </div>
      </div>
    </div>
</template>

<script>
import CreateStory from '@/views/Stories/storiesComponents/CreateStory.vue'

export default {
  name: 'story-create',
  components: {
    CreateStory
  }

}
</script>

<style >

</style>
