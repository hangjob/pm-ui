<template>
    <div>
        <div id="main" ref="main" style="width:1200px;height:400px;"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts'

export default {
    name: 'histogram5',
    mounted () {
        this.init()
    },
    methods: {
        init () {

            let option = {
                tooltip: {
                    trigger: 'item',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    },
                },
                grid: {
                    left: '2%',
                    right: '4%',
                    bottom: '14%',
                    top: '16%',
                    containLabel: true,
                },
                legend: {
                    left: 'center',
                    top: '0%',
                    textStyle: {
                        color: '#666666',
                    },
                    itemWidth: 15,
                    itemHeight: 10,
                    itemGap: 25,
                    selectedMode:false,
                    data:[
                        {
                            itemWidth: 15,
                            itemHeight: 10,
                            name: '成交价',
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
                            name: '预算价',
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
                            name: '节约额',
                            lineStyle: {
                                width:1,
                                color: '#0BCD76',
                            },
                            textStyle: {
                                color: '#000000',
                                padding: [0,3,0,3],
                            },
                            itemStyle: {
                                color: '#0BCD76',
                            }
                        },
                        {
                            name: '交易量',
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
                    ]
                },
                xAxis: {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisLine: {
                        lineStyle: {
                            color: '#cdd5e2',

                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#666666',
                        },
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
                        type: 'bar',
                        barWidth: '20',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#69A5FF',
                                    }, {
                                        offset: 1,
                                        color: '#0060F1',
                                    }]),
                            },
                        },
                        data: [60, 40, 80, 100, 200, 210, 200, 150, 180, 200, 278, 169],
                    },
                    {
                        name: '成交价',
                        type: 'pictorialBar',
                        symbolSize: [20, 10],
                        symbolOffset: ['-120%', '-50%'],
                        z: 12,
                        itemStyle: {
                            normal: {
                                color: '#3986F8',
                            },
                        },
                        symbolPosition: 'end',
                        data: [60, 40, 80, 100, 200, 210, 200, 150, 180, 200, 278, 169],
                    },
                    {
                        name: '预算价',
                        type: 'bar',
                        barWidth: '20',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#8DF0FF',
                                    }, {
                                        offset: 1,
                                        color: '#00DEFF',
                                    }]),
                            },

                        },
                        data: [60, 123, 80, 100, 120, 210, 123, 150, 180, 200, 278, 169],
                    },
                    {
                        name: '预算价',
                        type: 'pictorialBar',
                        symbolSize: [20, 10],
                        symbolOffset: ['0%', '-50%'],
                        z: 12,
                        itemStyle: {
                            normal: {
                                color: '#52E8FF',
                            },
                        },
                        symbolPosition: 'end',
                        data: [60, 123, 80, 100, 120, 210, 123, 150, 180, 200, 278, 169],
                    },
                    {
                        name: '节约额',
                        type: 'bar',
                        barWidth: '20',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#86FFC9',
                                    }, {
                                        offset: 1,
                                        color: '#0ACD76',
                                    }]),
                            },
                        },
                        data: [60, 123, 145, 234, 278, 210, 123, 150, 290, 200, 278, 169],
                    },
                    {
                        name: '节约额',
                        type: 'pictorialBar',
                        symbolSize: [20, 10],
                        symbolOffset: ['120%', '-50%'],
                        z: 12,
                        itemStyle: {
                            normal: {
                                color: '#53EBA7',
                            },
                        },
                        symbolPosition: 'end',
                        data: [60, 123, 145, 234, 278, 210, 123, 150, 290, 200, 278, 169],
                    },
                    {
                        name: '交易量',
                        type: 'line',
                        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        smooth: false, //平滑曲线显示

                        symbol: 'circle', //标记的图形为实心圆
                        symbolSize: 8, //标记的大小
                        itemStyle: {
                            normal: {
                                color: '#ffa43a',
                                borderColor: 'rgba(255, 234, 0, 0.5)',  //圆点透明 边框
                                borderWidth: 5,
                            },

                        },
                        lineStyle: {
                            color: '#ffa43a',
                        },

                        data: [11160, 11123, 11323, 31123, 41123, 11123, 41123, 1123, 81123, 91123, 41123, 61123],
                    },
                ],
            }
            let myChart = this.$echarts.init(this.$refs.main)
            myChart.setOption(option)
        },
    },
}
</script>
