<template>
    <div style="margin-top: 20px">
        <pm-doc-card>
            <h3 class="title">更新日志</h3>
            <p>
                记录 <strong>Pm-ui</strong>，更新迭代的一个完整过程
            </p>
        </pm-doc-card>
        <pm-doc-card>
            <template v-for="(item,idx) in items">
                <h3 :key="idx" class="title">{{item.v}}</h3>
                <time>{{item.time}}</time>
                <ol>
                    <li v-for="todo in item.todos" :key="todo.content">{{todo.content}}</li>
                </ol>
            </template>
        </pm-doc-card>
    </div>
</template>

<script>
import items from './logs'

export default {
    name: 'Logs',
    data () {
        return {
            items,
        }
    },
}
</script>

<style lang="less" scoped>
time {
    margin: 0 1px;
    background: #f2f4f5;
    padding: .2em .4em;
    border-radius: 3px;
    font-size: .9em;
    border: 1px solid #eee;
}
</style>
