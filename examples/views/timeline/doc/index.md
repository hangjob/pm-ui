## Timeline 时间轴

:::snippet 垂直展示的时间流信息

### 基础用法

```html

<template>
    <pm-row>
        <PmTimeline>
            <pm-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp">
                {{ activity.content }}
            </pm-timeline-item>
        </PmTimeline>
    </pm-row>
</template>
<script>
    export default {
        data () {
            return {
                reverse: true,
                activities: [
                    {
                        content: '创建服务现场',
                        timestamp: '2021-09-15',
                    }, {
                        content: '初步排除网络异常',
                        timestamp: '2021-10-15',
                    }, {
                        content: '技术测试异常',
                        timestamp: '2021-11-15',
                    },
                    {
                        content: '技术排查检测通过',
                        timestamp: '2021-11-20',
                    }],
            }
        },
    }
</script>
```

:::

:::snippet 适用于快递显示不同的状态

### ⾃定义节点样式

```html

<template>
    <pm-row>
        <PmTimeline>
            <pm-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :color="activity.color"
                :size="activity.size"
                :hide-timestamp="false"
                placement="top"
                :timestamp="activity.timestamp">
                {{ activity.content }}
            </pm-timeline-item>
        </PmTimeline>
    </pm-row>
</template>
<script>
    export default {
        data () {
            return {
                reverse: true,
                activities: [
                    {
                        content: '创建iPhone13 pro max订单',
                        timestamp: '2021-09-24 10:00:00',
                        icon: 'pm-icon-gongju-zhuti',
                        color: 'pink',
                        size: 'large'
                    }, {
                        content: '顺风快递收揽快件，已揽收',
                        timestamp: '2021-09-25 10:20:00',
                        icon: 'pm-icon-gongju-zhuti',
                        color: 'red',
                        size: 'large'
                    }, {
                        content: '顺风快递已送出上海，正在前往目的地杭州',
                        timestamp: '2021-09-26 10:30:00',
                        icon: 'pm-icon-chakan',
                        color: 'blue',
                        size: 'large'
                    },
                    {
                        content: '包裹已到达，快速员正在配送中，预计3小时候到达',
                        timestamp: '2021-09-27 10:30:00',
                        icon: 'pm-icon-tubiao',
                        color: 'green',
                        size: 'large'
                    }],
            }
        },
    }
</script>
```

:::

:::snippet

### 自定义solt插槽

```html

<template>
    <pm-row>
        <PmTimeline>
            <pm-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :border="activity.border">
                {{ activity.content }} - {{ activity.timestamp }}
            </pm-timeline-item>
        </PmTimeline>
    </pm-row>
</template>
<script>
    export default {
        data () {
            return {
                reverse: true,
                activities: [
                    {
                        content: '创建iPhone13 pro max订单',
                        timestamp: '2021-09-24 10:00:00',
                        border: '2px solid pink',
                    }, {
                        content: '顺风快递收揽快件，已揽收',
                        timestamp: '2021-09-25 10:20:00',
                        border: '2px solid red',
                    }, {
                        content: '顺风快递已送出上海，正在前往目的地杭州',
                        timestamp: '2021-09-26 10:30:00',
                        border: '2px solid blue',
                    },
                    {
                        content: '包裹已到达，快速员正在配送中，预计3小时候到达',
                        timestamp: '2021-09-27 10:30:00',
                        border: '2px solid green',
                    }],
            }
        },
    }
</script>
```

:::

## API

::: api

### Props

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| timestamp | 时间 | string | - | - |
| hide-timestamp | 是否显示时间 | boolean | - | false |
| placement | 时间戳位置 | top / bottom | - | bottom |
| type | 节点类型 | string | primary / success / warning / danger / info |  - |
| color | 节点颜色 | string | - | - |
| size | 节点尺寸 | string | normal / large | normal |
| icon | 节点图标 | string | - | - |
| border | 节点边框 | string | - | - |

:::

:::api

### Slots

| 名称 | 说明     |
| ---- | -------- |
| —    | 内容 |

:::
