<template>
  <div>
        <ul id="dropdown1" class="dropdown-content">
            <li><router-link :to="{ name:'cabin-id', params: {id:5} }">Cabaña 1</router-link></li>
            <li><a href="#!">Cabaña 2</a></li>
            <li><a href="#!">Cabaña 3</a></li>
            <li><a href="#!">Cabaña 4</a></li>
            <li><a href="#!">Cabaña 5</a></li>
            <li><a href="#!">Cabaña 6</a></li>
        </ul>

        <ul id="dropdown2" class="dropdown-content">
            <li><a href="#!">Cabaña 1</a></li>
            <li><a href="#!">Cabaña 2</a></li>
            <li><a href="#!">Cabaña 3</a></li>
            <li><a href="#!">Cabaña 4</a></li>
            <li><a href="#!">Cabaña 5</a></li>
            <li><a href="#!">Cabaña 6</a></li>
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