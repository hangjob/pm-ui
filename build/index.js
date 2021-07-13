const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
let optimization = {
    runtimeChunk: "single",
    splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name (module) {
                    // get the name. E.g.
                    // node_modules/packageName/not/this/part.js or
                    // node_modules/packageName
                    const packageName = module.context.match(
                        /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
                    )[1]
                    // npm package names are URL-safe, but some servers don't
                    // like @ symbols
                    return `npm.${packageName.replace('@', '')}`
                },
            },
        },
    },
    minimizer: [
        new UglifyPlugin({
            uglifyOptions: {
                compress: {
                    drop_console: true, // console
                    drop_debugger: false,
                    pure_funcs: ['console.log'], // 移除console
                },
            },
        }),
    ],
}
module.exports = optimization