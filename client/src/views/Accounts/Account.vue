<template>
    <div id="app2">
      <div class="container">
        <div class="row">
          <div class="col-md-12"> <get-all-accounts/></div>
        </div>
      </div>
    </div>
</template>

<script>
// import CreateAccount from '@/views/Accounts/accountsComponents/CreateAccount.vue'
// import DeleteAllAccounts from '@/views/Accounts/accountsComponents/DeleteAllAccounts.vue'
import GetAllAccounts from '@/views/Accounts/accountsComponents/GetAllAccounts.vue'
// import GetAccount from '@/views/Accounts/accountsComponents/GetAccount.vue'
// import DeleteAccount from '@/views/Accounts/accountsComponents/DeleteAccount.vue'
// import PutAccount from '@/views/Accounts/accountsComponents/PutAccount.vue'
// import PatchAccount from '@/views/Accounts/accountsComponents/PatchAccount.vue'

export default {
  name: 'accounts',
  components: {
    // CreateAccount,
    // DeleteAllAccounts,
    // DeleteAccount,
    GetAllAccounts
    // ,
    // GetAccount,
    // PutAccount,
    // PatchAccount
  }

}
</script>

<style >

</style>
