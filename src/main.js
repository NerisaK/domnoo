import Vue from 'vue'
import VueRes from 'vue-resource'
import App from './App.vue'
import { MdButton, MdDrawer, MdCard } from 'vue-material/dist/components'
import VueScrollReveal from 'vue-scroll-reveal'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueRes)

Vue.use(MdButton)
Vue.use(MdDrawer)
Vue.use(MdCard)

Vue.use(VueScrollReveal, {
  duration: 1000,
  scale: 1,
  distance: "50px"
})

Vue.config.productionTip = false
Vue.http.options.root = "https://domnoo-89f37-default-rtdb.europe-west1.firebasedatabase.app/"

new Vue({
  render: h => h(App),
}).$mount('#app')
