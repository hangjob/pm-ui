<template>
    <div>
        <div id="main" ref="main" style="width: 677px;height:400px;"></div>
    </div>
</template>
<script>
export default {
    name: 'histogram4',
    mounted () {
        this.init()
    },
    methods: {
        init () {

            let m2R2Data = [
                { value: 335, legendname: '房屋建筑', name: '房屋建筑', itemStyle: { color: '#0BCE77' } },
                { value: 310, legendname: '市政', name: '市政', itemStyle: { color: '#F09A4E' } },
                { value: 234, legendname: '公路', name: '公路', itemStyle: { color: '#0A62C3' } },
                { value: 154, legendname: '民航', name: '民航', itemStyle: { color: '#FFCC00' } },
                { value: 335, legendname: '水运', name: '水运', itemStyle: { color: '#00DEFF' } },
                { value: 335, legendname: '水利', name: '水利', itemStyle: { color: '#0DBE00' } },
                { value: 335, legendname: '能源', name: '能源', itemStyle: { color: '#66AEFF' } },
                { value: 335, legendname: '邮电通信', name: '邮电通信', itemStyle: { color: '#3986F8' } },
                { value: 335, legendname: '铁路', name: '铁路', itemStyle: { color: '#00CCCC' } },
                { value: 335, legendname: '其他', name: '其他', itemStyle: { color: '#815CEB' } },
            ]

            let option = {
                legend: {
                    orient: 'horizontal',
                    bottom: '0%',
                    align: 'left',
                    itemWidth: 16,
                    itemHeight: 10,
                    width: '50%',
                    // padding:20,
                    textStyle: {
                        color: '#8C8C8C',
                        rich: {
                            a: {
                                width: 70,
                                align: 'center',
                            },
                            b: {
                                width: 60,
                                align: 'right',
                                padding: [0, 50, 0, 0],
                            },
                        },
                    },
                    formatter: function (name) {
                        let target = 0, Marketfunds = 0
                        for (let i = 0; i < m2R2Data.length; i++) {
                            Marketfunds += m2R2Data[i].value
                            if (m2R2Data[i].name == name) {
                                target = m2R2Data[i].value
                            }
                        }
                        return `{a|${name}}{b|${((target / Marketfunds) * 100).toFixed(2) + '%'}}`
                    },
                },
                series: [
                    {
                        name: '标题',
                        type: 'pie',
                        radius: ['42%', '55%'],
                        center: ['50%', '35%'],
                        clockwise: false, //饼图的扇区是否是顺时针排布
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                            },
                        },
                        labelLine: {
                            normal: {
                                length: 5,
                                length2: 3,
                                smooth: true,
                            },
                        },
                        data: m2R2Data,
                    },
                ],
            }
            let myChart = this.$echarts.init(this.$refs.main)
            myChart.setOption(option)
        },
    },
}
</script>
