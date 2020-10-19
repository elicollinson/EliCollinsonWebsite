import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/views/Home.vue'
import mystory from '../src/views/MyStory.vue'
import Gallery from '../src/views/Gallery.vue'
import Resume from '../src/views/Resume.vue'
import BlogPost from '../src/views/BlogPost.vue'
import Blog from '../src/views/Blog.vue'
import ContactMe from '../src/views/ContactMe.vue'
import FormFailure from '../src/views/FormFailure.vue'
import FormSuccess from '../src/views/FormSuccess.vue'

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
      component: Resume,
      meta: {
        title: 'Resume'
      }
    },
    {
      path: '/blog/',
      name: 'blog',
      component: Blog,
      meta: {
        title: 'Blog'
      }
    },
    {
      path: '/blog/post/:postId',
      name: 'blogpost',
      component: BlogPost
    },
    {
      path: '/contactMe/',
      name: 'contactme',
      component: ContactMe,
      meta: {
        title: 'Contact Me'
      }
    },
    {
      path: '/thanks',
      name: 'success',
      component: FormSuccess
    },
    {
      path: '/404',
      name: 'fail',
      component: FormFailure
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
export default router
