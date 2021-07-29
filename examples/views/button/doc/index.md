## Button 按钮

:::snippet 通过 `pm-button` 标签初始化按钮

### 基础用法

```html

<template>
    <div>
        <div class="pm-row">
            <pm-button>基础按钮</pm-button>
            <pm-button type="primary">主要按钮</pm-button>
            <pm-button type="success">成功按钮</pm-button>
            <pm-button type="info">信息按钮</pm-button>
            <pm-button type="warning">警告按钮</pm-button>
            <pm-button type="danger">危险按钮</pm-button>
        </div>
        <div class="pm-row">
            <pm-button plain>基础按钮</pm-button>
            <pm-button type="primary" plain>主要按钮</pm-button>
            <pm-button type="success" plain>成功按钮</pm-button>
            <pm-button type="info" plain>信息按钮</pm-button>
            <pm-button type="warning" plain>警告按钮</pm-button>
            <pm-button type="danger" plain>危险按钮</pm-button>
        </div>
        <div class="pm-row">
            <pm-button round>基础按钮</pm-button>
            <pm-button type="primary" round>主要按钮</pm-button>
            <pm-button type="success" round>成功按钮</pm-button>
            <pm-button type="info" round>信息按钮</pm-button>
            <pm-button type="warning" round>警告按钮</pm-button>
            <pm-button type="danger" round>危险按钮</pm-button>
        </div>
    </div>
</template>
```

:::

:::snippet

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态

```html

<template>
    <div>
        <pm-button :loading="true">基础按钮</pm-button>
        <pm-button :loading="loading" type="primary" @click="handleClick">主要按钮</pm-button>
        <pm-button :loading="loading" type="success" @click="handleClick">成功按钮</pm-button>
        <pm-button :loading="loading" type="info" @click="handleClick">信息按钮</pm-button>
        <pm-button :loading="loading" type="warning" @click="handleClick">警告按钮</pm-button>
        <pm-button :loading="loading" type="danger" @click="handleClick">危险按钮</pm-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                loading: false
            }
        },
        methods: {
            handleClick () {
                this.loading = true;
            }
        }
    }
</script>
```

:::

:::snippet

### 图标按钮

设置`icon`属性即可，`icon` 的列表可以参考 Pm-ui 的 `icon` 组件，也可以设置在文字右边的 `icon` ，只要使用i标签即可，可以使用自定义图标

```html

<template>
    <div>
        <pm-button type="primary" icon="pm-icon-edit"></pm-button>
        <pm-button type="primary" icon="pm-icon-delete"></pm-button>
        <pm-button type="primary" icon="pm-icon-edit">编辑</pm-button>
        <pm-button type="primary">删除<i class="pm-icon-delete pm-icon--right"></i></pm-button>
    </div>
</template>
```

:::

:::snippet

### 禁用按钮

按钮不可用状态

```html

<template>
    <div>
        <pm-button disabled>基础按钮</pm-button>
        <pm-button type="primary" disabled>主要按钮</pm-button>
        <pm-button type="success" disabled="disabled">成功按钮</pm-button>
        <pm-button type="info" :disabled="true">信息按钮</pm-button>
        <pm-button type="warning" disabled>警告按钮</pm-button>
        <pm-button type="danger" disabled>危险按钮</pm-button>
    </div>
</template>
```

:::

:::snippet

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸

```html

<template>
    <div>
        <div class="pm-row">
            <pm-button>基础按钮</pm-button>
            <pm-button size="medium">中等按钮</pm-button>
            <pm-button size="small">小型按钮</pm-button>
            <pm-button size="mini">超小按钮</pm-button>
        </div>
        <div class="pm-row">
            <pm-button round>基础按钮</pm-button>
            <pm-button size="medium" round>中等按钮</pm-button>
            <pm-button size="small" round>小型按钮</pm-button>
            <pm-button size="mini" round>超小按钮</pm-button>
        </div>
        <div class="pm-row">
            <pm-button icon="pm-icon-edit" circle></pm-button>
            <pm-button icon="pm-icon-edit" circle size="medium"></pm-button>
            <pm-button icon="pm-icon-edit" circle size="small"></pm-button>
            <pm-button icon="pm-icon-edit" circle size="mini"></pm-button>
        </div>
    </div>
</template>
```

:::

:::snippet 通过 `pm-button-group`组件包裹

### 按钮组

以按钮组的方式出现，常用于多项类似操作

```html

<template>
    <div>
        <div class="pm-row">
            <pm-button-group>
                <pm-button type="primary" icon="pm-icon-arrow-left">上一页</pm-button>
                <pm-button type="primary">下一页<i class="pm-icon-arrow-right pm-icon--right"></i></pm-button>
            </pm-button-group>
            <pm-button-group>
                <pm-button type="primary" icon="pm-icon-edit"></pm-button>
                <pm-button type="primary"><i class="pm-icon-share"></i></pm-button>
                <pm-button type="primary"><i class="pm-icon-delete"></i></pm-button>
            </pm-button-group>
        </div>
    </div>
</template>
```

:::

:::snippet 防抖或节流，具体请查看API

### 防抖或节流

在实际开发中，需要防止用户重复点击，需要做到防抖或者节流，

> 防抖 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法，默认200毫秒

> 节流 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数，默认1000毫秒

```html

<template>
    <div>
        <div class="pm-row">
            <pm-button @click="handleClick1()" type="primary">连续点击-无防抖、五节流{{num1}}</pm-button>
            <pm-button debounce @click="handleClick2()" type="primary">连续点击-测试防抖{{num2}}</pm-button>
            <pm-button throttle @click="handleClick3()" type="primary">连续点击-测试节流{{num3}}</pm-button>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                num1: 0,
                num2: 0,
                num3: 0,
            }
        },
        methods: {
            handleClick1 () {
                this.num1 += 1;
            },
            handleClick2 () {
                this.num2 += 1;
            },
            handleClick3 () {
                this.num3 += 1;
            }
        }
    }
</script>
```

:::

## API

::: api

### Props

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| type | 类型 | string | primary / success / warning / danger / info / text| - |
| plain | 是否朴素按钮 | boolean | - | false |
| round | 是否圆角按钮 | boolean | - | false |
| circle | 是否圆形按钮 | boolean | - | false |
| loading | 是否加载中状态 | boolean | - | false |
| disabled | 是否禁用状态 | boolean | - | false |
| icon | 图标类名 | string | - | - |
| size | 尺寸 | string | medium / small / mini | - |
| native-type | 原生 type 属性 | string | button / submit / reset | - |
| debounced | 点击防抖 | boolean/object | true / {awit:200,leading:true,trailing:false}，参考[debounce](https://www.lodashjs.com/docs/lodash.debounce) | false |
| throttle | 点击节流 | boolean/object | true / {awit:1000,leading:true,trailing:false}，参考[throttle](https://www.lodashjs.com/docs/lodash.throttle) | false |

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
