<template>
  <div>
      <div class="container containerBox">
      <b-form class="formbox">
        <h1 style="color: white">Write  Story Tail</h1>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Content:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.content"
          placeholder="Write your story tail here"
        ></b-form-input>
      </b-form-group>
    </b-form>
      <b-form-group id="input-group-2" label="Account ID" label-for="input-2">
<b-form-select
      name = "acc" id = "acc" class="browser-default custom-select"
      v-model="form.account"
    >
      <template v-slot:first>
        <b-form-select-option v-for="account in accounts.accounts" :key="account._id" :value="account._id">
                          {{account.username}}</b-form-select-option>
      </template>
    </b-form-select>
      </b-form-group>
       <b-form>
               <b-button type="button" variant="primary" v-on:click="postStoryTail()"
      onclick="window.location.href = '/stories'">Submit</b-button>
        </b-form>
      </b-form>
      </div>
  </div>
</template>

<script>
import { Api } from '@/Api'
export default {
  props: ['msg'],
  name: 'create-story-tail',
  data() {
    return {
      form: {
        content: '',
        account: '',
        story: Object
      },
      accounts: {
        fname: '',
        lanme: '',
        username: '',
        email: ''
      },
      selectedAccount: {
        fname: 'f',
        lanme: 's',
        username: 'a',
        email: 'g'
      }
    }
  },
  methods: {
    getOption() {
    },
    setAccount(selectedAccount) {
      var selectElement = document.querySelector('acc')
      console.log(selectElement)
      var output = selectElement.value
      document.querySelector('.output').textContent = output
      console.log(output)
    },
    getAllAccounts() {
      Api.get('/accounts')
        .then((response) => {
          this.accounts = response.data
        })
        .catch((error) => {
          this.accounts = error
          this.errorMessage = 'Something went wrong'
        })
    },
    postStoryTail() {
      this.form.story = this.msg
      console.log(this.form)
      Api.post('/storytails', this.form)
        .then((response) => {
          this.message = response.data
        })
        .catch(error => {
          this.message = error
        })
    },
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  },
  mounted() {
    this.getAllAccounts()
  }
}
</script>
