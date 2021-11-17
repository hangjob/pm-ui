<template>
    <div class="pm-doc-nav" ref="pm-doc-nav">
        <div class="pm-doc-nav__group" v-for="(item) in navs" :key="item.key">
            <div class="pm-doc-nav__title">{{ item.title }}</div>
            <div class="pm-doc-nav__item" v-for="(todo) in item.children" :key="todo.key">
                <a :href="todo.url" :class="[activeClass(todo.key)]">{{ todo.title }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import { navs } from './navs'
import { uniqueId, forEach, find, isUndefined, throttle } from 'lodash'

const setNavsKey = (navs) => {
    if (!navs.length) {
        return
    }
    navs.forEach(item => {
        item.key = uniqueId()
        if (item.children) {
            item.children.forEach(todo => {
                todo.key = uniqueId()
            })
        }
    })
    return navs
}
// https://www.coder.work/article/2706443
const getNavsKey = (navs, url) => {
    let category
    forEach(navs, (item) => {
        category = find(item.children, { url })
        return isUndefined(category)
    })
    return category
}

export default {
    name: 'PmNav',
    data () {
        return {
            navs: setNavsKey(navs),
            activeObj: {},
        }
    },
    computed: {
        activeClass () {
            return function (key) {
                return key === this.activeObj.key ? 'active' : null
            }
        },
    },
    mounted () {
        this.activeObj = getNavsKey(this.navs, this.$route.path) || {}
        window.addEventListener('scroll', throttle(() => {
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            this.$refs['pm-doc-nav'].style.top = scrollTop >= 60 ? '0px' : '60px'
        }, 20, {
            'leading': true,
            'trailing': false,
        }))
    },
}
</script>

<style lang="less" scoped>

</style>
