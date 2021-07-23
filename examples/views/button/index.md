## Button 按钮

:::snippet 通过 `pm-button` 标签初始化按钮

### 基础用法

```html

<template>
    <div>
        <pm-button>基础按钮</pm-button>
        <pm-button type="primary">主要按钮</pm-button>
        <pm-button type="success">成功按钮</pm-button>
        <pm-button type="info">信息按钮</pm-button>
        <pm-button type="warning">警告按钮</pm-button>
        <pm-button type="danger">危险按钮</pm-button>
    </div>
</template>
```

:::

:::snippet ss

### 加载中

```html

<template>
    <div>
        <pm-button>基础按钮</pm-button>
    </div>
</template>
```

:::

## API

:::api

### Props

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| type | 类型 | string | primary / success / warning / danger / info / text| - |
| round | 是否圆角按钮 | boolean | - | false |
| circle | 是否圆形按钮 | boolean | - | false |
| loading | 是否加载中状态 | boolean | - | false |
| disabled | 是否禁用状态 | boolean | - | false |
| icon | 图标类名 | string | - | - |

:::
:::api

### Events

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| click    | 单击触发 | event    |

:::
:::api

### Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 按钮内容 |

:::
