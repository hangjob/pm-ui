<template>
    <div class="preview">
        <section class="section">
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
