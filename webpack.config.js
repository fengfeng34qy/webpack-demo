const path = require('path')

module.exports = {
    mode: 'development', // development | production
    entry: path.join(__dirname, './src/index.js'),
    output: {
        // 表示输出文件的存放路径
        path: path.join(__dirname, './dist'),
        // 表示输出文件的名称
        filename: 'bundle.js'
    }
}