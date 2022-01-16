import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/principal/Principal')
  },
  {
    path: '/cabin/:id',
    name: 'cabin-id',
    props: ( route ) => {
      const id = Number(route.params.id)
      return {id}
    },

    component: () => import('../views/cabin/Cabin')
  }
]

const router = new VueRouter({
  routes
})

export default router
