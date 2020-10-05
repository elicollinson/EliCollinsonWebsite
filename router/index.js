import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/views/Home.vue'
import mystory from '../src/views/MyStory.vue'
import Gallery from '../src/views/Gallery.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mystory',
      name: 'my-story',
      component: mystory
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
export default router
