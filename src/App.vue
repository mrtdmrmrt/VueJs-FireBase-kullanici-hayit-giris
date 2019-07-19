<template>
  <div class="container">
    <div class="col-md-12"> 
      <br>
      <app-header></app-header>
      <hr>
      <router-view></router-view>
    </div>
    
  </div>
 
</template>

<script>
  import Home from"./Home"
  import Header from "./Header"
export default {
  components : {
    appHeader : Header
  }
}
</script>

<style>

</style>
