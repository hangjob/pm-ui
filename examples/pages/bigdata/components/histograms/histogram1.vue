<template>
    <div class="histogram">
        <div id="main" ref="main" style="height:400px;"></div>
    </div>
</template>
<script>


export default {
    name: 'histogram1',
    mounted () {
        this.init()
    },
    methods: {
        init () {
            const option = {
                backgroundColor: '#fff',
                grid: {
                    top: 35,
                    left: 32,
                    right: 54,
                    bottom: 22,
                },
                legend: {
                    itemGap: 20,
                    itemWidth: 15,
                    itemHeight: 8,
                    data: [
                        {
                            itemWidth: 15,
                            itemHeight: 10,
                            name: '交易额',
                            icon: 'roundRect',
                            textStyle: {
                                color: '#000000',
                                padding: [0,3,0,3],
                            },
                            lineStyle: {
                                color: '#000000',
                            },
                            itemStyle: {
                                color: '#3986F8',
                            },
                        },
                        {
                            name: '成交价',
                            lineStyle: {
                                width:1,
                                color: '#00DEFF',
                            },
                            textStyle: {
                                color: '#000000',
                                padding: [0,3,0,3],
                            },
                            itemStyle: {
                                color: '#00DEFF',
                            }
                        },
                        {
                            name: '预算价',
                            lineStyle: {
                                width:1,
                                color: '#EE8931',
                            },
                            textStyle: {
                                color: '#000000',
                                padding: [0,3,0,3],
                            },
                            itemStyle: {
                                color: '#EE8931',
                            },
                        },
                    ],
                },
                xAxis: {
                    type: 'category',
                    data: ['建设工程', '政府采购', '土地交易', '产权交易'],
                    axisLine: {
                        show: true,
                        lineStyle: {
                            type: 'line',
                            color: '#DBDBDB',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: '#000000',
                    },
                },
                yAxis: [
                    {
                        name: '交易宗数/宗',
                        type: 'value',
                        nameTextStyle: {
                            fontSize: 14,
                            color: '#000000',
                            align: 'left',
                            padding: [0, 0, 5, -30],
                        },
                        min: 0,
                        max: 300,
                        splitNumber: 5,
                        interval: 300 / 5,
                        position: 'left',
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#000000',
                            },
                        },
                        axisLabel: {
                            formatter: '{value}',
                            color: '#000000',
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'line',
                                color: '#DBDBDB',
                            },
                        },
                    },
                    {
                        name: '金额/万元',
                        type: 'value',
                        nameTextStyle: {
                            fontSize: 14,
                            color: '#000000',
                            align: 'right',
                            padding: [0, -50, 5, 0],
                        },
                        min: 0,
                        max: 100000,
                        splitNumber: 5,
                        interval: 100000 / 5,
                        position: 'right',
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: 'rgba(0, 0, 0, 0.15)',
                            },
                        },
                        axisLabel: {
                            formatter: '{value}',
                            color: '#000000',
                        },
                        splitLine: {
                            show: false,

                        },
                    },
                ],
                series: [
                    {
                        name: '成交价',
                        data: [51900, 53689, 23425, 74180],
                        type: 'line',
                        itemStyle: {
                            color: '#00DEFF',
                        },
                        yAxisIndex: 1,
                    },
                    {
                        name: '预算价',
                        data: [81900, 59200, 11550, 94180],
                        type: 'line',
                        itemStyle: {
                            color: '#EE8B34',
                        },
                        yAxisIndex: 1,
                    },
                    {
                        name: '交易额',
                        type: 'pictorialBar',
                        symbolSize: [30, 20],
                        symbolOffset: [0, -10],
                        z: 12,
                        itemStyle: {
                            normal: {
                                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 1,
                                        color: '#0060F1',
                                    },
                                    {
                                        offset: 0,
                                        color: '#69A5FF',
                                    },
                                ]),
                            },
                        },
                        symbolPosition: 'end',
                        data: [120, 200, 150, 80],
                    },
                    {
                        name: '交易额',
                        data: [120, 200, 150, 80],
                        type: 'bar',
                        barWidth: '30',
                        itemStyle: {
                            color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 1,
                                    color: '#0060F1',
                                },
                                {
                                    offset: 0,
                                    color: '#69A5FF',
                                },
                            ]),
                        },
                    },
                ],
            }
            let myChart = this.$echarts.init(this.$refs.main)
            myChart.clear();
            myChart.setOption(option,true)
        },
    },
}
</script>
<style scoped lang="less"></style>
