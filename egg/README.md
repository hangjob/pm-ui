# 生长

>提供基础生长API服务

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### 目录介绍

- Egg 目前没有计划使用 TS 重写。
- Egg 以及它对应的插件，会提供对应的 index.d.ts 文件方便开发者使用。
- TypeScript 只是其中一种社区实践，我们通过工具链给予一定程度的支持

typings 目录用于放置 d.ts 文件（大部分会自动生成）


### 部署
不需要pm2守护进程，内置了 Master  有足够的稳定性，

[https://eggjs.org/zh-cn/core/deployment.html#%E6%9E%84%E5%BB%BA](https://eggjs.org/zh-cn/core/deployment.html#%E6%9E%84%E5%BB%BA)