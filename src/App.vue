<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header></Header>
    <div class="container">
      <home></home>
    </div>
  </div>
</template>

<script>
import Header from './components/shared/header.vue'
import Home from './components/home'

export default {
  name: 'App',
  components: {
    Home,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
