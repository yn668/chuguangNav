import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './views/index.vue'
import About from './views/about.vue'
import { Button, Select , Input,Option,OptionGroup,Menu,Submenu,MenuItem,MenuItemGroup,Dropdown,DropdownMenu,DropdownItem} from 'element-ui';





import './assets/css/fonts/linecons/css/linecons.css'
import './assets/css/fonts/fontawesome/css/font-awesome.min.css'
import './assets/css/bootstrap.css'
import './assets/css/xenon-core.css'
import './assets/css/xenon-components.css'
import './assets/css/xenon-skins.css'
import './assets/css/nav.css'
import VueParticles from 'vue-particles'  
import './assets/css/config.css'
Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(MenuItemGroup)
Vue.use(DropdownItem)
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
