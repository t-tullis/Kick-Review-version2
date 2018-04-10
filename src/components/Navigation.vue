<template>
  <div class="hello">
    <ul>
      <li><router-link v-bind:to="{ name: 'Admin' }" class="">Admin</router-link></li>
      <li><router-link v-bind:to="{ name: 'Home' }" class="">Adidas</router-link></li>
      <li><router-link v-bind:to="{ name: 'Home' }" class="">Jordan</router-link></li>
      <li><router-link v-bind:to="{ name: 'Home' }" class="">Nike</router-link></li>
      <li><router-link v-bind:to="{ name: 'Home' }" class="">Under Armour</router-link></li>
      <li><router-link v-bind:to="{ name: 'Home' }" class="">Vans</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    
  }
}
</script>

<style scoped>
li {
  display: inline-block;
  margin: 25px 80px 0px 80px;
}
a {
  color: #42b983;
}
</style>