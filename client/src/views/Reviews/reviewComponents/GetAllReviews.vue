
<template>
  <div>
        <div>
        </div>
        <div class="container containerBox" style="overflow-x: auto">
          <br />
          <table class=" table">
            <thead>
              <tr>
                <th class="whiteColor"><h2>Reviews</h2></th>
              </tr>
            </thead>
            <tbody v-for="review in reviews.reviews" v-bind:key="review._id">
              <tr>
                <th>
                  <div  class = "alignl whiteColor">{{ review.title }} </div>
                  <div  class = "alignr"> <b-button class ="buttonStyle" style="margin : 3%" variant="info" @click="$router.push('/reviews/' + review._id)">View Reviews</b-button>

 </div>

                  </th>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'get-all-reviews',
  data() {
    return {
      reviews: ''
    }
  },
  methods: {
    getReviews() {
      Api.get('/reviews')
        .then(response => {
          this.reviews = response.data
        })
        .catch(error => {
          this.errorMessage = 'Something went wrong'
          this.reviews = error
        })
    }
  },
  mounted() {
    this.getReviews()
  }
}
</script>

<style>

</style>
