<template>
<div>
        <p>{{ message }}</p>
      <button class="btn btn-outline-danger btn-sm buttonStyle" onclick="javascript:window.location.reload()" v-on:click="deleteAccount()" >Delete</button>
</div>
</template>

<script>
import { Api } from '@/Api'
export default {
  props: ['msg'],
  name: 'delete-account',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    deleteAccount() {
      Api.delete('/accounts/' + this.msg)
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
