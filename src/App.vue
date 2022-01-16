<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import Principal  from './views/principal/Principal.vue'

export default({
  name: 'App',
  components: { Principal}
})
</script>
