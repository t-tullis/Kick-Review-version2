<template>
  <div id="app">
    <router-link v-bind:to="{ name: 'Home' }" class=""><img src="./assets/KickReviewLogo.png"></router-link>
    <Navigation></Navigation>
    <Clock></Clock>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Clock from '@/components/Clock'

export default {
  name: 'App',
  components: {
    Navigation, Clock
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img{
  width: 300px;
  height: 100px;
}
</style>
