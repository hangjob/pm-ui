<template>
    <div style="margin-top: 20px">
        <pm-doc-card>
            <div class="pm-doc-intro">
                <img src="@/assets/images/logo-l.png" alt="">
                <h2>Pm-ui</h2>
                <p>一款品茗企业的轻量、可靠 UI 组件库</p>
            </div>
        </pm-doc-card>
        <pm-doc-card>
            <h3 class="title">介绍</h3>
            <p>
                <strong>Pm-ui</strong>，Pm为品茗拼音首字母的缩写，
                <a href="https://www.pminfo.cn/" target="_blank">杭州品茗信息有限公司</a>
                前端框架UI，风格统一问题，形成品茗信息的一套企业UI规范。
                <br>
                <br>
            </p>
            <p>
                构建风格，参考<a href="https://element.eleme.cn/#/zh-CN" target="_blank">Element-ui</a>、<a
                href="https://vant-contrib.gitee.io/vant/#/zh-CN/">Vant</a>、<a
                href="https://antdv.com/docs/vue/introduce-cn/">Ant-Design-Vue</a>
            </p>
        </pm-doc-card>
        <pm-doc-card>
            <h3 class="title">特性</h3>
            <ol>
                <li>提炼自企业级中后台产品的交互语言和视觉风格</li>
                <li>提供 60 多个高质量组件，覆盖移动端各类场景</li>
                <li>单元测试覆盖率 70%+，提供稳定性保障</li>
                <li>全局引入</li>
                <li>支持主题定制</li>
                <li>支持按需引入</li>
                <li>支持 Vue 2 & Vue 3</li>
            </ol>
        </pm-doc-card>
        <pm-doc-card>
            <h3 class="title">支持环境</h3>
            <p>支持现代浏览器</p>
        </pm-doc-card>
        <pm-doc-card>
            <h3 class="title">贡献代码</h3>
            <p>代码贡献之前，务必阅读过<a href="https://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html" target="_blank">如何有效地报告
                Bug</a>、<a href="https://github.com/seajs/seajs/issues/545">如何向开源社区提问题</a>、<a
                href="https://zhuanlan.zhihu.com/p/25795393">如何向开源项目提交无法解答的问题</a></p>
            <p>使用过程中发现任何问题都可以提 <a href="https://github.com/hangjob/pm-ui" target="_blank">Issue</a> 给我们，当然，也可以<a
                href="https://www.vipbic.com/" target="_blank">@我</a></p>
        </pm-doc-card>
    </div>
</template>

<script>
export default {
    name: 'Home',
    componentTitle: '首页',
}
</script>

<style lang="less" scoped>
.pm-doc-intro {
    padding-top: 20px;
    text-align: center;

    img {
        width: 120px;
        height: 120px;
    }

    h2 {
        font-size: 28px;
        line-height: 60px;
    }
}
</style>
