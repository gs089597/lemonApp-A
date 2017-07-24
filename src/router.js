// import Vue from 'vue'
import Router from 'vue-router'
import lemonApp from  './views/lemonApp.vue'
import lemonA from './views/lemonA.vue'
import lemonB from './views/lemonB.vue'
import lemonC from './views/lemonC.vue'
import lemonD from './views/lemonD.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/lemonApp', component: lemonApp },
    { path: '/lemonA', component: lemonA },
    { path: '/lemonB', component: lemonB },
    { path: '/lemonC', component: lemonC },
    { path: '/lemonD', component: lemonD },
    { path: '/', redirect: '/lemonA' }
  ]
})
