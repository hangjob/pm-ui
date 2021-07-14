<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'PmDocCard',
}
</script>

<style scoped lang="less">
.card{
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 8px 12px #ebedf0;
}
</style>