<template>
<!-- 用watch属性监听父组件传递的max值 -->
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
      <button class="mui-btn mui-btn-numbox-minus" type="button" disabled>-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
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
            //每当文本框的数据被修改的时候，立即把最新的数据 通过数据调用传递给父组件
           //console.log(this.$refs.numbox.value)
           this.$emit("getcount",parseInt(this.$refs.numbox.value));
        }
    },
    props:["max"],
    watch:{
        "max":function(newVal,oldVal){
            mui(".mui-numbox").numbox().setOption('max',newVal)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>