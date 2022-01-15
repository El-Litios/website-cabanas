<template>
  <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 >Ubicación</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13000.884935175458!2d-71.0368994!3d-35.449317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe34d134f39c3a796!2sCaba%C3%B1as%20Los%20Quillayes!5e0!3m2!1ses-419!2scl!4v1642221831007!5m2!1ses-419!2scl" width="300" height="150" loading="lazy"></iframe>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 >Contacto</h5>
                <ul >
                  <li class="col l4">
                        <a  href="https://wa.me/+56973838009">
                          <span class="material-icons">whatsapp</span>
                        </a>
                  </li>
                  <li class="col l4">
                        <a  href="https://www.facebook.com/cabanas.losquillayes/?ti=as">
                          <span class="material-icons">facebook</span>
                        </a>
                  </li>
                  <li class="col l4">
                        <a  href="tel:+56973838009">
                          <span class="material-icons">call</span>
                        </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2022 Todos los derechos reservados. Creado por Cabañas los Quillayes
            </div>
          </div>
        </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    .page-footer{
        background-color: rgb(248, 248, 248);
    }

    .page-footer h5, .footer-copyright .container{
        color: black;
        font-size: 1.5rem;
        font-family: 'Luxurious Roman';
    }

    .footer-copyright .container{
        font-size: 1rem;
    }
    
    iframe{
        border-style: solid;
        padding-bottom: 2px;
    }

    .material-icons{
        font-size: 60px;
        color: rgba(202, 73, 73, 0.829);
    }

    @media screen and (max-width: 333px) {
        iframe{
            width: 250px;
        }
    }
</style>