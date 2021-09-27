<template>
    <div id="app">
        <PmTimeline>
            <pm-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp">
                {{ activity.content }}
            </pm-timeline-item>
        </PmTimeline>
        <PmTimeline>
            <pm-timeline-item
                v-for="(activity, index) in activities"
                :key="index">
                <div>
                    222
                </div>
            </pm-timeline-item>
        </PmTimeline>
        <PmTimeline>
            <pm-timeline-item
                v-for="(activity, index) in activities"
                border="2px solid red"
                :key="index">
                <div>
                    222
                </div>
            </pm-timeline-item>
        </PmTimeline>
        <PmTimeline>
            <pm-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :color="activity.color"
                :size="activity.size"
                :hide-timestamp="false"
                placement="top"
                :timestamp="activity.timestamp">
                {{ activity.content }}
            </pm-timeline-item>
        </PmTimeline>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            reverse: true,
            activities: [
                {
                    content: '活动按期开始',
                    timestamp: '2018-04-15',
                    icon:'pm-icon-gongju-zhuti',
                    color:'red',
                    size:'large'
                }, {
                    content: '通过审核',
                    timestamp: '2018-04-13',
                    icon:'pm-icon-gongju-zhuti',
                    color:'yellow',
                    size:'large'
                }, {
                    content: '创建成功',
                    timestamp: '2018-04-11',
                    icon:'pm-icon-gongju-zhuti',
                    color:'green',
                    size:'large'
                }],
        }
    },
}
</script>
<style lang="less" scoped>
#app {
    padding: 100px;
}
</style>
