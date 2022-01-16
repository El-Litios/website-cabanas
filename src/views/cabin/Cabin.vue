<template>
  <div>
      <Navbar />
      <h1>{{id}}</h1>
      <Footer />
  </div>
</template>

<script>
import Navbar  from '../../components/shared/Navbar/Navbar.vue'
import Footer  from '../../components/shared/Footer/Footer.vue'

export default {
    data () {
        return {
              
        }
    },
    props: {
        id: {
            Type: Number,
            required: true
        }
    },
    components: {
        Navbar, Footer
    },

    
}
</script>

<style>

</style>