## Image 图片
:::snippet 通过 `pm-image` 标签初始化按钮

### 基础用法

```html

<template>
        <div class="image-demo">
                <div class="image-container" v-for="fit in fits" :key="fit">
                    <span class="pm-demonstration">{{ fit }}</span>
                    <pm-image style="width: 100px; height: 100px"
                              :src="url"
                              :fit="fit"></pm-image>
                </div>
        </div>
</template>
<script>
    export default {
        data() {
            return {
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        }
    }
</script>
```

:::

