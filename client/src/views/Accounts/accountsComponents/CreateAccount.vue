<template>
  <div>
    <div id = "textpage"  class="container containerBox">
      <b-form  class="formbox">
        <h1>Create Account</h1>
        <br />
        <b-form-group label-for="input-1">
          <form>
            <input
              type="email"
              id="input-1"
              v-model="form.email"
              placeholder="eg. abc@story.net"
              class="form-control formbox"
            />
          </form>
        </b-form-group>
        <b-form-group label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.fname"
            placeholder="First Name"
            class="formbox"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.lname"
            placeholder="Last Name"
            class="formbox"
          ></b-form-input
        ></b-form-group>
        <b-form-group label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.username"
            placeholder="Choose Username"
            class="formbox"
          ></b-form-input>
        </b-form-group>
        <b-button
          style="border-radius: 2px"
          class="btn btn-primary"
          pill
          variant="button"
          onclick="window.location.href = '/accounts'"
          v-on:click="postAccount()"
          :disabled="isComplete"
        >
          Submit
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  name: 'create-account',
  data() {
    return {
      form: {
        email: '',
        fname: '',
        username: '',
        lname: ''
      }
    }
  },
  computed: {
    // This will preven users from having incomplete form
    isComplete: function () {
      if (
        this.form.username !== '' &&
        this.form.fname !== '' &&
        this.form.lname !== '' &&
        this.form.email !== '' &&
        this.form.email.includes('@') &&
        this.form.email.includes('.')
      ) {
        return false
      }
      return true
    }
  },

  methods: {
    postAccount() {
      Api.post('/accounts', this.form).catch((error) => {
        this.message = error
        this.errorMessage = 'Something went wrong'
      })
    }
  }
}
</script>
<style >
#textpage {
   border-radius: 25px;
color: rgb(168, 200, 236);
}
</style>
