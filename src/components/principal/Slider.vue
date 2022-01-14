<template>
  <div>
      <div class="slider">
            <ul class="slides">
                <li>
                    <div class="parallax">
                        <img src="../../assets/WALLPAPER-radal.jpg" class="img-responsive">
                    </div>
                    <div class="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
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
                height: 450
            });
        });
    }
}
</script>

<style scoped>
    .slider .slides li .caption{
        background-color: red;
        border-radius: 10px;
        top: 25%;
        left: 40%;
        width: 20%;
        height: 45%;
    }
</style>