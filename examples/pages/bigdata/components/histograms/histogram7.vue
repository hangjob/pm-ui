<template>
    <div class="histogram">
        <div class="item-echats">
            <div ref="main1" style="height:400px;"></div>
        </div>
        <div class="item-echats">
            <div ref="main2" style="height:400px;"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'histogram7',
    mounted () {
        this.init()
    },
    methods: {
        init () {
            this.init1()
            this.init2()
        },
        init1 () {
            // 运动心率
            const colorList = ['#2DD64F', '#ADFF2F', '#0783FF']
            let data = [{ name: '健康', value: 40 }, { name: '安全', value: 29 }, { name: '养老', value: 31 }]
            let option = {
                title: {
                    text: '机构类型占比',
                    left: 'center',
                    textStyle: {
                        color: '#fff',
                        fontSize: 24,
                    },
                    padding: [26, 0],
                },

                tooltip: {
                    show: false,
                    trigger: 'item',
                },
                series: [
                    {
                        type: 'pie',
                        // center:["50%","36%"],
                        radius: ['42%', '55%'],
                        clockwise: true,
                        avoidLabelOverlap: false,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return colorList[params.dataIndex]
                                },
                            },
                        },

                        label: {
                            show: true,
                            position: 'outside',
                            formatter: (params) => {
                                return '{txt|' + params.name + '}'
                            },
                            align: 'left',
                            rich: {
                                txt: {
                                    color: '#f0f',
                                    width: 10,
                                    height: 10,
                                    padding: 0,
                                    fontSize: 12,
                                },

                            },
                        },
                        labelLine: {
                            show: true,
                            length: 20,
                            length2: 30,
                            lineStyle: {
                                color: '#72B1DA',
                                width: 1,
                            },
                        },
                        data: data,
                    },
                ],
            }
            let myChart = this.$echarts.init(this.$refs.main1)
            myChart.clear()
            myChart.setOption(option)
        },
        init2 () {
            // 运动心率
            const colorList = ['#2DD64F', '#ADFF2F', '#0783FF']
            let data = [{ name: '健康', value: 40 }, { name: '安全', value: 29 }, { name: '养老', value: 31 }]
            let option = {
                title: {
                    text: '机构类型占比',
                    left: 'center',
                    textStyle: {
                        color: '#fff',
                        fontSize: 24,
                    },
                    padding: [26, 0],
                },

                tooltip: {
                    show: false,
                    trigger: 'item',
                },
                series: [
                    {
                        type: 'pie',
                        // center:["50%","36%"],
                        radius: ['42%', '55%'],
                        clockwise: true,
                        avoidLabelOverlap: false,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return colorList[params.dataIndex]
                                },
                            },
                        },

                        label: {
                            show: true,
                            position: 'outside',
                            formatter: (params) => {
                                return '{txt|' + params.name + '}'
                            },
                            align: 'left',
                            rich: {
                                txt: {
                                    color: '#f0f',
                                    width: 10,
                                    height: 10,
                                    padding: 0,
                                    fontSize: 12,
                                },

                            },
                        },
                        labelLine: {
                            show: true,
                            length: 20,
                            length2: 30,
                            lineStyle: {
                                color: '#72B1DA',
                                width: 1,
                            },
                        },
                        data: data,
                    },
                ],
            }
            let myChart = this.$echarts.init(this.$refs.main2)
            myChart.clear()
            myChart.setOption(option)
        },
    },
}
</script>
<style lang="less" scoped>
.item-echats {
    display: inline-block;
    width: 100%;
}

.mask1 {
    transform: rotate(90deg);
    position: absolute;
    left: 270px;
    top: 140px;
}

.mask2 {
    position: absolute;
    top: 140px;
    left: 100px;
    width: 100px;
    height: 270px;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 2px solid;
    background: linear-gradient(to bottom, rgba(57, 134, 248, 0.4), rgba(0, 0, 0, 0, 0.4));
    transform: perspective(0.8em) rotateX(-3deg);
    border-image: -webkit-linear-gradient(bottom, red, rgba(0, 0, 0, 0)) 1 1;
    border-image: -moz-linear-gradient(bottom, red, rgba(0, 0, 0, 0)) 1 1;
    border-image: linear-gradient(to top, black, rgba(0, 0, 0, 0)) 1 1;
    opacity: 0.4;
}


</style>
