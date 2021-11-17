// 是否字符串
export function isString (obj) {
    return Object.prototype.toString.call(obj) === '[object String]'
}

// 是否对象
export function isObject (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

// 是否Hmtl
export function isHtmlElement (node) {
    return node && node.nodeType === Node.ELEMENT_NODE
}

// 是否函数
export const isFunction = (functionToCheck) => {
    let getType = {}
    return functionToCheck && getType.toString.call(functionToCheck) ===
        '[object Function]'
}

// 是否undefined
export const isUndefined = (val) => {
    return val === void 0
}

export const isDefined = (val) => {
    return val !== undefined && val !== null
}
