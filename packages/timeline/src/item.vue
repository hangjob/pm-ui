<template>
    <li class="pm-timeline-item">
        <div class="pm-timeline-item__tail"></div>

        <div v-if="!$slots.dot"
             class="pm-timeline-item__node"
             :class="[
                `pm-timeline-item__node--${size || ''}`,
                `pm-timeline-item__node--${type || ''}`
               ]"
             :style="{
                backgroundColor: color,
                border:border
            }"
        >
            <i v-if="icon" class="pm-timeline-item__icon" :class="icon"></i>
        </div>

        <div v-if="$slots.dot" class="pm-timeline-item__dot">
            <slot name="dot"></slot>
        </div>

        <div class="pm-timeline-item__wrapper">
            <div v-if="!hideTimestamp && placement === 'top'"
                 class="pm-timeline-item__timestamp is-top">
                {{ timestamp }}
            </div>

            <div class="pm-timeline-item__content">
                <slot></slot>
            </div>

            <div v-if="!hideTimestamp && placement === 'bottom'"
                 class="pm-timeline-item__timestamp is-bottom">
                {{ timestamp }}
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'PmTimelineItem',

    inject: ['timeline'],

    props: {
        timestamp: String,

        hideTimestamp: {
            type: Boolean,
            default: false,
        },

        placement: {
            type: String,
            default: 'bottom',
        },

        type: String,

        color: String,

        size: {
            type: String,
            default: 'normal',
        },

        icon: String,

        border: String
    }
}
</script>
