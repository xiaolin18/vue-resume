const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: '/.js$', //用正则匹配文件，用require或者import引入的都会匹配到
                loader:"babel-loader",
                exclude: /node_modules/
            },
            {
                test: '/.css$',
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: '/.(png|jpe?j|gif|svg)(?.*)?$/',
                loader: "url-loader",
                //图片文件大小小于limit的数值，就会被改写成base64直接填入url里面，
                //不然会输出到dist/img目录下，[name]原文件名，[ext]原后缀，[hash]在url上加上一点哈希值避免缓存
                options: {
                    limit: 10000,
                    name: 'img/[name].[ext]?[hash]'
                }
            },
            {
                test: '/.(woff2?|eot|ttf|otf)(?.*)?$/',
                loader: 'url-loader',
                options:{
                    limit:10000,
                    name:'fonts/[name].[ext]?[hash]'
                }
            },
            {
                test: /.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        filename: path.join(__dirname, './dist/index.html'),
        template: path.join(__dirname, './src/index.html')
      }),
    ],
    resolve:{
        //引入路径是不用写对应的后缀名
        extensions: ['.js', '.vue', '.json'],
        //缩写扩展
        alias:{
            //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
            'vue$':'vue/dist/vue.esm.js',// 'vue/dist/vue.common.js' for webpack 1
            //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
            '@': path.resolve(__dirname,'./src'),
        }
    }
}
