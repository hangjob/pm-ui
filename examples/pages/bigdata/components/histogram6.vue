<template>
    <div class="histogram">
        <div id="main" ref="main" style="height:400px;"></div>
    </div>
</template>
<script>
export default {
    name: 'histogram6',
    mounted () {
        this.init()
    },
    methods: {
        init () {
            let data = [100, 34, 60]
            let titlename = ['收轨装置', '起重装置', '轨道平车']
            let valdata = [100, 100, 100]
            let myColor = ['#3986F8', '#03DEFF', '#00CC71']
            let option = {
                title: {
                    text: '上月生产任务兑现率',
                    left: 'center',
                },
                backgroundColor: '#ffffff',
                xAxis: {
                    show: false,
                },
                yAxis: [
                    {
                        show: true,
                        data: titlename,
                        inverse: true,
                        axisLine: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            color: '#333333',
                            formatter: function (value, index) {
                                return value
                            },
                        },

                    }, {
                        show: true,
                        inverse: true,
                        data: valdata,
                        axisLabel: {
                            textStyle: {
                                fontSize: 12,
                                color: '#fff',
                            },
                        },
                        axisLine: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },

                    }],
                series: [
                    {
                        name: '条',
                        type: 'bar',
                        yAxisIndex: 0,
                        data: data,
                        barWidth: 14,
                        z: 10,
                        itemStyle: {
                            normal: {
                                distance: 10,
                                barBorderRadius: 14,
                                color: function (params) {
                                    let num = myColor.length
                                    return myColor[params.dataIndex % num]
                                },
                            },
                        },
                        label: {
                            normal: {
                                position: 'right',
                                show: true,
                            },
                        },
                    },
                    {
                        name: '框',
                        type: 'bar',
                        yAxisIndex: 1,
                        barGap: '-100%',
                        startAngle: 10,
                        data: [100, 100, 100],
                        barWidth: 22,
                        itemStyle: {
                            normal: {
                                color: 'none',
                                borderColor: '#00c1de',
                                borderWidth: 1,
                                barBorderRadius: 22,
                            },
                        },
                    }
                ],
            }
            let myChart = this.$echarts.init(this.$refs.main)
            myChart.clear();
            myChart.setOption(option)
        },
    },
}
</script>
