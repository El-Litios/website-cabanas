<template>
  <div>
      <Navbar />
      <br>
      <div class="row container container-info">
            <div class="col l12 s12 m12">
                <div class="card-panel ">
                    <h4>Cabaña 1</h4>
                    <hr>
                    <div class="col l6 m12 s12">
                        <div class="col l12 m12 s12 m12 s12">
                            <h5><b>Personas:</b> 4 personas</h5>
                            <h5><b>Camas:</b> 2 camas matrimoniales</h5>
                        </div>
                    </div>
                    <div class="col l6 m12 s12">
                        <div class="col l12 m12 s12">
                            <h5><b>Calefacción:</b> No posee</h5>
                            <h5><b>Baños:</b> 1 baño</h5>
                        </div> 
                    </div>
                    <div class="col l12 m12 s12">
                        <div class="col l12 m12 s12">
                            <h5><b>Descripción: </b> Cabaña equipada con cocina amoblada, cocina a gas, y comedor familiar</h5>
                        </div> 
                    </div>
                    <div class="carousel">
                        <a class="carousel-item"><img class="materialboxed" width="200" src="https://pbs.twimg.com/profile_images/1313547461512880128/XpnRuLqK_400x400.jpg"></a>
                        <a class="carousel-item"><img class="materialboxed" width="200" src="https://pbs.twimg.com/profile_images/1313547461512880128/XpnRuLqK_400x400.jpg"></a>
                        <a class="carousel-item"><img class="materialboxed" width="200" src="https://pbs.twimg.com/profile_images/1313547461512880128/XpnRuLqK_400x400.jpg"></a>
                        <a class="carousel-item"><img class="materialboxed" width="200" src="https://pbs.twimg.com/profile_images/1313547461512880128/XpnRuLqK_400x400.jpg"></a>
                        <a class="carousel-item"><img class="materialboxed" width="200" src="https://pbs.twimg.com/profile_images/1313547461512880128/XpnRuLqK_400x400.jpg"></a>
                    </div>
                </div>
            </div>
        </div>
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
    mounted (){
        var elems_carousel = document.querySelectorAll('.carousel');
        M.Carousel.init(elems_carousel, {});

        var elems_materialbx = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems_materialbx, {});
    }
    
}
</script>

<style scoped>
    .container{
        max-width: 800px;
    }

    .card-panel{
        text-align: center;
    }

    h4{
        font-family: 'Luxurious Roman';
        font-weight: bold;
    }

    h5{
        font-family: 'Luxurious Roman';
        font-size: 1.4rem;
    }

    hr{
        border: 3px solid rgba(202, 73, 73, 0.829);
        border-radius: 5px;
    }
</style>