<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  #app {
    background-color:#f1f1f1;
    font-family: 'Roboto';
    width: 100%;
    height: 100%;
  }
</style>
