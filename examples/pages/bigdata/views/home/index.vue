<template>
    <div class="home">
        <template v-for="(item,index) in items">
            <biddata-card :key="index">
                <component :is="item.name"></component>
            </biddata-card>
        </template>
    </div>
</template>
<script>
export default {
    data () {
        return {
            items: [
                { name: 'histogram1' }, { name: 'histogram2' }, { name: 'histogram3' },
                { name: 'histogram4' }, { name: 'histogram5' }, { name: 'histogram6' },
                { name: 'histogram7' },
            ],
        }
    },
    created () {

    },
    methods: {
    },
}
</script>
<style>
.histogram{
    width: 100%;
}
</style>
<style scoped lang="less">
.home {
    column-count: 2;
    column-gap: 0;
    counter-reset: item-counter;
}
</style>
