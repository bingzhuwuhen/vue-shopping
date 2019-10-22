//入口文件

import Vue from 'vue'
import app from './app.vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己的router.js模块
import router from './router.js'

//2.1导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)

import { Header } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

var vm=new Vue({
    el:'#app',
    data:{},
    render:c=>c(app),
    router//挂载路由到vm对象的实例上
})