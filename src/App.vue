<template>
  <div id="app">
    <Navbar />
    <Principal/>
    <router-view/>
  </div>
</template>

<script>
import Navbar  from './views/shared/Navbar/Navbar.vue'
import Principal  from './views/principal/Principal.vue'

export default({
  name: 'App',
  components: {Navbar, Principal}
})
</script>
