import Vue from 'vue'
import store from '../store'
//引用axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//配置axios 
//1.获取请求期间显示滚动条
axios.interceptors.request.use(function(config){
    //调用vuex的actions中showLoading方法显示滚动条
    store.dispatch('showLoading');
    return config;
  },function(error){
    return Promise.reject(error);
  }
)
//2.获取到请求数据后关闭滚动条
axios.interceptors.response.use(function(response){
    //调用vuex的actions中showLoading方法显示滚动条
    store.dispatch('hideLoading');
    return response;
  },function(error){
    return Promise.reject(error);
  }
)
//3.配置axios请求根路径 这里和config/index.js里面proxyTable冲突，所以不配置
// axios.defaults.baseURL="https://www.toutiao.com";
axios.defaults.baseURL="/api";
//4.设置axios的post默认头部信息
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//5.设置axios通用简写
Vue.prototype.$http = axios;
//6.请求超时
// axios.defaults.timeout = 5000 


//使用axios
Vue.use(VueAxios,axios);
