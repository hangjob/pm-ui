<template>
    <div id="app">
        <PmTop/>
        <div>
            <Preview/>
        </div>
    </div>
</template>

<script>
import Preview from './preview'
export default {
    name: 'App',
    components:{
        Preview
    }
}
</script>
<style lang="less" scoped>
#app{
    min-width: 1680px;
}
</style>
