import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import vueSwiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-chalk/index.css';
import "assets/CSS/base.css"
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
