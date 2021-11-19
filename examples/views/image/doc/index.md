## Image 图片

:::snippet 通过 `pm-image` 基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。

### 基础用法

```html

<template>
    <div class="image-demo">
        <div class="image-container">
            <pm-image
                width="100"
                height="100px"
                :src="url"></pm-image>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        }
    }
</script>
```

:::
:::snippet 通过 fit 属性可以设置图片填充模式，可选值见下方表格。

### 填充模式

```html

<template>
    <div class="image-demo">
        <div class="image-container" v-for="fit in fits" :key="fit">
            <span class="image-demonstration">{{ fit }}</span>
            <pm-image
                width="100"
                height="100px"
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
:::snippet 通过 round 属性可以设置图片变圆，注意当图片宽高不相等且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。

### 圆形图片

```html

<template>
    <div class="image-demo">
        <div class="image-container" v-for="fit in fits" :key="fit">
            <span class="image-demonstration">{{ fit }}</span>
            <pm-image
                width="100px"
                height="100px"
                :src="url"
                round
                :fit="fit"></pm-image>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                round: true,
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        }
    }
</script>
```

:::
:::snippet 可通过slot = placeholder可自定义占位内容

### 占位内容

```html

<template>
    <pm-row>
        <div class="image-demo__placeholder">
            <div class="image-container">
                <span class="image-demonstration">默认</span>
                <pm-image :src="url" style="width: 300px;height: 200px"></pm-image>
            </div>
            <div class="image-container">
                <span class="image-demonstration">自定义</span>
                <pm-image :src="url" style="width: 300px;height: 200px">
                    <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                    </div>
                </pm-image>
            </div>
        </div>
    </pm-row>

</template>
<script>
    export default {
        data() {
            return {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        }
    }
</script>
```

:::
:::snippet

### 加载中提示

```html

<template>
    <pm-row>
        <div class="image-demo__error">
            <div class="image-container">
                <span class="image-demonstration">默认</span>
                <pm-image style="width: 300px;height: 200px">
                    <div slot="error" class="image-slot">
                        <i class="pm-icon-image"></i>
                    </div>
                </pm-image>
            </div>
            <div class="image-container">

            </div>
        </div>
    </pm-row>

</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
```

:::
:::snippet

### 加载失败提示

```html

<template>
    <pm-row>
        <div class="image-demo__error">
            <div class="image-container">
                <span class="image-demonstration">默认</span>
                <pm-image style="width: 300px;height: 200px"></pm-image>
            </div>
            <div class="image-container">
                <span class="image-demonstration">自定义</span>
                <pm-image style="width: 300px;height: 200px">
                    <div slot="error" class="image-slot">
                        <i class="pm-icon-image--error"></i>
                    </div>
                </pm-image>
            </div>
        </div>
    </pm-row>

</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
```

:::

:::snippet

### 懒加载

```html

<template>
    <div class="image-demo__lazy">
        <pm-image v-for="url in urls" :key="url" :src="url" :width="400" :height="400" :lazy="lazy"></pm-image>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lazy: true,
                urls: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                ]
            }
        }
    }
</script>
```

:::

:::snippet 可通过 previewSrcList 开启预览大图的功能。

### 大图预览

```html

<template>
    <div class="demo-image__preview">
        <pm-image
            style="width: 100px; height: 100px"
            :src="url"
            :preview-src-list="srcList">
        </pm-image>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                ]
            }
        }
    }
</script>
```

:::