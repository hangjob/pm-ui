import PmTimelineItem from '../timeline/src/item'

PmTimelineItem.install = function (Vue) {
    Vue.component(PmTimelineItem.name, PmTimelineItem)
}

export default PmTimelineItem
