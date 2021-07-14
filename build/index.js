const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
let optimization = {
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