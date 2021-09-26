<template>
    <div class="index">
        <div class="index-header">
            <PmTop/>
        </div>
        <div class="site-banner">
            <div class="site-banner-bg"
                 :style="{backgroundImage: bg}">
            </div>
            <div class="site-banner-main">
                <div class="site-zfj site-zfj-anim">
                    <img src="@/assets/images/logo-l.png" alt="">
                </div>

                <div class="site-desc site-desc-anim">
                    <p class="web-font-desc">快速开发 Pm-ui</p>
                    <cite style="font-size: 16px;">
                        <p>一款品茗企业的轻量、可靠 UI 组件库</p>
                        <p>Pm为品茗拼音首字母的缩写</p>
                        杭州品茗信息有限公司，前端框架UI，风格统一问题，形成品茗信息的一套企业UI规范。
                    </cite>
                </div>

                <div class="site-download">
                    <a href="/home" class="layui-inline site-down download">
                        <cite><i class="pm-icon-liulanqi"></i></cite>
                        0.3版 演 示
                    </a>
                </div>
                <div class="site-version">
                    <span>当前版本：<cite class="site-showv">v.0.3</cite></span>
                </div>
            </div>
        </div>
        <div class="site-idea">
            <ul class="container clearfix">
                <li>
                    <div class="card">
                        <i class="pm-icon-guide"></i>
                        <h3>Pm-cli</h3>
                        <p>一套完整的品茗前端项目脚手架，为搭建前端应用快速开发，自动生成的项目模板。</p>
                        <a href="/cli/home">查看详情</a>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <i class="pm-icon-zujian"></i>
                        <h3>组件</h3>
                        <p>使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</p>
                        <a href="/home">查看详情</a>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <i class="pm-icon-zhuti"></i>
                        <h3>主题</h3>
                        <p>在线主题编辑器，可视化定制和管理站点主题、组件样式。</p>
                        <a href="/theme">查看详情</a>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <i class="pm-icon-shengtai"></i>
                        <h3>生长</h3>
                        <p>提出的问题能得到有效且及时的解决，帮助开发者更完善的解决技术难题，丰富品茗开发者。</p>
                        <a href="//127.0.0.1:7001" target="_blank">查看详情</a>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <i class="pm-icon-dashuju"></i>
                        <h3>大数据</h3>
                        <p>基于<code>Echarts</code>、<code>G2</code>等等去解决品茗前端图表数据的可视化应用，组件封装，让开发者也能快速理解</p>
                        <a href="/bigdata/home">查看详情</a>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <i class="pm-icon-fuzhi"></i>
                        <h3>业务组件</h3>
                        <p>符合目前企业通用的业务组件、或者组件的业务相关逻辑，解决目前前端快速开发，比如上传组件、分页、图片预览、表单提交...</p>
                        <a href="">查看详情</a>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <i class="pm-icon-gongju-zhuti"></i>
                        <h3>前端工具(Pm-utils)</h3>
                        <p>在项目开发过程中的遇到的好的方法或者工具，形成品茗统一的工具库，比如请求封装、正则表达式、复杂数据查找、数据加密...</p>
                        <a href="">查看详情</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
const bg = require('@/assets/images/bg.jpg')
export default {
    data () {
        return {
            bg: `url(${bg})`,
        }
    },
}
</script>
<style lang="less" scoped>
.site-banner-bg {
    background-position: center 0;
}

.site-zfj {
    padding-top: 25px;
    height: 220px;
}

.site-zfj img {
    position: absolute;
    left: 50%;
    top: 50px;
    width: 200px;
    height: 200px;
    margin-left: -100px;
    font-size: 180px;
    color: #c2c2c2;
}

.site-idea {
    margin: 30px auto 110px;
    width: 1140px;

    .container {
        padding: 0;
        margin: 0 -11px;
        width: auto;
        clear: none;

        li {
            width: 25%;
            padding: 0 19px;
            box-sizing: border-box;
            float: left;
            list-style: none;
            margin-bottom: 30px;
            .card {
                width: 100%;
                height: 350px;
                background: #fff;
                border: 1px solid #eaeefb;
                border-radius: 5px;
                box-sizing: border-box;
                text-align: center;
                position: relative;
                transition: all .3s ease-in-out;
                padding: 25px 15px;

                i {
                    font-size: 60px;
                    margin: 20px auto 20px;
                    color: #3F5CE4;
                }

                h3 {
                    font-size: 18px;
                    color: #1f2f3d;
                    font-weight: 400;
                    margin-bottom: 15px;
                }

                p {
                    font-size: 14px;
                    color: #99a9bf;
                    padding: 0 25px;
                    line-height: 20px;
                    text-align: justify;
                }

                a {
                    height: 53px;
                    line-height: 52px;
                    font-size: 14px;
                    color: #409eff;
                    text-align: center;
                    border: 0;
                    border-top: 1px solid #eaeefb;
                    padding: 0;
                    cursor: pointer;
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    background-color: #fff;
                    border-radius: 0 0 5px 5px;
                    transition: all .3s;
                    text-decoration: none;
                    display: block;

                    &:hover {
                        color: #fff;
                        background: #409eff;
                    }
                }
            }
        }
    }
}

@keyframes site-zfj {
    0% {
        opacity: 1;
        transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
    }
    10% {
        opacity: 0.8;
        transform: translate3d(-100px, 0px, 0) rotate(10deg) scale(0.7);
    }
    35% {
        opacity: 0.6;
        transform: translate3d(100px, 0px, 0) rotate(30deg) scale(0.4);
    }
    50% {
        opacity: 0.4;
        transform: translate3d(0, 0, 0) rotate(360deg) scale(0);
    }
    80% {
        opacity: 0.2;
        transform: translate3d(0, 0, 0) rotate(720deg) scale(1);
    }
    90% {
        opacity: 0.1;
        transform: translate3d(0, 0, 0) rotate(3600deg) scale(6);
    }
    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0) rotate(3600deg) scale(1);
    }
}

@keyframes site-desc {
    0% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

.site-desc .web-font-desc {
    color: #fff;
    color: rgba(255, 255, 255, .8);
    font-size: 39px;
}

.site-desc cite {
    font-size: 16px;
    color: #FFFFFF;
    p{
        line-height: 40px;
    }
}

.site-download {
    margin-top: 80px;
    font-size: 0;
}

.site-download a cite {
    position: absolute;
    left: 45px;
    font-size: 30px;
}

.site-download a {
    position: relative;
    height: 60px;
    line-height: 60px;
    padding: 0 45px 0 90px;
    border: 1px solid #c2c2c2;
    border-color: rgba(255, 255, 255, .2);
    font-size: 24px;
    color: #ccc;
    transition: all .5s;
    display: inline-block;
    text-decoration: none;
}

.site-download a:hover {
    border-color: rgba(255, 255, 255, .3);
    color: #fff;
    background-color: rgba(255, 255, 255, .05);
    border-radius: 30px;
}

.site-download a cite {
    position: absolute;
    left: 45px;
    font-size: 30px;
}

.site-version {
    position: relative;
    margin-top: 15px;
    color: #ccc;
    font-size: 12px;
}

.site-version span {
    padding: 0 3px;
}

.site-version * {
    font-style: normal;
}

.site-version a {
    color: #e2e2e2;
    text-decoration: underline;
}

.site-zfj-anim img {
    -webkit-animation-name: site-zfj;
    animation-name: site-zfj;
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
}

.index-header {
    background-color: #393d49;
    border: none;
    height: 60px;
}

.site-banner {
    position: relative;
    height: 600px;
    text-align: center;
    overflow: hidden;

    .site-banner-bg,
    .site-banner-main {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
