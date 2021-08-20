# pm-ui

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
**发包需要注意改动懂版本号**
```bash
# 添加账户，没有去npm上注册
npm adduser
npm login
```
#### 不是第一次发包
```bash
npm publish
```

## 测试

[测试断言说明-1](https://www.jianshu.com/p/c1b5676c1edd)

[测试断言说明-2](https://blog.csdn.net/Riona_cheng/article/details/101444964)
