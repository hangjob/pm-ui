<template>
    <div>
        <pm-doc-card>
            <pm-button>按钮</pm-button>
            <pm-button type="success">按钮</pm-button>
        </pm-doc-card>
        <MdButton></MdButton>
    </div>
</template>
<script>
import MdButton from './index.md'
export default {
    name: 'Button',
    components:{
        MdButton
    }
}
</script>
<style lang="less" scoped>

</style>