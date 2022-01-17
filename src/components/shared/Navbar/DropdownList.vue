<template>
  <div>
        <ul id="dropdown1" class="dropdown-content" >
            <li v-for="l in links_route" :key="l.id">
              <router-link :to="{ name:'cabin-id', params: {id:l.id} }">{{l.name}}</router-link>
            </li>
        </ul>

        <ul id="dropdown2" class="dropdown-content" >
            <li v-for="l in links_route" :key="l.id">
              <router-link :to="{ name:'cabin-id', params: {id:l.id} }">{{l.name}}</router-link>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    data (){
      return {
        links_route: [
            {
              id: 1,
              name: 'Cabaña 1'
            },
            {
              id: 2,
              name: 'Cabaña 2'
            },
            {
              id: 3,
              name: 'Cabaña 3'
            },
            {
              id: 4,
              name: 'Cabaña 4'
            },
            {
              id: 5,
              name: 'Cabaña 5'
            },
            {
              id: 6,
              name: 'Cabaña 6'
            },
          ]
      }
    }
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