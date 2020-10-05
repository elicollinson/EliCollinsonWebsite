import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/views/Home.vue'
import mystory from '../src/views/MyStory.vue'
import Gallery from '../src/views/Gallery.vue'
import Resume from '../src/views/Resume.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Eli Collinson'
      }
    },
    {
      path: '/mystory',
      name: 'my-story',
      component: mystory,
      meta: {
        title: 'My Story'
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
      meta: {
        title: 'Gallery'
      }
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
export default router
