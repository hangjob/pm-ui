<template>
    <div class="pm-nav">
        <div class="pm-doc-row">
            <div class="pm-doc-row-header__top">
                <a class="pm-doc-row-header__logo" href="/"><img src="@/assets/images/logo.png" alt=""><span>Pm-ui</span></a>
                <ul class="pm-doc-header__top-nav">
                    <li class="pm-doc-header__top-nav-item">
                        <a class="link" target="_blank" href="">脚手架</a>
                    </li>
                    <li class="pm-doc-header__top-nav-item">
                        <a class="link" target="_blank" href="">组件</a>
                    </li>
                    <li class="pm-doc-header__top-nav-item">
                        <a class="link" target="_blank" href="">主题</a>
                    </li>
                    <li class="pm-doc-header__top-nav-item">
                        <a class="link" target="_blank" href="">生长</a>
                    </li>
                    <li class="pm-doc-header__top-nav-item">
                        <a class="link" target="_blank" href="">大数据</a>
                    </li>
                    <li class="pm-doc-header__top-nav-item">
                        <a class="link" target="_blank" href="https://github.com/hangjob/pm-ui"><img src="@/assets/images/github.svg" alt=""></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PmTop',
}
</script>

<style lang="less" scoped>
.pm-nav {
    width: 100%;
    background-color: #0a2c56;
    user-select: none;

    .pm-doc-row {
        .pm-doc-row-header__top {
            height: 60px;
            line-height: 60px;
            padding: 0 180px;
            display: flex;
            align-items: center;

            .pm-doc-row-header__logo {
                font-size: 0;
                & img{
                    width: 36px;
                    margin-right: 12px;
                }
                & span{
                    color: #fff;
                    font-size: 22px;
                }
                & span,& img{
                    display: inline-block;
                    vertical-align: middle;
                }
            }

            .pm-doc-header__top-nav {
                flex: 1;
                font-size: 0;
                text-align: right;
                .pm-doc-header__top-nav-item {
                    position: relative;
                    display: inline-block;
                    margin-left: 60px;
                    vertical-align: top;
                    height: 60px;
                    .link {
                        font-size: 16px;
                        color: #FFFFFF;
                        display: inline-block;
                        vertical-align: top;
                        text-decoration: none;
                        img {
                            display: inline-block;
                            width: 26px;
                            height: 26px;
                            transition: all 0.3s;
                            vertical-align: middle;
                            &:hover {
                                transform: scale(1.2);
                            }
                        }
                    }
                }
            }

        }
    }
}
</style>
