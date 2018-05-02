'use strict';

module.exports = {
    plugins: [
        'stylelint-order',
    ],
    rules: {
        // Color
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'color-named': 'never',
        'color-no-invalid-hex': true,

        // Font family
        'font-family-name-quotes': 'always-unless-keyword',
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,

        // Font weight
        'font-weight-notation': 'numeric',

        // Function
        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-url-quotes': 'always',
        'function-url-scheme-whitelist': ['https', 'data'],
        'function-whitespace-after': 'always',

        // Number
        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,

        // String
        'string-no-newline': true,
        'string-quotes': 'single',

        // Length
        'length-zero-no-unit': true,

        // Time

        // Unit
        'unit-case': 'lower',
        'unit-no-unknown': [true, { ignoreUnits: ['x'] }],

        // Shorthand property
        'shorthand-property-no-redundant-values': true,

        // Value
        'value-keyword-case': ['lower', {
            ignoreProperties: ['composes'],
        }],
        'value-no-vendor-prefix': [true, {
            ignoreValues: ['optimize-contrast'],
        }],

        // Value list
        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,

        // Custom property
        'custom-property-empty-line-before': ['always', {
            except: [
                'after-custom-property',
                'first-nested',
            ],
            ignore: [
                'after-comment',
                'inside-single-line-block',
            ],
        }],

        // Property
        'property-case': 'lower',
        'property-no-unknown': [true, {
            ignoreProperties: ['composes'],
        }],
        'property-no-vendor-prefix': true,

        // Keyframe declaration
        'keyframe-declaration-no-important': true,

        // Declaration
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': ['always', {
            except: [
                'first-nested',
            ],
            ignore: [
                'after-comment',
                'after-declaration',
            ],
        }],
        'declaration-no-important': true,

        // Declaration block
        'declaration-block-no-duplicate-properties': [true, {
            ignore: ['consecutive-duplicates-with-different-values'],
        }],
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-semicolon-newline-after': 'always-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',

        // Block
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always-multi-line',
        'block-closing-brace-space-before': 'always-single-line',
        'block-no-empty': true,
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',

        // Selector
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-max-compound-selectors': 4,
        'selector-max-empty-lines': 0,
        'selector-max-id': 0,
        'selector-no-qualifying-type': true,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,

        // Selector list
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-space-before': 'never',

        // Rule
        'rule-empty-line-before': ['always-multi-line', {
            except: ['first-nested'],
            ignore: ['after-comment'],
        }],

        // Media feature
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-name-no-unknown': true,
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',

        // Media query list
        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',

        // Custom media

        // At-rule
        'at-rule-empty-line-before': ['always', {
            except: [
                'blockless-after-same-name-blockless',
                'first-nested',
            ],
            ignore: ['after-comment'],
        }],
        'at-rule-name-case': 'lower',
        'at-rule-name-newline-after': 'always-multi-line',
        'at-rule-name-space-after': 'always-single-line',
        'at-rule-no-unknown': [true, { ignoreAtRules: ['util', 'mixin', 'define-mixin'] }],
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-semicolon-space-before': 'never',

        // Comment
        'comment-empty-line-before': ['always', {
            except: ['first-nested'],
            ignore: ['after-comment', 'stylelint-commands'],
        }],
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',

        // General / Sheet
        'indentation': 4,
        'max-empty-lines': 1,
        'max-line-length': [120, { ignorePattern: '/^\\s*unicode-range/' }],
        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-eol-whitespace': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,
        'no-missing-end-of-source-newline': true,
        'no-unknown-animations': true,

        // Order
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
        'order/properties-order': [
            [
                {
                    emptyLineBefore: 'always',
                    properties: ['composes'],
                },
                {
                    emptyLineBefore: 'always',
                    properties: [
                        'box-sizing',

                        'display',
                        'position',
                        'top',
                        'right',
                        'bottom',
                        'left',

                        'float',
                        'clear',

                        'flex',
                        'flex-basis',
                        'flex-direction',
                        'flex-flow',
                        'flex-grow',
                        'flex-shrink',
                        'flex-wrap',

                        'grid',
                        'grid-area',
                        'grid-template',
                        'grid-template-areas',
                        'grid-template-rows',
                        'grid-template-columns',
                        'grid-row',
                        'grid-row-start',
                        'grid-row-end',
                        'grid-column',
                        'grid-column-start',
                        'grid-column-end',
                        'grid-auto-rows',
                        'grid-auto-columns',
                        'grid-auto-flow',
                        'grid-gap',
                        'grid-row-gap',
                        'grid-column-gap',

                        'align-content',
                        'align-items',
                        'align-self',

                        'justify-content',
                        'justify-items',
                        'justify-self',

                        'order',

                        'columns',
                        'column-gap',
                        'column-fill',
                        'column-rule',
                        'column-rule-width',
                        'column-rule-style',
                        'column-rule-color',
                        'column-span',
                        'column-count',
                        'column-width',

                        'backface-visibility',
                        'perspective',
                        'perspective-origin',
                        'transform',
                        'transform-origin',
                        'transform-style',

                        'transition',
                        'transition-delay',
                        'transition-duration',
                        'transition-property',
                        'transition-timing-function',

                        'visibility',
                        'opacity',
                        'z-index',

                        'margin',
                        'margin-top',
                        'margin-right',
                        'margin-bottom',
                        'margin-left',

                        'outline',
                        'outline-offset',
                        'outline-width',
                        'outline-style',
                        'outline-color',

                        'border',
                        'border-top',
                        'border-right',
                        'border-bottom',
                        'border-left',
                        'border-width',
                        'border-top-width',
                        'border-right-width',
                        'border-bottom-width',
                        'border-left-width',

                        'border-style',
                        'border-top-style',
                        'border-right-style',
                        'border-bottom-style',
                        'border-left-style',

                        'border-radius',
                        'border-top-left-radius',
                        'border-top-right-radius',
                        'border-bottom-left-radius',
                        'border-bottom-right-radius',

                        'border-color',
                        'border-top-color',
                        'border-right-color',
                        'border-bottom-color',
                        'border-left-color',

                        'border-image',
                        'border-image-source',
                        'border-image-width',
                        'border-image-outset',
                        'border-image-repeat',
                        'border-image-slice',

                        'box-shadow',

                        'background',
                        'background-attachment',
                        'background-clip',
                        'background-color',
                        'background-image',
                        'background-origin',
                        'background-position',
                        'background-repeat',
                        'background-size',

                        'cursor',

                        'padding',
                        'padding-top',
                        'padding-right',
                        'padding-bottom',
                        'padding-left',

                        'width',
                        'min-width',
                        'max-width',

                        'height',
                        'min-height',
                        'max-height',

                        'overflow',
                        'overflow-x',
                        'overflow-y',
                        'resize',

                        'list-style',
                        'list-style-type',
                        'list-style-position',
                        'list-style-image',
                        'caption-side',

                        'table-layout',
                        'border-collapse',
                        'border-spacing',
                        'empty-cells',

                        'animation',
                        'animation-name',
                        'animation-duration',
                        'animation-timing-function',
                        'animation-delay',
                        'animation-iteration-count',
                        'animation-direction',
                        'animation-fill-mode',
                        'animation-play-state',

                        'vertical-align',

                        'direction',
                        'tab-size',
                        'text-align',
                        'text-align-last',
                        'text-justify',
                        'text-indent',
                        'text-transform',
                        'text-decoration',
                        'text-decoration-color',
                        'text-decoration-line',
                        'text-decoration-style',
                        'text-rendering',
                        'text-shadow',
                        'text-overflow',

                        'line-height',
                        'word-spacing',
                        'letter-spacing',
                        'white-space',
                        'word-break',
                        'word-wrap',
                        'color',

                        'font',
                        'font-family',
                        'font-size',
                        'font-size-adjust',
                        'font-stretch',
                        'font-weight',
                        'font-smoothing',
                        'osx-font-smoothing',
                        'font-variant',
                        'font-style',

                        'content',
                        'quotes',

                        'counter-reset',
                        'counter-increment',

                        'page-break-before',
                        'page-break-after',
                        'page-break-inside',
                    ],
                },
            ],
            {
                unspecified: 'bottom',
            },
        ],
    },
};
