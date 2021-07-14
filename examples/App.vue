<template>
    <div id="app">
        <!--        <pm-button>默认按钮</pm-button>-->
        <!--        <pm-button type="primary">主要按钮</pm-button>-->
        <!--        <pm-button type="success">成功按钮</pm-button>-->
        <!--        <pm-button type="info">信息按钮</pm-button>-->
        <pm-row type="flex" class="row-bg">
            <pm-col :span="6">
                <div class="grid-content bg-purple"></div>
            </pm-col>
            <pm-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </pm-col>
            <pm-col :span="6">
                <div class="grid-content bg-purple"></div>
            </pm-col>
        </pm-row>
        <pm-row type="flex" class="row-bg" justify="center">
            <pm-col :span="6">
                <div class="grid-content bg-purple"></div>
            </pm-col>
            <pm-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </pm-col>
            <pm-col :span="6">
                <div class="grid-content bg-purple"></div>
            </pm-col>
        </pm-row>
        <pm-row type="flex" class="row-bg" justify="end">
            <pm-col :span="6">
                <div class="grid-content bg-purple"></div>
            </pm-col>
            <pm-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </pm-col>
            <pm-col :span="6">
                <div class="grid-content bg-purple"></div>
            </pm-col>
        </pm-row>
        <pm-row type="flex" class="row-bg" justify="space-between">
            <pm-col :span="6">
                <div class="grid-content bg-purple"></div>
            </pm-col>
            <pm-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </pm-col>
            <pm-col :span="6">
                <div class="grid-content bg-purple"></div>
            </pm-col>
        </pm-row>
        <pm-row type="flex" class="row-bg" justify="space-around">
            <pm-col :span="6">
                <div class="grid-content bg-purple"></div>
            </pm-col>
            <pm-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </pm-col>
            <pm-col :span="6">
                <div class="grid-content bg-purple"></div>
            </pm-col>
        </pm-row>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>
<style lang="less">
.pm-row {
    &:last-child {
    margin-bottom: 0;
}

}
.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
