<template>
  <div>
        <ul class="sidenav" id="mobile-demo">
            <li><a href="#">Inicio</a></li>
            <li>
                <a class="dropdown-trigger" href="#!" data-target="dropdown2">Cabañas
                    <i class="material-icons right">arrow_drop_down</i>
                </a>
            </li>
            <li><a href="#">Contacto</a></li>
        </ul>
  </div>
</template>

<script>
export default {
    mounted () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
    }
}
</script>

<style scoped>
    .sidenav a{
        font-size: larger;
        font-family: 'Luxurious Roman';
        color: black;
    }
</style>