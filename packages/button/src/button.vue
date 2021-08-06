<template>
    <button
        class="pm-button"
        @click="handleClick"
        :disabled="buttonDisabled || loading"
        :autofocus="autofocus"
        :type="nativeType"
        :class="[
            type ? 'pm-button--' + type : '',
            buttonSize ? 'pm-button--' + buttonSize : '',
            {
                'is-disabled': buttonDisabled,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle,
            },
        ]"
    >
        <i class="pm-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
import { throttle, debounce } from 'lodash'
import { isDefined } from '~@/utils/types'

export default {
    name: 'PmButton',
    // 表单 读取父组件值
    inject: {
        pmForm: {
            default: '',
        },
        pmFormItem: {
            default: '',
        },
    },

    props: {
        type: {
            type: String,
            default: 'default',
        },
        size: String,
        icon: {
            type: String,
            default: '',
        },
        nativeType: {
            type: String,
            default: 'button',
        },
        loading: Boolean,
         disabled: Boolean,
        plain: Boolean,
        autofocus: Boolean,
        round: Boolean,
        circle: Boolean,
        debounce: [Boolean, Object],
        throttle: [Boolean, Object],
    },

    computed: {
        _pmFormItemSize () {
            return (this.pmFormItem || {}).pmFormItemSize
        },
        buttonSize () {
            return (
                this.size || this._pmFormItemSize || (this.$PMUI || {}).size
            )
        },
        buttonDisabled () {
            return this.disabled || (this.pmForm || {}).disabled
        },
    },
    created () {
        if (this.debounce) {
            let options = {
                wait: this.debounce.wait || 200,
                leading: isDefined(this.debounce.leading) ? this.debounce.leading : true,
                trailing: isDefined(this.debounce.trailing) ? this.debounce.trailing : false,
            }
            this._handleClick = debounce(function (evt) {
                this.$emit('click', evt)
            }, options.wait, options)
        }
        if (this.throttle) {
            let options = {
                wait: this.throttle.wait || 1000,
                leading: isDefined(this.throttle.leading) ? this.throttle.leading : true,
                trailing: isDefined(this.throttle.trailing) ? this.throttle.trailing : false,
            }
            this._handleClick = throttle(function (evt) {
                this.$emit('click', evt)
            }, options.wait, options)
        }
    },
    methods: {
        handleClick (evt) {
            if (!this.debounce && !this.throttle) {
                this.$emit('click', evt)
            }
            else {
                this._handleClick(evt)
            }
        },
    },
}
</script>
