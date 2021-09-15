<template>
    <div class="bigdata">
        <PmTop/>
        <PmNav/>
        <div class="pm-doc-container">
            <div class="pm-doc-content pm-doc-content--theme">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import nav from './nav'

export default {
    name: 'index',
    components: {
        PmNav: nav,
    },
}
</script>

<style lang="less" scoped>
.pm-doc-container {
    width: 1680px;
    margin: 0px auto 0 auto;
    box-sizing: border-box;
    padding-left: 310px;
    overflow: hidden;
    padding-right: 200px;
}
</style>
