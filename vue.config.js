const path = require('path')
const optimization = require('./build/index')
const isProduction = process.env.NODE_ENV === 'production'
const webpack = require('webpack')

module.exports = {
    // 修改 pages 入口
    pages: {
        index: {
            entry: 'examples/main.js', // 入口
            template: 'public/index.html', // 模板
            filename: 'index.html', // 输出文件
        },
    },
    // 扩展 webpack 配置
    chainWebpack: config => {
        // @ 默认指向 src 目录，这里要改成 examples
        // 另外也可以新增一个 ~ 指向 packages
        config.resolve.alias.set('@', path.resolve('examples')).
            set('~', path.resolve('packages'))

        // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
        config.module.rule('js').
            include.
            add(/packages/).
            end().
            include.
            add(/examples/).
            end().
            use('babel').
            loader('babel-loader').
            tap(options => {
                // 修改它的选项...
                return options
            })
    },
    configureWebpack: config => {
        const plugins = []
        // 删除demo.html
        config.plugins.some((plugin, index) => {
            if (plugin.options) {
                return plugin.options.filename === 'demo.html'
                    ? config.plugins.splice(
                        index, 1)
                    : false
            }
        })
        if (isProduction) {
            config.mode = 'production'
            plugins.push(
                new webpack.optimize.LimitChunkCountPlugin({
                        maxChunks: 1,
                    },
                ),
            )
        }
        config.optimization = optimization
        return {
            plugins,
        }
    },
}
