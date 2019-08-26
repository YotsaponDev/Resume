import Vue from 'vue'
import Router from 'vue-router'
import about from '../src/components/about'
import experience from '../src/components/experience'
import education from '../src/components/education'
import skills from '../src/components/skills'

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
    },
    {
      path: '/education',
      name: 'education',
      component: education
    },
    {
      path: '/skills',
      name: 'skills',
      component: skills
    }
  ]
})
