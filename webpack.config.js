const path = require('path')
var webpack = require("webpack");
const HtmlPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const os = require('os');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});

module.exports = {
    mode: 'development', // development | production
    entry: path.join(__dirname, './src/index.js'),
    output: {
        // 表示输出文件的存放路径
        path: path.join(__dirname, './dist'),
        // 表示输出文件的名称
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: 'happypack/loader?id=styles',
                // use: ['style-loader', 'css-loader', 'less-loader']
            },
            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 mimetype: false,
            //             },
            //         },
            //     ],
            // },
        ]
    },
    plugins: [
        // HappyPack 通过并行转换文件使初始 webpack 构建更快。
        new HappyPack({
            id: 'styles',
            threads: 2,
            loaders: [ 'style-loader', 'css-loader', 'less-loader' ],
            threadPool: happyThreadPool
        }),

        // 拷贝html文件并自动添加script脚本 dev模式复制到根目录 build模式复制到dist目录
        new HtmlPlugin({
            template: './src/index.html',   // 指定源文件的存放路径
            filename: './index.html'    // 指定生成的文件的存放路径
        }),

        // 查找依赖关系，提升性能
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./vendor-manifest.json')
        }),

        // 拷贝static目录到dist目录
        new CopyWebpackPlugin({
            patterns: [
                { from: "static", to: "static" },
            ]
        }),

        // 自动清除dist目录
        new CleanWebpackPlugin()
    ],
    devServer: {
        open: false,
        host: '127.0.0.1',
        port: '1988'
    }
}