import Vue from 'vue'
import hero from '@/components/hero'



export default new Router({
  routes: [
    {
      path: '/',
      name: 'hero',
      component: hero
    }
  ]
})
