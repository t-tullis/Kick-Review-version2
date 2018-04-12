<template>
  <div class="Navigation">
      <ul class="links">
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
  font-size: 20px;
  letter-spacing: 1px;
}

.navLinks{
  color: black;
}

.nav :hover{
  color: #C62D28;
}


</style>