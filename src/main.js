//入口文件

import Vue from 'vue'
import app from './app.vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己的router.js模块
import router from './router.js'

import moment from 'moment'

//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
    return moment(dataStr).format(pattern)
})

//2.1导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//全局设置post时候表单数据格式的组织形式 为application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

var vm=new Vue({
    el:'#app',
    data:{},
    render:c=>c(app),
    router//挂载路由到vm对象的实例上
})