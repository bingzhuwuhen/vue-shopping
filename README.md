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

## 改造 新闻资讯 路由链接

## 新闻资讯 页面制作
1. 绘制界面
2. 使用vue-resource获取数据
3. 渲染真是数据

## 实现新闻资讯离别，点击的跳转到新闻详情
1. 把列表中的每一项改造为router-link，同时，在跳转的时候应该提供唯一的ID标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情的页面布局和新数据渲染

## 单独分封装一个comment.vue评论子组件
1. 县创建一个单独的comment.vue组件模板
2. 在需要使用comment组件的夜念中，先手动导入comment组件 'import comment from './comment.vue''
3. 在父组件中，使用'components'属性，将刚才导入的comment组件，注册为自己的子组件
4. 将注册子组件时候的注册名称，以标签形式，在页面中，引用即可

## 获取所有的评论数据显示到页面中
1. 为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
2. 点击加载更多，让pageIndex++，然后重新调用this.getComments()方法重新获取最新一页的数据
3. 为防止新数据覆盖老数据的情况，我们在电极加载更多的时候，没当获取到新数据，应该让老数据调用数组的concat方法，拼接上新数组