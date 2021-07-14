<template>
    <div class="pm-doc-nav">
        <div class="pm-doc-nav__group">
            <div class="pm-doc-nav__title">开发指南</div>
            <div class="pm-doc-nav__item">
                <a href=""  class="active">介绍</a>
            </div>
            <div class="pm-doc-nav__item">
                <a href="">快速上手</a>
            </div>
            <div class="pm-doc-nav__item">
                <a href="">更新日志</a>
            </div>
            <div class="pm-doc-nav__item">
                <a href="">样式覆盖</a>
            </div>
            <div class="pm-doc-nav__item">
                <a href="">定制主题</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
}
</script>

<style lang="less" scoped>
.pm-doc-nav::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    background-color: initial;
}
.pm-doc-nav::-webkit-scrollbar-thumb{
    background-color: initial;
    border-radius: 6px;
}
.pm-doc-nav{
    position: fixed;
    left: 0;
    z-index: 1;
    min-width: 220px;
    max-width: 220px;
    padding: 24px 0;
    overflow-y: scroll;
    background-color: #fff;
    box-shadow: 0 8px 12px #ebedf0;
    top: 80px;
    border-radius: 5px;
    .pm-doc-nav__group{
        margin-bottom: 16px;
        padding-left: 6px;
        .pm-doc-nav__title{
            padding: 8px 0 8px 24px;
            color: #455a64;
            font-weight: 600;
            font-size: 15px;
            line-height: 28px;
        }
        .pm-doc-nav__item{
            a{
                display: block;
                margin: 8px 0;
                padding: 8px 0 8px 24px;
                color: #455a64;
                font-size: 14px;
                line-height: 20px;
                transition: color .2s;
            }
            a.active{
                font-weight: 600;
                background-color: #ebfff0;
                border-radius: 999px;
                color: #4fc08d;
            }
        }
    }
}
@media (min-width: 1680px){
    .pm-doc-nav{
        left: 180px;
    }
}
</style>