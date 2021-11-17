<template>
    <div class="preview">
        <section class="section">
            <div class="des">
                <h3>Pm-ui 的样式变量</h3>
                <p> pm-ui 的样式使用了 <a href="https://lesscss.org/" target="_blank">Less</a> 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整</p>
                <p>所有样式变量可以在 <a href="http://192.168.1.200/secrets/pm-ui/blob/develop/packages/style/common/var.less" target="_blank">这里</a> 找到</p>
            </div>
            <basicTokensPreview/>
        </section>
        <aside class="aside">
1
        </aside>
    </div>
</template>

<script>
import  basicTokensPreview from './basic-preview'
export default {
    components:{
        basicTokensPreview
    }
}
</script>
<style lang="less">
html,body{
    background-color: #FFFFFF !important;
}
.preview{
    display: flex;
    flex: 1;
    max-width: 1480px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    box-sizing: border-box;
    padding-top: 30px;
    .section{
        width: 75%;
        .des{
            h3{
                font-size: 24px;
                margin-bottom: 10px;
            }
            p{
                font-size: 14px;
            }
            margin-bottom: 20px;
        }
    }
    .aside{
        width: 25%;
        overflow: hidden;
        background: #f5f7fa;
        border: 1px solid #ebeef5;
        border-radius: 5px;
        margin-bottom: 20px;
    }
}
</style>
