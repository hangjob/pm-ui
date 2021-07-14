export default {
    name: 'PmCol',
    componentName: 'PmCol',
    props: {
        // 栅格占据的列数
        span: {
            type: Number,
            default: 24,
        },
        tag: {
            type: String,
            default: 'div',
        },
        // 栅格左侧的间隔格数
        offset: Number,
        // 栅格向左移动格数
        pull: Number,
        // 栅格向右移动格数
        push: Number,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
    },
    computed: {
        gutter () { // 读取父组件的 gutter 间隔
            let parent = this.$parent
            while (parent && parent.$options.componentName !== 'PmRow') {
                parent = parent.$parent
            }
            return parent ? parent.gutter : 0
        },
    },
    render (h) {
        let classlist = []
        let style = {}

        if (this.gutter) {
            style.paddingLeft = this.gutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
        }

        ['span', 'offset', 'pull', 'push'].forEach(prop => {
            if (this[prop] || this[prop] === 0) {
                classlist.push(
                    prop !== 'span'
                        ? `pm-col-${prop}-${this[prop]}`
                        : `pm-col-${this[prop]}`,
                )
            }
        });

        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
            if (typeof this[size] === 'number') {
                classlist.push(`pm-col-${size}-${this[size]}`)
            }
            else if (typeof this[size] === 'object') {
                let props = this[size]
                Object.keys(props).forEach(prop => {
                    classlist.push(
                        prop !== 'span'
                            ? `pm-col-${size}-${prop}-${props[size]}`
                            : `pm-col-${size}-${props[size]}`,
                    )
                })
            }
        })
        return h(
            this.tag, {
                class: ['pm-col', classlist],
                style,
            },
            this.$slots.default,
        )
    },
}