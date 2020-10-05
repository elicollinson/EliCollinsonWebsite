<template>
<!--
  Colors:
  Alabaster: #F1F0EA
-->
  <div id="app">
    <nav id="header" class="navbar navbar-expand-lg navbar-light navbar-custom">
  <router-link class="navbar-brand" v-bind:to="{name: 'home'}">Eli Collinson</router-link>
  <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse navbar-custom" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link navbar-custom" v-bind:to="{name: 'home'}">Home <span class="sr-only">(current)</span></router-link>
      <router-link class="nav-item nav-link navbar-custom" v-bind:to="{name: 'my-story'}">My Story</router-link>
      <router-link class="nav-item nav-link navbar-custom" v-bind:to="{name: 'gallery'}">Gallery</router-link>
    </div>
  </div>
</nav>
    <router-view />
    <div id="social-footer">
      <a href="https://www.linkedin.com/in/elicollinson/" class="social-link"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/elicollinson/" class="social-link"><i class="fab fa-github"></i></a>
      <a href="https://twitter.com/EliCollinson" class="social-link"><i class="fab fa-twitter"></i></a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  watch: {
    '$route' (to, from) {
      document.title = to.meta.title || 'Your Website'
    }
  }
}
</script>

<style>
* {
  background-color: #fff;
}
/*
.navbar-nav {
  background-color: #f8f9fa;
}
.navitem {
  background-color: #f8f9fa;
}
*/
a {
  color: #8B0000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  /*margin-top: 60px;*/
  display: flex;
  flex-direction: column;
}
#social-footer {
  margin-top: 3rem;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  /*margin-right: 3rem;
  margin-left: 3rem;*/
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.navbar-custom {
  background-color: #000;
  }
  .navbar-light .navbar-brand {
    color: #a7a7a7;
  font-family: brandon-grotesque, sans-serif;
  font-weight: 500;
  font-style: normal;
}
.navbar-light .navbar-nav .nav-link {
    color: #a7a7a7;
    font-family: brandon-grotesque, sans-serif;
    font-weight: 500;
    font-style: normal;
}
.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
    color: #fff;
}
.social-link {
  font-size: 2rem;
}
.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #fff;
}
</style>
