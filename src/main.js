import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router';

//全局引入
import ElementUI from 'element-ui';
Vue.use(ElementUI)


//按需引入
// import { Row, Button } from 'element-ui'
// Vue.use(Row)
// Vue.use(Button)



Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
