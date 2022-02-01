<template>
<div>
    <b-button class="buttonStyle" onclick="javascript:window.location.reload()" variant="danger" v-on:click="postAccount()">Delete all Stories </b-button>
</div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'delete-all-stories',
  methods: {
    postAccount() {
      Api.delete('/stories')
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

<style>

</style>
