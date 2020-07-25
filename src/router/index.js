import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const r_mdd = ()=>import('views/Mdd/mdd.vue')
const r_index =()=>import('views/index/index.vue')
const r_gonglve=()=>import('views/gonglve/gonglve.vue')
const r_flight=()=>import('views/flight/flight.vue')
const r_hotel=()=>import('views/hotel/hotel.vue')
const sales_index=()=>import('views/sales/index.vue')
const r_wenda=()=>import('views/community/wenda.vue')
  const routes = [
    { path: '', component: r_index },
    { path: '/mdd', component: r_mdd },
    { path: '/gonglve', component: r_gonglve },
    { path: '/flight', component: r_flight },
    { path: '/hotel', component: r_hotel },
    { path: '/sales', component: sales_index },
    { path: '/wenda', component:  r_wenda}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
