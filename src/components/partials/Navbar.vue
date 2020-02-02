<template>
  <div class="main-navbar d-flex unselectable align-center">
    <div class="d-flex space-between align-center navbar-brand">
      <div class="navbar-brand-image-wrapper">
        <img
          :src="require('@/assets/navbar/logo.svg')"
          alt="Home logo"
          class="navbar-brand-image m-auto">
      </div>
      <a class="navbar-brand-title">
        Todobox
      </a>
    </div>
    <div class="user-box d-flex align-center">
      <span class="user-box-username cursor-pointer">
        Username
      </span>
      <div class="user-box-avatar position-relative" @click="toggleLogoutBox">
        <div class="img-wrapper" :class="{ 'img-container-focus': showLogoutBox }">
          <img
            :src="require('@/assets/navbar/avatar.png')"
            class="d-flex img"
            :class="{ 'img-focus': showLogoutBox }"
            alt="Avatar logo"
            draggable="false">
        </div>
        <div v-if="showLogoutBox"
          class="logout-box d-flex align-center has-border-radius"
          @click="logout">
          <div class="logout-box-wrapper d-flex space-between align-center">
            <i class="material-icons logout-box-icon">
              exit_to_app
            </i>
            <span class="logout-box-text">
              Log out
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        showLogoutBox: false
      }
    },
    methods: {
      toggleLogoutBox() {
        this.showLogoutBox = !this.showLogoutBox;
      },
      logout() {
        this.$router.push({
          name: 'Login'
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/_navbar';
</style>
