<template>
    <div id="app2">
      <div class="container">
        <div class="row">
          <div class="col-md-12"> <create-account/></div>
        </div>
      </div>
    </div>
</template>

<script>
import CreateAccount from '@/views/Accounts/accountsComponents/CreateAccount.vue'

export default {
  name: 'accounts-create',
  components: {
    CreateAccount
  }

}
</script>

<style >

</style>
