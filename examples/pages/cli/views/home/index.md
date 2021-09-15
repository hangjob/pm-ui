
## 介绍

:::api

Pm-CLI 是一个基于 Vue.js 进行快速开发的完整项目，提供：

- 通过 pm-cli 实现的交互式的项目脚手架
- 一个丰富的官方插件集合，集成了前端生态中最好的工具
- 基于webpack构建，并带有合理的默认配置
- 可以通过项目内的配置文件进行配置
- 可以通过插件进行扩展
- 初始化项目多种板配置
- 覆盖JavaScript、TypeScript，多种开发环境
- 下一代构建工具Vite

Pm-CLI 致力于将 `品茗信息前端` 生态中的工具基础标准化

:::

## 插件

>内置编译依赖，完成对ES6、TS、Less、Sass、img、js等等的编译

:::api
 ### Vue-cli

CLI 服务是构建于 webpack 和 webpack-dev-server 之上的。它包含了：

- 加载其它 CLI 插件的核心服务；
- 一个针对绝大部分应用优化过的内部的 webpack 配置；
- 项目内部的 vue-cli-service 命令，提供 serve、build 和 inspect 命令

:::

:::api
### Vite

Vite 通过在一开始将应用中的模块区分为 依赖 和 源码 两类，改进了开发服务器启动时间

- 依赖 大多为在开发时不会变动的纯 JavaScript。一些较大的依赖（例如有上百个模块的组件库）处理的代价也很高。依赖也通常会存在多种模块化格式（例如 ESM 或者 CommonJS）。
Vite 将会使用 esbuild 预构建依赖。Esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍。

- 源码 通常包含一些并非直接是 JavaScript 的文件，需要转换（例如 JSX，CSS 或者 Vue/Svelte 组件），时常会被编辑。同时，并不是所有的源码都需要同时被加载（例如基于路由拆分的代码模块）。

Vite 将会使用 [esbuild](https://esbuild.github.io/) 预构建依赖。Esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍

:::


