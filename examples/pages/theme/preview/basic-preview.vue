<template>
    <div class="component-preview">
        <h4>颜色</h4>
        <div class="color">
            <pm-row :gutter="12">
                <pm-col :span="4" v-for="(color, key) in colorLine" :key="key">
                    <div class="demo-color-box" :style="{ background: dataProxy(color) }">
                        {{ color }}
                        <div class="value">{{ dataProxy(color) }}</div>
                        <div class="bg-color-sub">
                            <div
                                class="bg-success-sub-item"
                                v-for="(item, key) in Array(2)"
                                :key="key"
                                :style="{ background: tintColor(dataProxy(color), (key + 8) / 10) }"
                            ></div>
                        </div>
                    </div>
                </pm-col>
            </pm-row>
            <pm-row :gutter="12">
                <pm-col :span="4">
                    <div class="demo-color-box demo-color-box-other" :style="{ background: color_text_primary }">
                        Primary Text
                        <div class="value">{{ color_text_primary }}</div>
                    </div>
                </pm-col>
                <pm-col :span="4">
                    <div class="demo-color-box demo-color-box-other" :style="{ background: color_text_regular }">
                        Regular Text
                        <div class="value">{{ color_text_regular }}</div>
                    </div>
                </pm-col>
                <pm-col :span="4">
                    <div class="demo-color-box demo-color-box-other" :style="{ background: color_text_secondary }">
                        Secondary Text
                        <div class="value">{{ color_text_secondary }}</div>
                    </div>
                </pm-col>
                <pm-col :span="4">
                    <div class="demo-color-box demo-color-box-other" :style="{ background: color_text_placeholder }">
                        Placeholder
                        <div class="value">{{ color_text_placeholder }}</div>
                    </div>
                </pm-col>
            </pm-row>

            <pm-row :gutter="12">
                <pm-col :span="4">
                    <div
                        class="demo-color-box demo-color-box-other demo-color-box-lite"
                        :style="{ background: border_color_base }"
                    >
                        Border Base
                        <div class="value">{{ border_color_base }}</div>
                    </div>
                </pm-col>
                <pm-col :span="4">
                    <div
                        class="demo-color-box demo-color-box-other demo-color-box-lite"
                        :style="{ background: border_color_light }"
                    >
                        Border Light
                        <div class="value">{{ border_color_light }}</div>
                    </div>
                </pm-col>
                <pm-col :span="4">
                    <div
                        class="demo-color-box demo-color-box-other demo-color-box-lite"
                        :style="{ background: border_color_lighter }"
                    >
                        Border Lighter
                        <div class="value">{{ border_color_lighter }}</div>
                    </div>
                </pm-col>
                <pm-col :span="4">
                    <div
                        class="demo-color-box demo-color-box-other demo-color-box-lite"
                        :style="{ background: border_color_extra_light }"
                    >
                        Border Extralight
                        <div class="value">{{ border_color_extra_light }}</div>
                    </div>
                </pm-col>
            </pm-row>

            <pm-row :gutter="12">
                <pm-col :span="4">
                    <div class="demo-color-box demo-color-box-other" :style="{ background: color_black }">
                        Background B
                        <div class="value">{{ color_black }}</div>
                    </div>
                </pm-col>
                <pm-col :span="4">
                    <div
                        class="demo-color-box demo-color-box-other"
                        :style="{ background: color_white, color: '#303133', border: '1px solid #eee' }"
                    >
                        Background W
                        <div class="value">{{ color_white }}</div>
                    </div>
                </pm-col>
                <pm-col :span="4">
                    <div class="demo-color-box demo-color-box-other bg-transparent">
                        Background
                        <div class="value">Transparent</div>
                    </div>
                </pm-col>
            </pm-row>
        </div>
        <h4>段落</h4>
        <pm-row :gutter="12">
            <pm-col :span="6" class="heading">
                <div :style="{ fontSize: font_size_extra_large }">Heading1</div>
                <div :style="{ fontSize: font_size_large }">Heading2</div>
                <div :style="{ fontSize: font_size_medium }">Heading3</div>
                <div :style="{ fontSize: font_size_base }">Heading4</div>
                <div :style="{ fontSize: font_size_small }">Heading5</div>
                <div :style="{ fontSize: font_size_extra_small }">Heading6</div>
            </pm-col>
            <pm-col :span="9">
                <div class="title">段落正文例子</div>
                <p
                    class="paragraph"
                    :style="{
                        fontSize: font_size_base,
                        fontWeight: font_weight_primary,
                        lineHeight: font_line_height_primary
                      }">
                    杭州品茗信息技术有限公司是一家致力于打造国内领先的公共资源交易信息化领域的高科技企业。公司位于享有中国“硅谷”之称的天堂软件园杭州国家软件产业基地.</p>
            </pm-col>
            <pm-col :span="9">
                <div class="title">段落正文例子</div>
                <p
                    class="paragraph"
                    :style="{
                        fontSize: font_size_small,
                        fontWeight: font_weight_secondary,
                        lineHeight: font_line_height_secondary
                      }">展望未来，我们将一如既往地专注在公共资源交易信息化领域，竭尽全力，推动我国公共资源交易信息化事业全面进入互联网+时代</p>
            </pm-col>
        </pm-row>
    </div>
</template>

<script>

const original = {
    'color_primary': '#409EFF',
    'color_success': '#67C23A',
    'color_warning': '#E6A23C',
    'color_danger': '#F56C6C',
    'color_info': '#909399',
    'color_white': '#FFFFFF',
    'color_black': '#000000',
    'color_text_primary': '#303133',
    'color_text_regular': '#606266',
    'color_text_secondary': '#909399',
    'color_text_placeholder': '#C0C4CC',
    'border_color_base': '#DCDFE6',
    'border_color_light': '#E4E7ED',
    'border_color_lighter': '#EBEEF5',
    'border_color_extra_light': '#F2F6FC',
    'font_size_extra_large': '20px',
    'font_size_large': '18px',
    'font_size_medium': '16px',
    'font_size_base': '14px',
    'font_size_small': '13px',
    'font_size_extra_small': '12px',
    'font_weight_primary': 500,
    'font_weight_secondary': 100,
    'font_line_height_primary': '24px',
    'font_line_height_secondary': '16px',
}
const tintColor = (c, tint) => {
    const color = c.replace('#', '')
    let red = parseInt(color.slice(0, 2), 16)
    let green = parseInt(color.slice(2, 4), 16)
    let blue = parseInt(color.slice(4, 6), 16)

    if (tint === 0) { // when primary color is in its rgb space
        return [red, green, blue].join(',')
    }
    else {
        red += Math.round(tint * (255 - red))
        green += Math.round(tint * (255 - green))
        blue += Math.round(tint * (255 - blue))
        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)
        return `#${red}${green}${blue}`
    }
}

export default {
    created () {

    },
    mounted () {
        this.setGlobal();
    },
    methods: {
        tintColor (a, b) {
            return tintColor(a, b)
        },
        dataProxy (value) {
            return this[`color_${value.toLowerCase()}`]
        },
        setGlobal () {
            this.global = {"$--color-primary":"#409EFF"}
        },
    },
    watch: {
        global: {
            immediate: true,
            handler (value) {
                Object.keys(original).forEach((v) => {
                    const key = `$--${v.replace(/_/g, '-')}`
                    if (value[key]) {
                        this[v] = value[key]
                    }
                    else {
                        this[v] = original[v]
                    }
                })
            },
        },
    },
    data () {
        return {
            global: {},
            colorLine: ['Primary', 'Success', 'Warning', 'Danger', 'Info'],
            'color_primary': '',
            'color_success': '',
            'color_warning': '',
            'color_danger': '',
            'color_info': '',
            'color_white': '',
            'color_black': '',
            'color_text_primary': '',
            'color_text_regular': '',
            'color_text_secondary': '',
            'color_text_placeholder': '',
            'border_color_base': '',
            'border_color_light': '',
            'border_color_lighter': '',
            'border_color_extra_light': '',
            'font_size_extra_large': '',
            'font_size_large': '',
            'font_size_medium': '',
            'font_size_base': '',
            'font_size_small': '',
            'font_size_extra_small': '',
            'font_weight_primary': 0,
            'font_weight_secondary': 0,
            'font_line_height_primary': '',
            'font_line_height_secondary': '',
        }
    },
}
</script>


<style lang="less">
.component-preview{
    h4{
        font-size: 22px;
        margin-top: 10px;
        margin-bottom: 10px;
        color: #333333;
    }
}
</style>
<style lang="less" scoped>
.component-preview {
    width: 100%;
    .heading > div {
        margin-bottom: 15px;
    }

    .title {
        font-size: 18px;
        font-weight: 400;
        padding: 0 20px
    }

    .paragraph {
        padding: 0 20px
    }

    .demo-color-box {
        margin: 0;
    }

    .color {
    }

    .demo-color-box {
        position: relative;
        border-radius: 4px;
        padding: 20px;
        margin: 5px 0;
        height: 114px;
        box-sizing: border-box;
        color: #fff;
        font-size: 14px;

        & .value {
            font-size: 12px;
            opacity: 0.69;
            line-height: 24px;
        }
    }

    .demo-color-box-other {
        height: 74px;
        margin: 10px 0 !important;
        border-radius: 4px 4px 4px 4px !important;
        padding: 15px 20px;
    }

    .demo-color-box-group {
        .demo-color-box {
            border-radius: 0;
            margin: 0;
        }

        .demo-color-box:first-child {
            border-radius: 4px 4px 0 0;
        }

        .demo-color-box:last-child {
            border-radius: 0 0 4px 4px;
        }
    }

    .bg-color-sub {
        width: 100%;
        height: 40px;
        left: 0;
        bottom: 0;
        position: absolute;
        border-radius: 0 0 4px 4px;
    }

    .bg-blue-sub-item {
        width: 11.1111111%;
        height: 100%;
        display: inline-block;
    }

    .bg-blue-sub-item:first-child {
        border-radius: 0 0 0 4px;
    }

    .bg-success-sub-item {
        width: 50%;
        height: 100%;
        display: inline-block;
    }

    .bg-success-sub-item:first-child {
        border-radius: 0 0 0 4px;
    }

    .bg-success-sub-item:last-child {
        border-radius: 0 0 4px 0;
    }

    .bg-transparent {
        border: 1px solid #fcc3c3;
        color: #303133;
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M0 98 L100 0 L100 1 L1 98' fill='%23FCC3C3' /></svg>");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%, auto;
    }

    .demo-color-box-lite {
        color: #303133;
    }

}
</style>
