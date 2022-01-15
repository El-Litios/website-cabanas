<template>
  <div>
      <div class="slider">
            <ul class="slides">
                <li>
                    <div>
                        <img src="../../assets/WALLPAPER-radal.jpg" class="img-responsive">
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
            document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {
                height: 450,
                indicators: false
            });
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
</style>