//入口文件
console.log('OK')

import Vue from 'vue'
import app from './app.vue'

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

import './lib/mui/css/mui.min.css'

var vm=new Vue({
    el:'#app',
    data:{},
    render:c=>c(app)
})