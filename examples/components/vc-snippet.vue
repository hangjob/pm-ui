<template>
    <div class="vc-snippet vc-snippet-card">
        <div class="vc-snippet--demo">
            <slot name="explain"/>
            <!-- 代码生成vue示例 -->
            <slot name="source"/>
        </div>
        <div class="vc-snippet--desc">
            <!-- 示例描述说明 -->
            <slot name="desc"/>
            <span class="vc-snippet--icon-code" @click="showCode = !showCode">
                <img alt="code" :src="codeIconSrc"/>
            </span>
        </div>
        <div v-show="showCode" class="vc-snippet--code">
            <!-- 示例代码高亮显示 -->
            <slot name="code"/>
        </div>
    </div>
</template>

<script>

export default {
    name: 'VcSnippet',
    data () {
        return {
            showCode: false,
        }
    },
    computed: {
        codeIconSrc () {
            return this.showCode
                ? 'https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg'
                : 'https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg'
        },
    },
    mounted () {

    },
    methods: {},
}
</script>

<style lang="less" scoped>

.vc-snippet--demo {
    box-sizing: border-box;
    padding: 24px;
    color: #333333;
    border-bottom: 1px solid #ebedf0;
    font-size: 12px;
}

.vc-snippet--desc {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    min-height: 44px;
    padding: 10px 50px 10px 20px;
    font-size: 14px;
    transition: background-color 0.4s;
    line-height: 1.8;

    code {
        display: inline;
        margin: 0 2px;
        padding: 2px 5px;
        font-size: 14px;
        font-family: inherit;
        word-break: keep-all;
        background-color: #f7f8fa;
        border-radius: 4px;
        -webkit-font-smoothing: antialiased;
        position: relative;
        overflow-x: auto;
        color: #58727e;
        font-weight: 400;
        line-height: 26px;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
}

.vc-snippet--icon-code {
    position: absolute;
    right: 16px;
    bottom: 13px;
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    cursor: pointer;

    > img {
        width: 18px;
        height: 18px;
    }
}

.vc-snippet--code {
    box-sizing: border-box;
    border-top: 1px solid #ebedf0;
}

.vc-snippet--code /deep/ {
    code {
        background-color: #fff;
        font-family: Consolas, Menlo, Courier, monospace;
        border: none;
        display: block;
        font-size: 14px;
        padding: 20px;
        line-height: 1.5;
    }

    .hljs {
        padding: 0;
        margin: 0;
        background-color: #fff;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }
}
</style>