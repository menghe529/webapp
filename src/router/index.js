import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import city from '@/components/city/City'

import axios from 'axios'

Vue.prototype.$http = axios

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
