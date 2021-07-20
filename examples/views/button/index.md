## Button 按钮
:::snippet 通过 `pm-button` 标签初始化按钮。
```html
<template>
    <div>
        <h3>基础用法</h3>
        <pm-button>基础用法</pm-button>
        <pm-button type="primary">主要按钮</pm-button>
        <pm-button type="success">成功按钮</pm-button>
        <pm-button type="info">信息按钮</pm-button>
        <pm-button type="warning">警告按钮</pm-button>
        <pm-button type="danger" @click="handleClick">危险按钮</pm-button>
    </div>
</template>
<script>
    export default  {
        methods:{
            handleClick(){
                alert(1)
            }
        }
    }
</script>
```

:::

## 文本设置

:::snippet 通过 `text` 设置按钮文本。

```html

<template>
    <div>
        <pm-button text="Default"></pm-button>
    </div>
</template>
```

:::

## 事件绑定

:::snippet 绑定 `click` 事件。

```html

<template>
    <div>
        <pm-button text="Default" @click="handleButtonClick"></pm-button>
    </div>
</template>

<script>
    export default {
        methods: {
            handleButtonClick () {
                alert(1);
            },
        },
    };
</script>
```

:::

## JSX 语法支持

:::snippet 示例代码支持`jsx`渲染。

```html

<script>
    export default {
        render () {
            return (
                    <div>
                        <pm-button
                                text="Default"
                                onClick={() => {
                                    this.handleButtonClick();
                                }}
                        ></pm-button>
                    </div>
            );
        },
        methods: {
            handleButtonClick () {
                alert(1);
            },
        },
    };
</script>
```

:::

## Button Attributes

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| text | 按钮文本 | String | —      | —      |

## Button Events

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| click    | 单击触发 | event    |

## Button Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 按钮内容 |
