<template>
  <div>
        <ul id="dropdown1" class="dropdown-content">
            <li><router-link :to="{ name:'cabin-id', params: {id:1} }">Cabaña 1</router-link></li>
            <li><router-link :to="{ name:'cabin-id', params: {id:2} }">Cabaña 2</router-link></li>
            <li><router-link :to="{ name:'cabin-id', params: {id:3} }">Cabaña 3</router-link></li>
            <li><router-link :to="{ name:'cabin-id', params: {id:4} }">Cabaña 4</router-link></li>
            <li><router-link :to="{ name:'cabin-id', params: {id:5} }">Cabaña 5</router-link></li>
            <li><router-link :to="{ name:'cabin-id', params: {id:6} }">Cabaña 6</router-link></li>
        </ul>

        <ul id="dropdown2" class="dropdown-content">
            <li><router-link :to="{ name:'cabin-id', params: {id:1} }">Cabaña 1</router-link></li>
            <li><router-link :to="{ name:'cabin-id', params: {id:2} }">Cabaña 2</router-link></li>
            <li><router-link :to="{ name:'cabin-id', params: {id:3} }">Cabaña 3</router-link></li>
            <li><router-link :to="{ name:'cabin-id', params: {id:4} }">Cabaña 4</router-link></li>
            <li><router-link :to="{ name:'cabin-id', params: {id:5} }">Cabaña 5</router-link></li>
            <li><router-link :to="{ name:'cabin-id', params: {id:6} }">Cabaña 6</router-link></li>
        </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .dropdown-content li{
    background-color: rgb(248, 248, 248);
  }

  .dropdown-content a{
    color: black;
    font-family: 'Luxurious Roman';
  }

  .dropdown-content li:hover{
    background-color: rgba(202, 73, 73, 0.829);
  }
</style>