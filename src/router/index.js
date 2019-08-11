import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
import experience from '@/components/experience'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'about',
      component: about
    },
    {
      path: '/experience',
      name: 'experience',
      component: experience
    }
  ]
})
