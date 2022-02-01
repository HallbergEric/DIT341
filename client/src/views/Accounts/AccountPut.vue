<template>
    <div id="app2">
      <div class="container">
        <div class="row">
          <div class="col-md-12"> <put-account :accountid="$route.params.accountId"/></div>
        </div>
      </div>
    </div>
</template>

<script>
import PutAccount from '@/views/Accounts/accountsComponents/PutAccount.vue'

export default {
  name: 'put-create',
  components: {
    PutAccount
  }

}
</script>

<style >

</style>
