:::api

### 创建项目

```bash
pm-cli create my-project // 项目名称
```

**执行完成后会提示出现模板选择**

- 安装普通html模板
- 安装品茗库vue2.0模板
- 安装品茗库vue3.0模板
- 安装品茗库App模板
- 安装品茗库vue3.0-typescript模板
- vite下一代脚手架

#### 普通Html模板

🍏 适合公司的jsp的项目，或者比较简单的项目，能快速出产品，比如一个临时的通知公告，或者一个简单的静态页面，

> 项目特点

* 项目不需要过多的依赖第三包
* 也能使用Vue、React

#### Vue2.0模板、Vue3.0模板、Vue3.0-typescript模板

🍐 符合公司目前正在的使用的项目，以及未来开发使用的模板

> 项目特点

* 基于Webpack构建、编译、打包
* 能尽量的使用npm生态第三放包
* 在node.js环境下使用第三方工具很好去做代码兼容

#### App模板

🍊 uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台

#### Vite

🍋 前端开发下一代的构建工具，官方提供可以选择多种模板选择

1. vanilla
2. vue
3. React
4. Preact
5. lit-element
6. Svelte

基于浏览器原生 ES imports 的开发服务器。利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随起随用

:::