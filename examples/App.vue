<template>
    <div id="app">
        <pm-button>默认按钮</pm-button>
        <pm-button type="primary">主要按钮</pm-button>
        <pm-button type="success">成功按钮</pm-button>
        <pm-button type="info">信息按钮</pm-button>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
