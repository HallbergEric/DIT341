<template>
  <div id="app2">
       <div class="container">
        <div class="row">
          <div class="col-md-6">  <get-all-reviews/></div>
          <div class="col-md-6">  <create-review/></div>
        </div>
      </div>
</div>
</template>

<script>
import GetAllReviews from '@/views/Reviews/reviewComponents/GetAllReviews.vue'
import CreateReview from '@/views/Reviews/reviewComponents/CreateReview.vue'

export default {
  name: 'review',
  components: {
    GetAllReviews,
    CreateReview
  }

}
</script>

<style >

</style>
