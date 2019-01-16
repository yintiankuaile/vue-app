#项目简介

项目目的：目前对于vue这个技术栈所处的状态时api文档已经看完好久，vur-router基本了解怎么用，vuex还比较模糊，axios不知道怎么使用，而且api文档是陆陆续续
        看的，中间也没有拿这个技术栈做项目，很多知识点都已经模糊，所以就决定自己做一个项目，边做边熟悉那些不熟悉的vue模块
所做项目根据：百度搜索知识点时看到别人做的项目放在github上面了，感觉用到的知识点听丰富的，就拿来做依照的例子，谢谢这位分享者了
            https://github.com/JerryYuanJ/a-vue-app-template

项目功能及依赖：前端ui:mint-ui（loadmore和swipe组件的结合使用，完成主流app列表页的上拉加载更多、下拉刷新、左滑切出编辑选项等常见需求、
             MessageBox的校验问题解决）
             vue-router（子路由的使用）
             图表echarts
             sass作为css语言
             组件化开发
步骤：首先模仿项目的下拉刷新做新闻列表页
      1、sass的安装配置
        1.1安装sass的依赖包
          npm install --save-dev sass-loader
          npm install --save-dev node-sass
        1.2在build文件夹下的webpack.base.conf.js的rules里面添加配置
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
          }
        1.3在APP.vue中修改style标签
          <style lang="scss">
        1.4如果把公共样式放在.scss文件里，.vue文件使用时，需要在.vue文件的style标签里引入 @import "../../assets/css/common";

      2、配置路由（没有模仿项目，只是普通配置路由方式，不过有懒加载功能）
        例如：component: r => require.ensure([], () => r(require('../components/HelloWorld')), 'HelloWorld')
      3、全局引入ui组件
        import Mint from 'mint-ui'
        Vue.use(Mint)
        import 'mint-ui/lib/style.css'
      4、使用的mint-ui组件：
        Search  //搜索框
        Loadmore   //下拉/上拉刷新
        Cell Swipe  //可滑动的单元格,增加右滑动按钮（发布、删除）
        Tabbar  //底部选项卡，点击 tab 会切换显示的页面。依赖 tab-item 组件


vuex具体怎么使用，请看印象笔记里面的“非常全面的vuex----mutation和action的基本使用方法”一文，网上地址：https://blog.csdn.net/ywl570717586/article/details/80136455
