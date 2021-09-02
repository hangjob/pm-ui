<template>
    <div class="biddataCard">
        <div class="action">
            <div class="action-icon">
                <i class="pm-icon-daima"></i>
                <i class="pm-icon-fuzhi"></i>
                <i class="pm-icon-zhongzai"></i>
                <i class="pm-icon-fangda1"></i>
                <i class="pm-icon-bianzu"></i>
            </div>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'biddataCard',
}
</script>
<style lang="less" scoped>
.biddataCard {
    display: inline-block;
    vertical-align: top;
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: 18px;
    box-shadow: 0 6px 10px #ebedf0;
    position: relative;
    overflow: hidden;
    width: 100%;
    &:hover{
        .action{
            right: 0;
        }
    }
    .action {
        position: absolute;
        top: 0;
        right: -200px;
        //background-color: rgba(10, 44, 86, 0.9);
        z-index: 999;
        box-sizing: border-box;
        transition: all 0.3s;
        padding: 10px 24px;
        box-sizing: border-box;
        &-icon {
            color: rgba(10, 44, 86, 0.9);
            display: flex;
            align-items: center;
            justify-content: flex-end;

            i {
                font-size: 22px;
                margin-left: 15px;
                cursor: pointer;

                &:nth-of-type(2) {
                    font-size: 20px;
                }

                &:nth-of-type(4) {
                    font-size: 16px;
                }

                &:nth-of-type(5) {
                    font-size: 18px;
                }
            }
        }
    }
}
</style>
