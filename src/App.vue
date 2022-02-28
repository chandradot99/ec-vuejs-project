<template>
  <div id="app">
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
    color: #2c3e50;
    width: 100vw;
    height: 100vh;
  }

  body {
    margin: 0;
    font-family: "rooney-sans", Avenir-Book, Calibri, sans-serif;
  }


</style>
