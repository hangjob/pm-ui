<template>
    <div class="histogram">
        <div id="main" ref="main" style="height:650px;"></div>
    </div>
</template>
<script>
export default {
    name: 'histogram2',
    mounted () {
        this.init()
    },
    methods: {
        init () {
            let myChart = this.$echarts.init(this.$refs.main)
            let yLabel = ['龙洲街道', '龙洲街道', '东华街道', ' 湖镇镇', ' 横山镇', ' 塔石镇', '小南海镇', '溪口镇', ' 詹家镇', ' 模环乡', ' 石佛乡', ' 社阳乡', ' 罗家乡自治区']
            let yData = [653, 755, 705, 655, 675, 654, 802, 769, 513, 755, 755, 1051, 726]
            let bgData = []
            for (let i in yData) {
                bgData.push(2000)
            }
            let option = {
                backgroundColor: '#ffffff',
                title: {
                    text: '参与人数',
                    y: 'top',
                    x: 'center',
                    textAlign: 'center',
                    textStyle: {
                        fontSize: 16,
                        color:'#333',
                        fontWeight:'lighter'
                    },
                },
                grid: {
                    top: 40,
                    left: 70,
                    right: 32,
                    bottom: 0,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'none',
                    },
                    formatter: function (params) {
                        return params[0].name + '<br/>' +
                            '<span style=\'display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)\'></span>' +
                            params[0].seriesName + ' : ' + params[0].value + ' <br/>'
                    },
                },
                xAxis: {
                    show: false,
                    type: 'value',
                },
                yAxis: [
                    {
                        type: 'category',
                        axisLabel: {
                            show: true,
                            margin: 15,
                            textStyle: {
                                color: '#333333',
                                fontSize: '14',
                                align: 'center',
                                fontWeight:'lighter',
                                padding: [0,40,0,0]
                            },
                            interval: 0,
                            formatter: function (value) {
                                if (value.length > 4) {
                                    return value.substring(0, 4) + '...'
                                }
                                else {
                                    return value
                                }
                            }
                        },
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        data: yLabel,
                    },
                    {
                        name: '开标数',
                        nameTextStyle: {
                            fontSize: 16,
                            color:'#333',
                            align: 'center',
                            fontWeight:'lighter',
                            padding: [0, 0, 0, 5],
                        },
                        gridIndex: 0,
                        position: 'right',
                        type: 'category',
                        axisTick: 'none',
                        axisLine: 'none',
                        axisLabel: {
                            textStyle: {
                                fontSize: '12',
                                backgroundColor: 'rgba(2, 98, 241, 0.2)',
                                borderRadius: 32,
                                width: 32,
                                height: 32,
                                color: '#0261F1',
                                align: 'center',
                            },
                        },
                        data: yData,
                    }],
                series: [
                    {
                        type: 'bar',
                        zlevel: 1,
                        barCategoryGap: '80%',
                        itemStyle: {
                            normal: {
                                barBorderRadius: [0, 15, 15, 0],
                                color: this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 1,
                                        color: '#65A2FE',
                                    }, {
                                        offset: 0,
                                        color: '#0161F1',
                                    }]),
                                shadowBlur: 0,
                                shadowColor: 'rgba(87,220,222,0.7)',
                            },
                        },
                        barWidth: 13,
                        data: yData,
                    },
                    {
                        type: 'pictorialBar',
                        symbol: 'rect',
                        itemStyle: {
                            normal: {
                                color: 'none',
                            },
                        },
                        label: {
                            normal: {
                                position: 'right',
                                padding: [3, 0, 0, 10],
                                show: true,
                            },
                        },
                        data: yData,
                        z: 77,
                        animationEasing: 'elasticOut',
                    },
                ],
            }
            myChart.clear();
            myChart.setOption(option)
        },
    },
}
</script>
<style lang="less" scoped>

</style>
