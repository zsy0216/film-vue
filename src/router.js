import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

// const About = () => import(/* webpackChunkName: "about" */ './views/About.vue')
const About = () => import('./views/About.vue')
const Contact = () => import('./views/Contact.vue')
const Searchdetial = () => import('./views/Searchdetial.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is #lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/detial',
      name: 'detial',
      component: Searchdetial
    }
  ]
})