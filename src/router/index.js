import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Study from '@/views/study'
import Watching from '@/views/watching'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/study',
      name: 'study',
      component: Study
    },
    {
      path: '/watching',
      name: 'watching',
      component: Watching
    }
  ]
})
