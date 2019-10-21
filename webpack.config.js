var path=require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    entry: './src/main.js',
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    },
    mode:"development",
    plugins:[
        new   HtmlWebpackPlugin ({
            filename:'index.html',//配置输出文件名和路径
            template:'./src/index.html' ,//配置文件模板
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(jpg|png|gif|bmp|jpeg)$/,
                    use: [
                        'url-loader?limit=79600&name=[hash:8]-[name].[ext]'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    use: [
                        'url-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader'
                      
                    }
                },
                {
                    test: /\.vue$/,
                    use: [
                        'vue-loader'
                    ]
                },
        ]
    },
    resolve:{
        alias:{
            //"vue$":"vue/dist/vue.js"
        }
    }
}