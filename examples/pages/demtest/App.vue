<template>
    <div id="app">
        <pm-image :src="url"></pm-image>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    },
}
</script>
<style lang="less" scoped>
#app {
    padding: 100px;
}
</style>
