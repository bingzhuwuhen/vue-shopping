<template>
<!-- 用watch属性监听父组件传递的max值 -->
    <div class="mui-numbox" data-numbox-min="1" style="height:25px">
      <button class="mui-btn mui-btn-numbox-minus" type="button" disabled>-</button>
      <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  <!-- 子组件什么时候把数据传递给父组件 -->
</template>

<script>
import mui from "../../lib/mui/js/mui.js"
export default {
    mounted(){
        mui(".mui-numbox").numbox();
    },
    methods: {
        countChanged(){
            //数量改变了
            //console.log(this.$refs.numbox.value)
            this.$store.commit("updateGoodsInfo",{
                id:this.goodsid,
                count:this.$refs.numbox.value
            });

        }
    },
    props:["initcount","goodsid"]
}
</script>

<style lang="scss" scoped>

</style>