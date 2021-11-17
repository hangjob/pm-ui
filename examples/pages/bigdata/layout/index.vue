<template>
    <div class="bigdata">
        <PmTop/>
        <div class="bigdata-container">
            <pm-row>
                <router-view/>
            </pm-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
}
</script>

<style lang="less" scoped>
.bigdata {
    &-container {
        padding: 30px 180px;
    }
}
</style>
