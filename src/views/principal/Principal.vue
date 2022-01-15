<template>
  <div>
      <Navbar/>
      <Slider />
      <br>
      <div class="container">
          <ul class="collapsible">
                <li>
                    <div class="collapsible-header">
                        <h4>Servicios</h4>
                    </div>
                    <div class="collapsible-body">
                        <p class="text-collapsible">
                            <i class="small material-icons">arrow_forward</i>
                            Ofrecemos cabañas completamente equipadas para brindar un buen descanso a nuestros clientes.
                        </p>
                    </div>
                    <div class="collapsible-body">
                        <p class="text-collapsible">
                            <i class="small material-icons">arrow_forward</i>
                            Disposición de cabañas desde 4 a 10 personas, incluido aparcamiento gratuito.
                        </p>
                    </div>
                    <div class="collapsible-body">
                        <p class="text-collapsible">
                            <i class="small material-icons">arrow_forward</i>
                            Punto de compra de víveres esenciales.
                        </p>
                    </div>
                </li>
          </ul>
      </div>
      <br>
      <Footer/>
  </div>
</template>

<script>
import Navbar  from '../../components/shared/Navbar/Navbar.vue'
import Slider from '../../components/principal/Slider.vue'
import Footer  from '../../components/shared/Footer/Footer.vue'

export default {
    components: {
        Slider,Navbar, Footer
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
        max-width: 800px;
    }
    
    .collapsible-body{
        padding: 10px 30px;
        display: block;
    }

    .small{
        font-size: 1.2rem;
        color: rgba(202, 73, 73, 0.829);
    }

    .text-collapsible{
        font-family: 'Luxurious Roman';
        font-size: 16px;
    }
</style>>
