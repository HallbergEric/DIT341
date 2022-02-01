<template>
<div>
                <b-button class="btn_message buttonStyle" variant="danger" onclick="javascript:window.location.reload()" v-on:click="deleteStory()" >Delete</b-button>
</div>
</template>

<script>
import { Api } from '@/Api'
export default {
  props: ['msg'],
  name: 'delete-story',
  data() {
    return {
      text: '',
      message: ''
    }
  },
  methods: {
    deleteStory() {
      Api.delete('/stories/' + this.msg)
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
