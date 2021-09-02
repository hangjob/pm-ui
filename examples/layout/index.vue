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
import PmNav from '@/components/nav'
export default {
    components:{
        PmNav
    },
    name: 'index.vue',
}
</script>

<style lang="less" scoped>
.pm-doc-container{
    width: 1680px;
    margin: 0px auto 0 auto;
    box-sizing: border-box;
    padding-left: 310px;
    overflow: hidden;
    padding-right: 200px;
    .pm-doc-content{

    }
}
</style>
