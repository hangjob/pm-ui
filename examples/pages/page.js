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
