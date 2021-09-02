<template>
    <div class="home">
        <biddata-card>
            <histogram1/>
        </biddata-card>
        <biddata-card>
            <histogram2/>
        </biddata-card>
        <biddata-card>
            <histogram3/>
        </biddata-card>
        <biddata-card>
            <histogram4/>
        </biddata-card>
        <biddata-card>
            <histogram5/>
        </biddata-card>
        <biddata-card>
            <histogram6/>
        </biddata-card>
    </div>
</template>
<script>
export default {
    created () {
        console.log(this.$g2)
        console.log(this.$echarts)
    }
}
</script>
<style scoped lang="less">
.home{

}
</style>
