<template>
  <div>
    <navbar/>
    <div class="app">
    <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Footer from './components/footer/Footer.vue'
// import HomePage from './components/pages/HomePage.vue'
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    // HomePage
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav{
    background-color:  #8A736C;
}

.header{
    font-family: 'Dancing Script';
    padding-left: 50px;
}

.nav-item{
    font-family: 'Athiti';
    font-size: 20px;
}

.app {
   background-color: #f8ecdf;
   font-weight: bold;
  color: #2c3e50;
  align-items: center;
}
</style>
