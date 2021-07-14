<template>
    <div>
        <PmTop></PmTop>
        <PmNav></PmNav>
        <div class="pm-doc-container">
            <div class="pm-doc-content pm-doc-content--theme">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import PmTop from '@/components/pm-top'
import PmNav from '@/components/pm-nav'
export default {
    components:{
        PmTop,
        PmNav
    },
    name: 'index.vue',
}
</script>

<style lang="less" scoped>
.pm-doc-container{
    width: 1680px;
    margin: 20px auto 0 auto;
    box-sizing: border-box;
    padding-left: 300px;
    overflow: hidden;
    padding-right: 200px;
    .pm-doc-content{
        background-color: #dddddd;
    }
}
</style>