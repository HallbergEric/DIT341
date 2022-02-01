<template>
  <div class="container containerBox">
        <div class="container" style="overflow-x: auto">
          <br />
          <table class="table">
            <thead>
              <tr>
                <th class="whiteColor" scope="col">First name</th>
                <th class="whiteColor" scope="col">Last name</th>
                <th class="whiteColor" scope="col">Usename</th>
                <th class="whiteColor" scope="col">E-mail</th>
              </tr>
            </thead>
            <tbody v-for="account in accounts" v-bind:key="account._id">
              <tr>
                <th class="whiteColor">{{ account.fname }}</th>
                <th class="whiteColor">{{ account.lname }}</th>
                <th class="whiteColor">{{ account.username }}</th>
                <th class="whiteColor">{{ account.email }}</th>
              </tr>
            </tbody>
          </table>
 <b-button variant="outline-primary" @click="$router.push('/putaccounts/' + $route.params.accountId)">Eidt Profile</b-button>
         </div>
        <br />
<b-button class ="buttonStyle" style="margin : 3%" variant="primary" @click="$router.push('/accounts/' + $route.params.accountId + '/stories')">Create New Story</b-button>

        <h2 class="whiteColor">These are your stories :</h2>
        <br>
        <br>
        <div class="col-md-6">
        </div>
        <div class="col-md-6"></div>
        <table class="alignl table">
          <thead>
            <tr>
              <th class="whiteColor" scope="col">Title</th>
            </tr>
          </thead>
          <tbody v-for="story in stories" v-bind:key="story._id">
            <tr>
              <th class="whiteColor">
                {{ story.title }}
                <div class="alignr">
    <b-button class ="btn-sm buttonStyle" variant="primary" @click="$router.push('/accounts/' +
                      $route.params.accountId +
                      '/stories/' +
                      story._id)">View Story</b-button>

                  <div class="align"><delete-story :msg="story._id" /></div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
</template>

<script>
// import GetAccount from '@/views/Accounts/accountsComponents/GetAccount.vue'
import { Api } from '@/Api'
import DeleteStory from '@/views/Stories/storiesComponents/DeleteStory.vue'

export default {
  name: 'accountinfo',
  components: {
    DeleteStory
  },
  data() {
    return {
      accounts: '',
      stories: ''
    }
  },
  methods: {
    getAccounts() {
      var temp = this.$route.params.accountId
      Api.get('/accounts/' + temp)
        .then((response) => {
          this.accounts = response.data
        })
        .catch((error) => {
          this.accounts = error
        })
    },
    getStories() {
      var temp = this.$route.params.accountId
      Api.get('/accounts/' + temp + '/stories')
        .then((response) => {
          this.stories = response.data
        })
        .catch((error) => {
          this.stories = error
        })
    }
  },
  mounted() {
    this.getAccounts()
    this.getStories()
  }
}
</script>

<style >
</style>
