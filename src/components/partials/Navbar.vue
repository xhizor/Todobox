<template>
  <div class="main-navbar d-flex unselectable">
    <div class="d-flex space-between align-center navbar-brand">
      <img src="../../assets/navbar/logo.svg" alt="Home logo" class="navbar-brand-image">
      <a class="navbar-brand-title">
        Todobox
      </a>
    </div>
    <div class="user-box d-flex">
      <span class="user-box-username">
        Username
      </span>
      <a href="#" class="user-box-avatar">
        <img src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" 
          class="d-flex img" alt="Avatar logo" draggable="false">
      </a>
    </div>
  </div>  
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style lang="scss" scoped>  
  @import '../../assets/scss/_navbar'; 
</style>
