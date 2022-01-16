<template>
  <div>
      <div class="slider">
            <ul class="slides">
                <li>
                    <div>
                        <img src="../../assets/images/WALLPAPER-radal.jpg" class="img-responsive">
                    </div>
                    <div class="caption center-align">
                        <h3>BIENVENIDOS</h3>
                    </div>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    mounted (){
            var heigthSlider = 0;
            const windowSize = document.documentElement.scrollWidth;
            if (windowSize < 450) {
                heigthSlider = 250
            } else if( windowSize >= 450){
                heigthSlider = 450
            }
            
            var elems = document.querySelector('.slider');
            var instances = M.Slider.init(elems, {
                height: heigthSlider,
                indicators: false
            });
    }
}
</script>

<style scoped>
    .caption h3{
        border-radius: 10px;
        background-color: rgba(248, 248, 248, 0.8);
        color: black;
        padding-bottom: 1.68rem;
        padding-top: 1.68rem;
        font-family: 'Luxurious Roman';
        font-weight: bolder;
    }

    @media screen and (max-width: 437px) {
        .caption h3{
            font-size: 30px;
        }
    }

    @media screen and (max-width: 333px) {
        .caption h3{
            font-size: 23px;
        }
    }
</style>