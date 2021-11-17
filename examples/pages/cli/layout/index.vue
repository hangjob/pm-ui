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

</style>
