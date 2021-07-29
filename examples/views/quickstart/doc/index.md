## 快速使用

:::api

### 通过 npm 安装

在现有项目中使用 Pm-ui 时，可以通过

```bash
npm install pming-ui -S
```

:::

:::api

### 引入 Pm-ui

你可以引入整个 Pm-ui，或是根据需要仅引入部分组件，先介绍完整引入

```bash
import Vue from 'vue';
import PmUI from "pming-ui";
import 'pming-ui/lib/css/index.min.css';
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

```bash
import Vue from 'vue';
import {Button,Select} from "pming-ui";
import 'pming-ui/lib/css/index.min.css';
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

```bash
import Vue from 'vue'; 
import { 
  Select, 
  Button, 
  Notification, 
  Message 
} from 'pming-ui';

Vue.use(Select);
Vue.use(Button);

Vue.prototype.$notify = Notification; 
Vue.prototype.$message = Message;
```

:::

:::api

### 全局配置


:::

