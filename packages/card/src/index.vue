<!--
 * @Descripttion: 修改了一些内容
 * @version: v1.0
 * @Author: htt
 * @Date: 2022-03-04 10:18:31
 * @LastEditors: htt
 * @LastEditTime: 2022-03-04 16:27:43
-->
<template>
  <div class="pm-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="pm-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="pm-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PmCard',
    props: {
        header: {
            type: String,
            // default: '品茗卡卡卡片'
        },
        bodyStyle: {},
        shadow: {
            type: String
        }
    }
};
</script>
