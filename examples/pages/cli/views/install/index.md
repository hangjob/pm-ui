:::api

## 安装

> Node 版本要求<br/>
> Vue CLI 4.x 需要 Node.js v8.9 或更高版本 (推荐 v10 以上)。你可以使用 n，nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。

```bash
npm i pming-cli -g
```

安装之后，你就可以在命令行中访问 vue 命令。你可以通过简单运行 pm-cli，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功

### 查看版本

```bash
pm-cli --version
```

:::

::: api

### 升级

如需升级全局的 Pm-CLI 包，请运行：

```bash
npm update -g pming-cli
```

:::

::: api

### pm-cli主要依赖

- `chalk` 包的作用是修改控制台中字符串的样式,字体样式(加粗、隐藏等)，字体颜色，背景颜色
- `cheerio` 为服务器特别定制的，快速、灵活、实施的jQuery核心实现
- `commander` node.js命令行界面的完整解决方案[参数描述](https://segmentfault.com/a/1190000020200554)
- `cross-spawn` 自动根据当前的运行平台，来决定是否生成一个 shell 来执行所给的命令
- `mkdirp` 这是一款在node.js中像mkdir -p一样递归创建目录及其子目录
- `fs` 模块提供了许多非常实用的函数来访问文件系统并与文件系统进行交互[参数描述](http://nodejs.cn/learn/the-nodejs-fs-module)
- `inquirer`一个用户与命令行交互的工具

:::