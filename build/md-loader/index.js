// 自定义loader：
// 功能：导入markdown文件，将markdown转换成html导出


// 插件：marked实现将markdown内容转换成html的功能

// loader需要返回一段js代码：因为在webpack加载时会将这段代码拼接到打包代码中~
// 输入：function的参数作为输入值：这里是原有的markdown内容，source
// 输出：return一个返回值作为输出：这里是转换成html的内容，html（
// 输出注意：1、需要将返回值作为一个模块导出，才能更好的在webpack打包文件中使用
// 输出注意：2、
module.exports = source => {

    const html = 1111;
    console.log(html)
    // webpack将loader加载后会将代码放到打包文件boundle.js中，一个loader对应一个(function(){}) 模块；所以在loader中需要导出
    // webpack的打包文件boundle.js中，支持CommonJS的方式、ES Modules的方式导出

    // loader的
    // 1、CommonJS的方式：输出的模块转换为字符串的形式return
    // return `module.exports = ${JSON.stringify(html)}`//JSON.stringify转换html的换行符和空格

    // 2、ES Modules：webpack内部会自动转换export default导出的代码
    // return `export default ${JSON.stringify(html)}`


    // 3、直接返回html，再将结果交给html-loader处理（loader是管道的形式处理，可以串联）
    return html
}