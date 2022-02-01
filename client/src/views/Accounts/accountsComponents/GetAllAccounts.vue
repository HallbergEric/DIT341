<template>
<div class="container containerBox">
        <h1 class="whiteColor">Accounts</h1>
        <div class = "row">
        <div class="align col-md-6"> <router-link class = "greyBgColor whiteColor btn btn-primary"  :to="'/postaccounts/'" >Create new Account</router-link></div>
        <div class="align col-md-6"> <delete-all-accounts/></div>
        </div>
        <div class="container" style="overflow-x: auto">
          <br />
          <table class=" table">
            <thead>
              <tr>
                <th class="whiteColor" scope="col">Users</th>
              </tr>
            </thead>
            <tbody v-for="account in message.accounts" v-bind:key="account._id">
              <tr>
                <th class="whiteColor">{{ account.username }}
                  <div class ="alignr">
                    <div> <delete-account :msg="account._id" /></div>
                    <router-link class = "btn btn-outline-info btn-sm buttonStyle"  :to="'/accounts/' + account._id" >Details</router-link>
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
import DeleteAccount from '@/views/Accounts/accountsComponents/DeleteAccount.vue'
import DeleteAllAccounts from '@/views/Accounts/accountsComponents/DeleteAllAccounts.vue'

export default {
  name: 'get-all-accounts',
  components: {
    DeleteAccount,
    DeleteAllAccounts
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    getMessage() {
      Api.get('/accounts')
        .then((response) => {
          this.message = response.data
        })
        .catch((error) => {
          this.message = error
          this.errorMessage = 'Something went wrong'
        })
    }
  },
  mounted() {
    this.getMessage()
  }
}
</script>

<style>
</style>
