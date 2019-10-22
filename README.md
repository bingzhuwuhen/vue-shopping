# 终于开始做项目了

## 每一行代码都注入诚意

### 我们是有灵魂的程序员

## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896?sort=created)

## 用(传统方式)命令行把修改过的代码上传
1. git add .
2. git commit -m "提交信息"
3. git 

## 制作首页APP组件
1. 完成Header区域，使用的是Mint-UI中的Header组件
2. 制作底部的tabbar区域，使用的是MUI的Tabbar.html
 + 在制作购物车小图标的时候，操作会相对多一些；
 + 先把扩展图标的css样式，拷贝到项目中去；
 + 在拷贝扩展图标的ttf文件，到项目中
 + 为购物车小图标，添加如下样式"mui-icon mui-icon-extra mui-icon-extra-cart"
3. 要在中间区域放置一个router-view来展示路由匹配到的组件

## 改造tabbar 为router-link

## 设置路由高亮，LinkActiveClass

## 点击Tabbar中路由链接，展示对应的组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据，使用vue-resource
2. 使用vue-resource的this.$http.get获取数据
3. 获取到的数据保存到data上
4. 使用v-for循环渲染每一个item项

## 改造九宫格样式