<!--
 * @Descripttion: 修改了一些内容
 * @version: v1.0
 * @Author: htt
 * @Date: 2022-03-04 10:30:46
 * @LastEditors: htt
 * @LastEditTime: 2022-03-04 16:54:05
-->
## Card 卡片
将信息聚合在卡片容器中展示。

:::snippet Card 组件包括header和body部分，header部分需要有显式具名 slot 分发，同时也是可选的。

### 基础用法
包含标题，内容和操作。

```html
<template>
    <pm-card class="box-card">
        <div slot="header" class="card-header">
            <span>卡片信息</span>
            <pm-button  style="float: right; padding: 5px 0" type="text">操作按钮</pm-button>
        </div>
        <div class="card-item" v-for="i in 5" :key="i">
            这是第 {{i}} 条内容
        </div>
    </pm-card>
</template>

<style>
    .box-card {
        width: 480px;
        font-size: 14px
    }

    .card-header:before,
    .card-header:after {
        display: table;
        content: "";
    }

    .card-header:after {
        clear: both
    }

    .card-item {
        font-size: 14px;
        margin-bottom: 18px;
    }
</style>
```


:::
:::snippet

### 简单卡片

简单的卡片只有内容区域。

```html
<template>
    <pm-card class="box-card">
        <div class="card-item" v-for="i in 5" :key="i">
            这是第 {{i}} 条内容
        </div>
    </pm-card>
</template>

<style>
    .box-card {
        width: 480px;
        font-size: 14px
    }

   .card-item {
        font-size: 14px;
        margin-bottom: 18px;
   }
</style>
```


:::
:::snippet

### 带图片的卡片

可配置更多的内容展示。

```html
<template>
    <pm-row>
        <pm-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0"
        >
            <pm-card :body-style="{ padding: '0px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="card-image">
                <div style="padding: 15px;">
                    <span class="card-text">好吃的汉堡</span>
                    <div class="clearfix">
                        <time class="card-time">{{ currentDate }}</time>
                        <pm-button type="text" class="card-button">操作按钮</pm-button>
                    </div>
                </div>
            </pm-card>
        </pm-col>
    </pm-row>
</template>

<style>
    .card-image {
        width: 100%;
        display: block;
    }

    .card-text{
        font-size:16px;
    }

    .clearfix {
        margin-top: 13px;
        line-height: 12px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }

    .card-time {
        color: #999;
    }

    .card-button {
        padding: 0;
        float: right;
    }
</style>

<script>
export default {
  data() {
    return {
      currentDate: "2022-03-04 16:34:47"
    };
  }
}
</script>
```


:::
:::snippet

### 卡片阴影

对阴影的显示进行配置。

```html
<template>
    <pm-row :gutter="12">
        <pm-col :span="8">
            <pm-card shadow="always">
                总是显示
            </pm-card>
        </pm-col>
        <pm-col :span="8">
            <pm-card shadow="hover">
                鼠标悬浮时显示
            </pm-card>
        </pm-col>
        <pm-col :span="8">
            <pm-card shadow="never">
                从不显示
            </pm-card>
        </pm-col>
    </pm-row>
</template>
```

:::

## API

::: api

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header | 设置 header，也可以通过 `slot#header` 传入 DOM | string| — | — |
| body-style | 设置 body 的样式| object| — | { padding: '20px' } |
| shadow | 设置阴影显示时机 | string | always / hover / never | always |

:::