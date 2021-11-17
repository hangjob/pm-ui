:::api

### bin

`package.json`下添加以下命令

```bash
bin: {
  "pm-cli": "bin.js"
}
```

在本地开发的话，第一次需要执行

```bash
npm link
```

#### bin.js

在`bin.js`的第一行，添加以下代码

```bash
#!/usr/bin/env node
```

上面说了带有#!就是代表此文件可以当做脚本运行，使用 `/usr/bin/env node` 这行的意思就是用node来执行此文件

```js
const program = require('commander')
const version = require('./package.json').version

program.version(version, '-v, --version')

program.command('create <app-name>').
    description('使用 pm-cli 创建一个新的项目').
    option('-d --dir <dir>', '创建目录').
    action((name, command) => {
        const create = require('./packages/create')
        create(name)
    })
```

:::

:::api

### config.js

> 路径`packages/config.js`

目前放置两个变量 `templateNames`,`templateVuex`

```js
[
    {
        name: '安装品茗库vue3.0-typescript模板',
        dir: '/templates/vue3ts',
        method: '/packages/template/vue3ts.js',
    }
]
```

`name`模板名称

`dir`代表的是放置的模板位置

`method`代表的是该模板需要执行的方法

:::

:::api

### create.js

> 路径`packages/create.js`

```js
// targetDir 需要操作的文件路径
// answers 用户输入的一些参数
createTemplate({ targetDir, answers })
```

:::
