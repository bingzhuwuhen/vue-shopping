//入口文件

import Vue from 'vue'
import app from './app.vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己的router.js模块
import router from './router.js'
//每次进入网站，肯定会调用main.js在刚调用的时候，先从本地存储中，把购物车的数据读出来，放到store中
var car = JSON.parse(localStorage.getItem('car')||"[]")


//注册Vuex
import Vuex from "vuex"
Vue.use(Vuex)
var store = new Vuex.Store({
    state:{//this.$store.state.***
        car:car,//将购物车中的商品的数据，用一个数组存储起来，在car数组中，存储一些商品的对象，咱们可以暂时将这个商品对象，设计成这个样子{id:商品的id,count:要购买的数量，price：商品的单价，selected：是否被选中}
    },
    mutations:{//this.$store.commit('方法名称'，'传递的参数')
        addToCar(state,goodsinfo){
            //1如果购物中，已经有这个商品了，那么只需要更新数量
            //2如果没有，则直接把商品数据push到car中即可
            var flag=false;//假设在购物车中，没有找到对应的商品
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count+=parseInt(goodsinfo.count)
                    flag=true;
                    return true;
                }
            })

            if(!flag){
                state.car.push(goodsinfo);
            }
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state,goodsinfo){
            //修改购物车中商品数量值
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count=parseInt(goodsinfo.count)
                    return true
                }
            })
            //当修改完商品的数量，把最新的购物车数据，保存到本地存储中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFromCar(state,id){
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id==info.id){
                    item.selected=info.selected;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        }

    },
    getters:{//this.$store.getters.***
        getAllCount(state){
            var c=0;
            state.car.forEach(item=>{
                c+=item.count
            })
            return c;
        },
        getGoodsCount(state){
            var o={};
            state.car.forEach(item=>{
                o[item.id]=item.count
            });
            return o;
        },
        getGoodsSelected(state){
            var o={};
            state.car.forEach(item=>{
                o[item.id]=item.selected
            })
            return o;
        },
        getGoodsCountAndAmount(state){
            var o={
                count:0,
                amount:0,
            }
            state.car.forEach(item=>{
                if(item.selected==true){
                    o.count+=item.count;
                    o.amount+=item.count*item.price;
                }
            })
            return o;
        }
    }
})

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
    router,//挂载路由到vm对象的实例上
    store
})