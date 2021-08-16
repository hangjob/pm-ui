//
module.exports = {
    defaultSeverity: "error",
    extends: ["stylelint-config-standard"], // 官方推荐
    rules: {
        indentation: 4,
        "declaration-block-semicolon-newline-after": "always",
        "function-url-quotes": "always",
        "number-leading-zero": null,
        "selector-pseudo-element-colon-notation": null,
        "font-family-no-missing-generic-family-keyword": null,
        "rule-empty-line-before": null,
        "declaration-colon-newline-after": "always-multi-line",
        "value-list-comma-space-before": "never",
        "declaration-empty-line-before": null,
        "no-descending-specificity": null,
        "unit-allowed-list": ["em", "rem", "s", "%", "px", "deg"] // 可以使用这些属性
    }
}
