const multiple = {
    index: {
        entry: 'examples/pages/index',
        chunks: ['index'],
    },
    bigdata: {
        entry: 'examples/pages/bigdata',
        chunks: ['bigdata'],
    },
    cli: {
        entry: 'examples/pages/cli',
        chunks: ['cli'],
    },
    theme: {
        entry: 'examples/pages/theme',
        chunks: ['theme'],
    },
    demtest: {
        entry: 'examples/pages/demtest',
        chunks: ['demtest'],
        title: '组件测试',
    },
    demotest: {
        entry: 'examples/pages/demotest',
        chunks: ['demotest'],
        title: '组件测试-不上传git',
    },
}

const entry = {}

Object.keys(multiple).forEach((value) => {
    if (!multiple[value].template) {
        multiple[value].template = 'public/index.html'
    }
    if (!multiple[value].title) {
        multiple[value].title = '品茗UI'
    }
    multiple[value].filename = `${value}.html`
    if (multiple[value].chunks.length) {
        multiple[value].chunks = [
            ...new Set(['chunk-vendors', 'chunk-common'].concat(
                multiple[value].chunks))]
    }
    entry[value] = multiple[value]
})
module.exports = entry
