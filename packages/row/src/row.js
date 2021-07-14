export default {
    name: 'PmRow',
    componentName: 'PmRow',
    props: {
        // 自定义元素标签
        tag: {
            type: String,
            default: 'div',
        },
        // 栅格间隔
        gutter: Number,
        // 布局模式，可选 flex，现代浏览器下有效
        type: String,
        justify: {
            type: String,
            default: 'start',
        },
        align: {
            type: String,
            default: 'top',
        },
    },
    computed: {
        isJustify () {
            return this.justify !== 'start' ? `is-justify-${this.justify}` : ''
        },
        isAlign () {
            return this.align !== 'top' ? `is-align-${this.align}` : ''
        },
        style () {
            const ret = {}
            if (this.gutter) {
                ret.marginLeft = `-${this.gutter / 2}px`
                ret.marginRight = ret.marginLeft
            }
            return ret
        },
    },
    render (h) {
        return h(
            this.tag,
            {
                class: [
                    'pm-row',
                    this.isJustify,
                    this.isAlign,
                    { 'pm-row--flex': this.type === 'flex' }],
                style: this.style,
            },
            this.$slots.default,
        )
    },
}