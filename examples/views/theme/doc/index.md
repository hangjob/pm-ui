:::api

## 更换主题

如果项目对视觉风格有额外的要求， 推荐使用以下的方式进行定制

:::

:::api

## 变量更换

所有样式变量可以在 [这里](http://192.168.1.200/secrets/pm-ui/blob/develop/packages/style/common/var.less) 找到

```less
// 主要颜色
@--color-primary: #409EFF;
// 白色
@--color-white: #FFFFFF;
// 黑色
@--color-black: #000000;
// 成功颜色
@--color-success: #67C23A;
// 警告颜色
@--color-warning: #E6A23C;
// 危险颜色
@--color-danger: #F56C6C;
// 提示颜色
@--color-info: #909399;
...
```

支持脚本替换提供的 less 变量. 你可以在脚手架目录中找到 vue.config.js 代码类似这样:

> 原理是在编译的过程中`modifyVars`会找到相对应的less变量，替换在生成css文件

```js
module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: { // less-loader 6.0.0 版本以上写法
                    modifyVars: {
                        '--primary-color': '#F5222D',
                        '--link-color': '#F5222D',
                        '--border-radius-base': '4px'
                    },
                    javascriptEnabled: true
                }

            }
        }
    }
}
```

如果是 webpack 对 [less-loader](https://github.com/webpack-contrib/less-loader) 的 options 属性进行相应配置

```js
module.exports = {
    rules: [
        {
            test: /\.less$/,
            use: [
                {
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            modifyVars: {
                                'primary-color': '#1DA57A',
                                'link-color': '#1DA57A',
                                'border-radius-base': '2px',
                            },
                            javascriptEnabled: true,
                        }
                    },
                }],
        }
    ],
}
```

> 引入样式需要改变,随着版本的升级路径可能会发生变化

```js
import 'pming-ui/lib/css/index.min.css'
// 替换为
import 'pming-ui/packages/style/index.less'
```

以上根据自己项目情况，当修改完毕后，重启环境，即可生效 ( npm run serve  )
:::

::: api

## 样式覆盖

通用样式变量覆盖可能无法满足所有定制需求，你需要全局覆盖默认的组件样式

### 全局覆盖组件

比如新建全局覆盖样式表 `src/global.less` 修改提示的颜色。

```less
.pm-button--primary {
    background-color: #a0cfff;
}
```

在`main.js`中引入，即可

```js
import 'src/global.less'
```

### 单独覆盖指定组件

```less
.pm-button--primary {
    background-color: #a0cfff;
}
```

```vue

<template>
    <PmButton class="customTag">定制按钮</PmButton>
</template>

<style lang="less" scoped>
@import './sample.less';
</style>
```

:::

:::api

## 定制主题

更多方式可以参考定制主题：[点击这里](/theme)

:::