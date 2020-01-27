<template>
<div class="is-centered">
  <div class="login-box has-box-shadow text-center">
    <img src="../assets/login/logo.png" alt="Login form logo" class="login-box-logo unselectable" 
      draggable="false">
    <form class="login-box-form">
      <div class="position-relative">
        <input type="email" id="email" class="input email m-auto has-border-radius" 
          placeholder="Email" autocomplete="off">
        <label for="email" class="floating-label">Email</label>
      </div>
      <small class="email-help-text">
        Helper text
      </small>
      <div class="password-wrapper">
        <i class="material-icons toggle-visibility cursor-pointer unselectable" 
          @click="toggleVisibility">
          {{ passwordFieldType === 'password' ? 'visibility_off': 'visibility' }}
        </i>
        <input :type="passwordFieldType" id="password" 
          class="input password m-auto has-border-radius" placeholder="Password" 
          autocomplete="off">
        <label for="password" class="floating-label">Password</label>
      </div>
      <div class="mt-30">
        <div class="checkbox unselectable">
          <input type="checkbox" id="remember-me" class="checkbox-input cursor-pointer">
          <label for="remember-me" class="checkbox-label cursor-pointer">
            Remember me
          </label>
        </div>
        <a href="#" class="forgot-password" draggable="false">
          Forgot password?
        </a>
      </div>
      <button class="btn btn-blue m-auto has-border-radius cursor-pointer" @click="login">
        Login
      </button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      passwordFieldType: 'password'
    }
  },
  methods: {
    toggleVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' 
        ? 'text' 
        : 'password';
    },
    login() {
      this.$router.push('/home');
    }
  }
}
</script>

<style lang="scss" scoped>  
  @import '../assets/scss/login'; 
</style>
