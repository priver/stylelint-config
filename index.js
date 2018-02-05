'use strict';

module.exports = {
    'extends': 'stylelint-config-standard',
    'plugins': [
        'stylelint-order',
    ],
    'rules': {
        'color-named': 'never',

        'font-family-name-quotes': 'always-unless-keyword',

        'font-weight-notation': 'numeric',

        'function-url-quotes': 'always',
        'function-url-scheme-whitelist': ['https', 'data'],

        'string-quotes': 'single',

        'value-keyword-case': 'lower',
        'value-no-vendor-prefix': true,

        'property-no-vendor-prefix': true,

        'declaration-no-important': true,

        'declaration-block-no-redundant-longhand-properties': true,

        'selector-attribute-quotes': 'always',
        'selector-max-compound-selectors': 4,
        'selector-max-id': 0,
        'selector-no-qualifying-type': true,
        'selector-no-vendor-prefix': true,

        'media-feature-name-no-vendor-prefix': true,

        'at-rule-name-newline-after': 'always-multi-line',
        'at-rule-no-unknown': [true, {ignoreAtRules: ['util', 'mixin', 'define-mixin']}],
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-space-before': 'never',

        'comment-empty-line-before': ['always', {
            except: ['first-nested'],
            ignore: ['after-comment', 'stylelint-commands'],
        }],

        'indentation': 4,
        'max-line-length': [120, {ignorePattern: '/^\\s*unicode-range/'}],
        'no-unknown-animations': true,

        'unit-no-unknown': [true, {ignoreUnits: ['x']}],

        'shorthand-property-no-redundant-values': true,

        'order/order': [
            'at-rules',
            'custom-properties',
            'declarations',
            {
                type: 'at-rule',
                hasBlock: true,
            },
            'rules',
        ],
    },
};
