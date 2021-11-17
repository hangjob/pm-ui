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
import nav from './nav'
export default {
    components:{
       PmNav:nav
    },
    name: 'index.vue',
}
</script>

<style lang="less" scoped>
</style>
