<template>
  <div id="app">
    <Principal/>
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
