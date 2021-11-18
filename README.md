# pm-ui
## 包含功能
- 组件开发
- 代码文档演示
- eslint代码检查
- 项目构建lib包
- 组件单元测试
- gulp打包合并

## 安装依赖
```
npm install
```

### 开发
>主要开发人员，开发组件
```
npm run serve
```

### 校验
> 校验代码规范，主要校验，.js,.vue,.json,.jsx
```bash
npm run eslint
```
>校验代码规范，主要校验，html,vue,css,sass,scss,less

```bash
npm run eslint:css
```

### 单元测试
>开发者应写上开发组件的单元测试用例，期望覆盖60%以上
#### unit测试
unit测试是把代码看成是一个个的组件。从而实现每一个组件的单独测试，测试内容主要是组件内每一个函数的返回结果是不是和期望值一样
```bash
npm run test:unit
```

### lib
>生成依赖包，构建项目，会在目录下生成`lib`目录

```
npm run lib
```
`***.common.js`,一个给打包器用的 CommonJS 包 (不幸的是，webpack 目前还并没有支持 ES modules 输出格式的包)

`***.umd.js`,一个直接给浏览器或 AMD loader 使用的 UMD 包

### 发布

#### 第一次发包
**发包需要注意改动版本号**
```bash
# 添加账户，没有去npm上注册
npm adduser
npm login
```
#### 不是第一次发包
默认为你已经登录过
```bash
npm publish
```

## 怎么添加自己写的组件演示
>首次运行项目需要在`examples/pages/demotest`，新建这个文件夹`demotest`，内容粘贴`examples/pages/demtest`文件中的代码即可

>浏览器直接引入运行方式，需要在`html/demotest.html`，新建这个html`demotest.html`,内容粘贴`html/index.html`中的代码即可
> 
## 测试

[测试断言说明-1](https://www.jianshu.com/p/c1b5676c1edd)

[测试断言说明-2](https://blog.csdn.net/Riona_cheng/article/details/101444964)

### 使用表情
🌏 [Emoji](https://cn.piliapp.com/emoji/list/)

### -apple-system 
```html
<style>
font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
</style>
```
-apple-system 是在以 WebKit 为内核的浏览器（如 Safari）中，调用 Apple（苹果公司）系统（iOS, macOS, watchOS, tvOS）中默认字体（现在一般情况下，英文是 San Francisco，中文是苹方

BlinkMacSystemFont 是在 Chrome 中实现调用 Apple 的系统字体