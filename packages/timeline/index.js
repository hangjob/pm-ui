import PmTimeline from './src/timeline'

PmTimeline.install = function (Vue) {
    Vue.component(PmTimeline.name, PmTimeline)
}

export default PmTimeline
