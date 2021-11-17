## 快速使用

:::api

### 安装脚手架工具

安装[vue-cli](https://github.com/vuejs/vue-cli)

Vue.js 开发的标准工具

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

#### 创建一个项目

使用命令行进行初始化。

```bash
vue create pm-demo
```

<br>
若安装缓慢报错，可尝试用 cnpm 或别的镜像源自行安装：`rm -rf node_modules && cnpm install `

:::

:::api

### 通过 npm 安装

在现有项目中使用 Pm-ui 时，可以通过

```bash
npm install pm-ui -S
# OR
yarn global add pm-ui
```

:::

:::api

### 引入 Pm-ui

你可以引入整个 Pm-ui，或是根据需要仅引入部分组件，先介绍完整引入

```js
import Vue from 'vue';
import PmUI from "pm-ui";
import 'pm-ui/lib/css/index.css';
import App from './App.vue';

Vue.use(PmUI);

new Vue({
    el: '#app',
    render: h => h(App)
});
```

:::

:::api

### 按需引入

如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import { Button, Select } from "pm-ui";
import 'pm-ui/lib/css/index.css';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
    el: '#app',
    render: h => h(App)
});
```

#### 完整组件列表和引入方式

```js
import Vue from 'vue';
import {
    Select,
    Button,
    Notification,
    Message
} from 'pm-ui';

Vue.use(Select);
Vue.use(Button);

Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
```

:::

:::api

### 全局配置

在引入 `pm-ui` 时，可以传入一个全局配置对象

该对象目前支持 size 与 zIndex 字段

> size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。按照引入 pm-ui 的方式，具体操作如下：

#### 完整引入

```js
import Vue from 'vue';
import PmUI from 'pm-ui';

Vue.use(PmUI, { size: 'small', zIndex: 3000 });
```

#### 按需引入

```js
import Vue from 'vue';
import { Button } from 'pm-ui';

Vue.prototype.$PMUI = { size: 'small', zIndex: 3000 };
Vue.use(Button);
```

:::

