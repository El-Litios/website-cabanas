<template>
  <div>
        <nav>
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">
                    <img src="../../../assets/images/Logodemo1.jpeg" height="56">
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li><router-link :to="{name: 'home'}">Inicio</router-link></li>
                    <li>
                        <a class="dropdown-trigger"  data-target="dropdown1">Cabañas
                            <i class="material-icons right">arrow_drop_down</i>
                        </a>
                    </li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </nav>

        <SideNavbar/>

        <DropdownList />
  </div>
</template>

<script>
import DropdownList from './DropdownList.vue'
import SideNavbar from './SideNavbar.vue'

export default ({
    components: {
        DropdownList, SideNavbar

    },
    mounted () {
        
        var elems = document.querySelectorAll('.dropdown-trigger')
        var instances = M.Dropdown.init(elems, {
            coverTrigger: false,
        })
    }
})
</script>


<style scoped>
    .nav-wrapper{
        background-color: rgb(248, 248, 248);
        
    }

    a{
        color: black;
        font-size: larger;
        font-family: 'Luxurious Roman';
    }

    .sidenav {
        background-color: rgb(248, 248, 248); 
    }
</style>