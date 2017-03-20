# campus-web 

> 本项目涵盖技术：bootstrap、sass、vue.js、webpcak、es6(部分)
>
> [vue API](http://cn.vuejs.org/v2/api/)  [webpack API](http://webpack.github.io/docs/) [sass API](http://www.w3cplus.com/sassguide/) 

## 1. 项目相关命令
``` bash
# 初始化项目 安装依赖包
npm install

# 启动本地开发，webpack热插拔
npm run dev

# 启动打包项目
npm run build
```

##2.相关目录/文件

### package.json

项目配置文件

### webpack.config.js

webpack配置文件

### src
该目录为开发代码所在，各目录如下：

####      +====== main.js

项目入口文件

####      +====== components

项目组件目录
        
        |———banner.vue  轮播图组件
        
        |———footer.vue  底部组件
         
        |———header.vue  头部组件
        
        |———header.vue  常用链接组件
        
####      +====== pages

视图页面
        
        |———index.vue  主页视图
        
####      +====== public

资源文件夹，SCSS、img图片和js所在，scss入口文件 index.scss，
        
        |———index.vue  主页视图

##3.项目预览

pc端：

![campus-web](https://Fiona-SUN.github.io/photos/campus-web.png)

wap端：

![campus-web-xs](https://Fiona-SUN.github.io/photos/campus-web-xs.png)

> author : fiona
>
> 2017/3/10