import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import _ from 'lodash';    
Object.defineProperty(Vue.prototype, '$_', { value: _ });

Vue.use(BootstrapVue)
Vue.use(require('vue-moment'))

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCannabis, faLongArrowAltRight, faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCannabis, faLongArrowAltRight, faCaretUp, faCaretDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false  

new Vue({
  render: h => h(App),
}).$mount('#app')