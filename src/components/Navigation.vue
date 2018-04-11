<template>
  <div class="Navigation">
    <ul class="navBackground">
      <li><router-link v-bind:to="{ name: 'Admin' }" class="navLinks">Admin</router-link></li>
      <li><router-link v-bind:to="{ name: 'Home' }" class="navLinks">Adidas</router-link></li>
      <li><router-link v-bind:to="{ name: 'Home' }" class="navLinks">Jordan</router-link></li>
      <li><router-link v-bind:to="{ name: 'Home' }" class="navLinks">Nike</router-link></li>
      <li><router-link v-bind:to="{ name: 'Home' }" class="navLinks">Under Armour</router-link></li>
      <li><router-link v-bind:to="{ name: 'Home' }" class="navLinks">Vans</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    
  }
}
</script>

<style scoped>
li {
  display: inline-block;
  margin: 25px 80px 0px 80px;
  font-size: 16px;
  letter-spacing: 1px;
}



.navBackground{
  background-color: black;
  padding-bottom: 15px
}




</style>