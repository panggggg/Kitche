<template>
  <div id="app">
    <navbar/>
    <home/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Home from './components/pages/HomePage.vue'
import Footer from './components/footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Footer
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
  background-color: #8A736C;
}
</style>
