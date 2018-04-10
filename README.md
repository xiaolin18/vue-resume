## 概述
    从零开始搭建一个项目
    https://www.jishux.com/plus/view-691172-1.html

## 步骤

- 新建项目，并cd到这个项目
- npm init
- npm install webpack --save-dev
  淘宝镜像设置：npm install -g cnpm –registry=https://registry.npm.taobao.org

- 创建webpack配置文件：webpack在运行时候会找到启用webpack命令目录下的webpack.config.js,所以要创建该文件到项目根目录下
path就是用来做路径拼接返回一个路径字符串,
https://blog.zfanw.com/webpack-tutorial/

问题：为什么执行webpack, command not found, npm run start 就可以呀
    http://www.imooc.com/qadetail/229794

    Error: options/query provided without loader (use loader + options)

    The 'mode' option has not been set. Set 'mode' option to 'development' or 'production' to enable defaults for this environment.

- npm install --save vue

- npm install --save-dev vue-loader vue-template-compiler

- npm install --save-dev babel-core babel-loader

- npm install --save-dev file-loader url-loader

