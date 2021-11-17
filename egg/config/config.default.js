/* eslint valid-jsdoc: "off" */

'use strict'

const fs = require('fs')
const path = require('path')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {}

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1632363167674_4951'

    // add your middleware config here
    config.middleware = []

    // 设置打包的后目录
    config.dir = path.join(appInfo.baseDir, 'dist')

    // 设置基础
    config.siteFile = {
        '/favicon.ico': fs.readFileSync('favicon.ico'),
    }

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    }

    return {
        ...config,
        ...userConfig,
    }
}
