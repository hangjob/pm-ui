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
.pm-doc-nav::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: initial;
}

.pm-doc-nav::-webkit-scrollbar-thumb {
    background-color: initial;
    border-radius: 6px;
}

.pm-doc-nav {
    position: fixed;
    left: 0;
    z-index: 1;
    min-width: 220px;
    max-width: 220px;
    padding: 24px 0;
    overflow-y: scroll;
    background-color: #fff;
    box-shadow: 0 8px 12px #ebedf0;
    top: 60px;
    border-radius: 5px;
    bottom: 0px;

    .pm-doc-nav__group {
        margin-bottom: 16px;
        padding-left: 6px;

        .pm-doc-nav__title {
            padding: 8px 0 8px 24px;
            color: #455a64;
            font-weight: 600;
            font-size: 15px;
            line-height: 28px;
        }

        .pm-doc-nav__item {
            a {
                display: block;
                margin: 8px 0;
                padding: 8px 0 8px 24px;
                color: #455a64;
                font-size: 14px;
                line-height: 20px;
                transition: color .2s;
            }

            a.active {
                font-weight: 600;
                background-color: #ebfff0;
                border-radius: 999px;
                color: #4fc08d;
            }
        }
    }
}

@media (min-width: 1680px) {
    .pm-doc-nav {
        left: 180px;
    }
}
</style>