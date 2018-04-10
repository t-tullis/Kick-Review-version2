import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import newPost from '@/components/newPost'
import EditPost from '@/components/EditPost'
import Admin from '@/components/Admin'
import Show from '@/components/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'newPost',
      component: newPost
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/post/:id',
      name: 'Show',
      component: Show
    },
    {
      path: '/post/:id',
      name: 'EditPost',
      component: EditPost
    }
  ]
})
