import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import ElementUI from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'

import './styles/index.scss' // global css

import './utils'

Vue.use(ElementUI, {
  size: 'small',
  locale: enLang,
})

Vue.config.productionTip = false

new Vue({
  el: '#m-sena-app',
  router,
  store,
  render: (h) => h(App),
})
