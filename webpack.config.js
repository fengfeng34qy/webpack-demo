const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',   // 指定源文件的存放路径
    filename: './index.html'    // 指定生成的文件的存放路径
})

module.exports = {
    mode: 'development', // development | production
    entry: path.join(__dirname, './src/index.js'),
    output: {
        // 表示输出文件的存放路径
        path: path.join(__dirname, './dist'),
        // 表示输出文件的名称
        filename: 'bundle.js'
    },
    plugins: [htmlPlugin],
    devServer: {
        open: false,
        host: '127.0.0.1',
        port: '1988'
    }
}