<template>
  <div>
      <Slider />
      <br>
      <div class="container">
          <ul class="collapsible popout">
                <li>
                    <div class="collapsible-header">
                        <h4>Servicios</h4>
                    </div>
                    <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                    <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                    <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Slider from '../../components/principal/Slider.vue'

export default {
    components: {
        Slider
    },

    mounted(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, {

            });
        });
    }
}
</script>

<style scoped>
    .collapsible-header{
        justify-content: center;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .collapsible-header h4{
        font-family: 'Luxurious Roman';
    }

    .container {  
        max-width: 1000px;
    }
    
    
</style>>
