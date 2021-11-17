<template>
    <div class="pm-doc-card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'PmDocCard',
}
</script>

<style scoped lang="less">
.pm-doc-card{
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: 18px;
    box-shadow: 0 6px 10px #ebedf0;
    h3.title{
        margin-bottom: 16px;
        font-weight: 600;
        font-size: 19px;
    }
    >p{
        color: #34495e;
        font-size: 15px;
        line-height: 26px;
        strong{
            color: #000;
        }
        a{
            margin: 0 1px;
            color: #1989fa;
            -webkit-font-smoothing: auto;
        }
        code{
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
    >ul li,>ol li{
        position: relative;
        margin: 5px 0 5px 10px;
        padding-left: 15px;
        color: #34495e;
        font-size: 15px;
        line-height: 26px;
        &::before{
            position: absolute;
            top: 0;
            left: 0;
            box-sizing: border-box;
            width: 6px;
            height: 6px;
            margin-top: 10px;
            border: 1px solid #666;
            border-radius: 50%;
            content: '';
        }
    }
}
</style>
