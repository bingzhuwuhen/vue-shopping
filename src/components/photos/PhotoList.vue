<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
                <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
                    <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>

        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">
                        {{item.title}}
                    </h1>
                    <div class="info-body">
                        {{item.zhaiyao}}
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.js'

export default {
    data() {
        return {
            cates:[],
            list:[]
        }
    },
    created() {
        this.getAllCategory();
        this.getPhotoListByCateId(0);//默认进入页面就主动请求所有图片列表请求的数组
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            scrollX: true
            });

    },
    methods: {
        getAllCategory(){
            this.$http.get('api/getimgcategory').then(result=>{
                if(result.body.status==0){
                    result.body.message.unshift({title:"全部",id:0});
                    this.cates=result.body.message;
                }
            })
        },
        getPhotoListByCateId(cateid){
            this.$http.get('api/getimages/'+cateid).then(result=>{
                if(result.body.status==0){
                    this.list=result.body.message;
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
*{
    touch-action: pan-y
}

.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        position: relative;
        img{
            width: 100%;
            vertical-align: middle;
            box-shadow: 0 0 10px #999;

        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .info{
            position: absolute;
            bottom: 0;
            color: white;
            text-align: left;
            background-color: rgba(0,0,0,0.4);
            max-height: 84px;
            .info-title{
                font-size: 14px;
            }
            .info-body{
                font-size: 13px
            }
        }
    }
}
</style>