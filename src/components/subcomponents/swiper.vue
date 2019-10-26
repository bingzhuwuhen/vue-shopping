<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for，一定要使用key -->
      <!-- 谁使用此轮播图组件，谁为我们传递lunbotuList -->
      <!-- lunbotuList应该是父组件向子组件传值来设置 -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" :class="{full:isfull}" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
  <!-- 首页的轮播图要求宽和高都是100%，商品详情页的轮播图要求高度为100%，宽度自适应 -->
  <!-- 两个页面对于宽度的要求是有分歧的，那么可以定义一个属性，让使用轮播图的调用者，手动指定是否为100%的宽度，也就是设置full -->
</template>

<script>
export default {
  props: ["lunbotuList", "isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    img {
      //   width: 100%;
      height: 100%;
    }
  }
}
.full {
  width: 100%;
}
</style>