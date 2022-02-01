<template>
<div>
    <p>{{ message }}</p>
    <b-button class = "btn_message " variant="danger" onclick="javascript:window.location.reload()" v-on:click="deleteAccounts()">Delete All Accounts</b-button>
</div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'delete-all-accounts',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    deleteAccounts() {
      Api.delete('/accounts')
        .then(response => {
          this.message = response.data
        })
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

<style>

</style>
