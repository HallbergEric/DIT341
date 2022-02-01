<template>
    <div id="app2">
      <br/>
      <br/>
      <div class="container greyBgColor2">
        <div class="row">
          <div class="col-md-12">
            <table class=" table">
            <thead v-for="review in review" v-bind:key="review._id">
              <tr>
                <th>Title : {{review.title}}</th>
              </tr>
            </thead>
            <tbody v-for="review in review" v-bind:key="review._id">
              <tr>
                <th>
                  <div>{{ review.content }} </div>
                  </th>
              </tr>
            </tbody>
          </table>
          {{account}}
            <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'reviewinfo',
  data() {
    return {
      review: '',
      story: '',
      account: '',
      title: ''

    }
  },
  methods: {
    getReview() {
      Api.get('/reviews/' + this.$route.params.reviewId)
        .then((response) => {
          this.review = response.data
        })
        .catch((error) => {
          this.review = error
        })
    }
  },
  mounted() {
    this.getReview()
  }
}
</script>

<style >
</style>
