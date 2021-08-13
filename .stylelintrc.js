module.exports = {
    defaultSeverity: 'error',
    extends: ['stylelint-config-standard'], // 官方推荐
    rules: {
        'indentation': 4,
        'declaration-block-semicolon-newline-after': 'always',
        'function-url-quotes': 'always',
        'number-leading-zero': null,
        'rule-empty-line-before': false,
        'selector-pseudo-element-colon-notation': 'double',
        'font-family-no-missing-generic-family-keyword': false,
        'declaration-colon-newline-after': 'always-multi-line',
        'value-list-comma-space-before': 'never',
        'declaration-empty-line-before': [
            'always', {
                'ignore': ['after-comment', 'stylelint-commands'],
            }],
        'no-descending-specificity': false,
        'unit-whitelist': [
            'em',
            'rem',
            's',
            '%',
            'px',
            'deg',
        ],
    },
}
