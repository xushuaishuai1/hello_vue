import Vue from 'vue'
import App from './App'
import router from './router'//引入路由配置
import animate from 'animate.css'//引入animate
import ElementUI from 'element-ui';//引入elementUI
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/'//vuex推荐使用方式 引入vuex配置
import Loading from './components/common/loading'//自定义组件使用 引入自定义的loading组件
import './axios'//引用axios配置
import './assets/css/login.css'; /*引入公共样式*/
var filters = require('./filters/index')//引入自定义filters
Object.keys(filters).forEach((key) => Vue.filter(key,filters[key]));//使用自定义filters

Vue.use(Loading);//使用自定义组件
Vue.config.productionTip = false
Vue.use(animate);//使用animate
Vue.use(ElementUI);//使用elementui
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
