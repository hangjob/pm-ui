<template>
    <div class="histogram">
        <div id="main" ref="main" style="height:400px;"></div>
    </div>
</template>
<script>
export default {
    name: 'histogram3',
    mounted () {
        this.init()
    },
    methods: {
        init () {
            let bgColor = '#fff'
            let title = '增值额'
            let color = ['#00DEFF', '#3986F8', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0']
            let echartData = [
                {
                    name: '土地交易',
                    value: '3720',
                },
                {
                    name: '产权交易',
                    value: '2920',
                },
            ]

            let formatNumber = function (num) {
                let reg = /(?=(\B)(\d{3})+$)/g
                return num.toString().replace(reg, ',')
            }
            let total = echartData.reduce((a, b) => {
                return a + b.value * 1
            }, 0)

            let option = {
                backgroundColor: bgColor,
                color: color,
                title: [
                    {
                        text: '{name|' + title + '}\n{val|' + formatNumber(total) + '}',
                        top: 'center',
                        left: 'center',
                        textStyle: {
                            rich: {
                                name: {
                                    fontSize: 16,
                                    fontWeight: 'normal',
                                    color: '#666666',
                                    padding: [10, 0],
                                },
                                val: {
                                    fontSize: 32,
                                    fontWeight: 'bold',
                                    color: '#333333',
                                },
                            },
                        },
                    }
                ],
                series: [
                    {
                        type: 'pie',
                        radius: ['42%', '55%'],
                        center: ['50%', '50%'],
                        data: echartData,
                        hoverAnimation: false,
                        itemStyle: {
                            normal: {
                                borderColor: bgColor,
                                borderWidth: 2,
                            },
                        },
                        labelLine: {
                            normal: {
                                length: 20,
                                length2: 120,
                                lineStyle: {
                                    color: '#e6e6e6',
                                },
                            },
                        },
                        label: {
                            normal: {
                                formatter: params => {
                                    return (
                                        '{name|' + params.name + '}{value|' +
                                        formatNumber(params.value) + '}'
                                    )
                                },
                                padding: [0, -100, 25, -100],
                                rich: {
                                    icon: {
                                        fontSize: 16,
                                    },
                                    name: {
                                        fontSize: 14,
                                        padding: [0, 10, 0, 4],
                                        color: '#666666',
                                    },
                                    value: {
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        color: '#333333',
                                    },
                                },
                            },
                        },
                    }],
            }
            let myChart = this.$echarts.init(this.$refs.main)
            myChart.clear();
            myChart.setOption(option)
        },
    },
}
</script>
<style lang="less" scoped></style>
