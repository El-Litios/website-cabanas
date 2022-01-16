<template>
  <div>
      <Navbar />
      <br>
      <div class="row container container-info">
            <div class="col l12 s12 m12">
                <div class="card-panel ">
                    <h4>{{name}}</h4>
                    <hr>
                    <div class="col l6 m12 s12">
                        <div class="col l12 m12 s12 m12 s12">
                            <h5><b>Personas:</b> {{people}}</h5>
                            <h5><b>Camas:</b> {{bed}}</h5>
                        </div>
                    </div>
                    <div class="col l6 m12 s12">
                        <div class="col l12 m12 s12">
                            <h5><b>Calefacción:</b> {{heat}}</h5>
                            <h5><b>Baños:</b> {{bath}}</h5>
                        </div> 
                    </div>
                    <div class="col l12 m12 s12">
                        <div class="col l12 m12 s12">
                            <h5><b>Descripción: </b> {{desc}}</h5>
                        </div> 
                    </div>
                    <br>
                   
                   <div class="carousel">
                       <h5><b>Imagenes: </b></h5>
                            <a class="carousel-item " v-for="(im) in img" :key="im.id">
                                <!-- <img :src="`../assets/images/${im.url}`" width="200">  -->
                                <img :src="require(`../../assets/images/cabins/${im.url}`)" height="200" alt="">
                            </a>
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
import data from '../../assets/data/data.json'

export default {
    data () {
        return {
              datajson: data,
              name: null,
              people: null,
              bed: null,
              bath: null,
              desc: null,
              heat: null,
              img: [],
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

    beforeMount() {
        this.getData()
    },
    mounted (){ 
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, { fullWidth: false, numVisible: 3 });

        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems, {});

        console.log(this.img);
    },

    
    methods: {
        getData(){
            const result = this.datajson.find(d => d.id == this.id)
            this.name = result.nombre
            this.people = result.personas
            this.bed = result.camas
            this.desc = result.descripcion
            this.bath = result.banos
            this.img = result.imgsources
            this.heat = result.calefaccion

            result.imgsources.forEach((element, index) => {
                console.log(element.id);
            });
        }
    },

    watch: {
        id(){
            this.getData()
        }
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

    .carousel{
        perspective: 3000px;
        height: 300px;
    }

    .carousel .carousel-item>img {
        width: 150%;
        margin-left: -25%; 
        height: 250px;
}

</style>