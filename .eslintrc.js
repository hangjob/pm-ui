module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],

    rules: {
        // 缩进 4 空格
        indent: [2, 4],

        // 禁止空格和 tab 的混合缩进
        'no-mixed-spaces-and-tabs': 1,

        // 禁用 debugger
        'no-debugger': 1,

        // 禁止不必要的布尔转换
        'no-extra-boolean-cast': 1,

        // 强制所有控制语句使用一致的括号风格
        'curly': 1,

        // 禁止使用多个空格c
        'no-multi-spaces': 1,

        // 要求在函数标识符和其调用之间有空格
        'func-call-spacing': 1,

        // 关闭 强制在函数括号内使用一致的换行
        'function-paren-newline': 0,

        // 强制隐式返回的箭头函数体的位置
        'implicit-arrow-linebreak': 1,

        // 强制在对象字面量的属性中键和值之间使用一致的间距
        'key-spacing': 1,

        // 强制在关键字前后使用一致的空格
        'keyword-spacing': 1,

        // 要求调用无参构造函数时有圆括号
        'new-parens': 1,

        // 禁止出现多行空行
        'no-multiple-empty-lines': 1,

        // 不检查后面是否有分号
        'semi': 0,

        // 要求操作符周围有空格
        'space-infix-ops': 1,
    },
}
