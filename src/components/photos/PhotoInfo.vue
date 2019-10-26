<template>
    <div class="photoinfo-container">
       <h3>{{photoinfo.title}}</h3>
       <p class="subtitle">
           <span>发表时间：{{photoinfo.add_time|dateFormat}}</span>
           <span>点击:{{photoinfo.click}}次</span>
        </p> 

        <hr>
        <!-- 缩略图区域 -->
        <div class="thumbs">
            <vue-preview :slides="list" @close="handleClose"></vue-preview>
        </div>
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 评论子组件 -->
        <cmt-box :id="this.id"></cmt-box>
    </div>
</template>

<script>
import  comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,
            photoinfo:{},
            list:[]        }
    },
    created() {
        this.getPhotoIfo();
        this.getThumbs();
    },
    methods: {
        getPhotoIfo(){
            //获取图片的详情
            this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                if (result.body.status==0) {
                    this.photoinfo=result.body.message[0]
                }
            })
        },
        getThumbs(){
            //获取缩略图
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if (result.body.status==0) {
                    result.body.message.forEach(item => {
                        item.msrc=item.src;
                        item.w=600;
                        item.h=400;
                    });
                    this.list=result.body.message;
                }
            })
        },
        handleClose () {
            console.log('close event')
        }
    },
    components:{
        'cmt-box':comment
    }
}
</script>

<style lang="scss">
.photoinfo-container{
    figure {
        margin: 5px 5px;
        width: 100px;
        height: 100px;
        display: inline-block;

        img {
            border: 0;
            width: 100%;
            height: 100%;
            box-shadow: 0 0 10px #999
            }
        }
    padding: 3px;
    h3{
        color: blue;
        font-size: 15px;
        text-align: center;
        margin: 15px 0; 
    }
    .subtitle{
        display:flex;
        justify-content: space-between;
    }
    .content{
        font-size: 13px;
        line-height: 25px;
    }
    
}
</style>