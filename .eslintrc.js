/* eslint-disable max-lines */
module.exports = {
    root: true,

    settings: {
        react: {
            version: 'detect',
        },
    },

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: ['./tsconfig.json'],
    },

    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
    ],

    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],

    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },

    plugins: ['prettier', '@typescript-eslint'],

    globals: {
        __DEV__: true,
        React: 'writable',
    },

    rules: {
        // ESLINT RULES
        'for-direction': 'error',
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-console': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-misleading-character-class': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-setter-return': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'require-atomic-updates': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'class-methods-use-this': 'error',
        complexity: 'error',
        'consistent-return': 'error',
        curly: ['error', 'multi'],
        'default-case': 'error',
        'default-param-last': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        eqeqeq: 'error',
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'error',
        'max-classes-per-file': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-constructor-return': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-restricted-properties': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': 'error',
        'no-with': 'error',
        'prefer-named-capture-group': 'off',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'error',
        radix: 'error',
        // `require-await` replaced by TS version
        'require-await': 'off',
        'require-unicode-regexp': 'error',
        'vars-on-top': 'error',
        'wrap-iife': 'error',
        yoda: 'error',
        strict: 'error',
        'init-declarations': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'off',
        // `no-unused-vars` replaced by TS version
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'callback-return': 'error',
        'global-require': 'error',
        'handle-callback-err': 'error',
        'no-buffer-constructor': 'error',
        'no-mixed-requires': 'error',
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'error',
        'no-process-exit': 'error',
        'no-restricted-modules': 'error',
        'no-sync': 'error',
        'array-bracket-newline': 'error',
        'array-bracket-spacing': 'error',
        'array-element-newline': ['error', 'consistent'],
        'block-spacing': 'error',
        'brace-style': 'error',
        camelcase: 'error',
        'capitalized-comments': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-this': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'error',
        'func-names': 'error',
        'func-style': 'off',
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': 'off',
        'id-blacklist': 'error',
        'id-length': 'error',
        'id-match': 'error',
        'implicit-arrow-linebreak': 'error',
        indent: 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'line-comment-position': 'error',
        'linebreak-style': 'error',
        'lines-around-comment': 'error',
        'lines-between-class-members': 'error',
        'max-depth': 'error',
        'max-len': ['warn', 120],
        'max-lines': 'error',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'error',
        'max-params': 'error',
        'max-statements': ['warn', 100],
        'max-statements-per-line': 'error',
        'multiline-comment-style': 'error',
        'multiline-ternary': 'off',
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-per-chained-call': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-inline-comments': 'error',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'error',
        'no-restricted-syntax': 'error',
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'error',
        'object-curly-newline': 'error',
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'off',
        'one-var': 'off',
        'one-var-declaration-per-line': 'error',
        'operator-assignment': 'error',
        'operator-linebreak': 'error',
        'padded-blocks': 'off',
        'padding-line-between-statements': 'error',
        'prefer-exponentiation-operator': 'error',
        'prefer-object-spread': 'error',
        'quote-props': 'off',
        quotes: ['error', 'single'],
        semi: 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'sort-keys': 'off',
        'sort-vars': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'switch-colon-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': 'error',
        'wrap-regex': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': 'error',
        'arrow-spacing': 'error',
        'constructor-super': 'error',
        'generator-star-spacing': 'error',
        'no-class-assign': 'error',
        'no-confusing-arrow': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-new-symbol': 'error',
        'no-restricted-imports': 'error',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': 'error',
        'sort-imports': 'off',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'yield-star-spacing': 'error',

        // TYPESCRIPT RULES
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/brace-style': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'comma',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'comma',
                    requireLast: true,
                },
            },
        ],
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-unused-vars-experimental': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/typedef': 'error',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/unified-signatures': 'error',

        // REACT RULES
        'react/boolean-prop-naming': 'error',
        'react/button-has-type': 'error',
        'react/default-props-match-prop-types': 'error',
        'react/destructuring-assignment': 'error',
        'react/display-name': 'error',
        'react/forbid-component-props': 'off',
        'react/forbid-dom-props': 'error',
        'react/forbid-elements': 'error',
        'react/forbid-prop-types': 'error',
        'react/forbid-foreign-prop-types': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'off',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'error',
        'react/no-typos': 'error',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': 'error',
        'react/prefer-read-only-props': 'error',
        'react/prefer-stateless-function': 'error',
        'react/prop-types': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': 'error',
        'react/require-optimization': 'error',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'error',
        'react/sort-prop-types': 'error',
        'react/state-in-constructor': 'error',
        'react/static-property-placement': 'error',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
        'react/jsx-boolean-value': 'error',
        'react/jsx-child-element-spacing': 'error',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-newline': 'off',
        'react/jsx-curly-spacing': 'error',
        'react/jsx-equals-spacing': 'error',
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.jsx', '.tsx'] },
        ],
        'react/jsx-first-prop-new-line': 'error',
        'react/jsx-handler-names': 'error',
        'react/jsx-indent': 'error',
        'react/jsx-indent-props': 'error',
        'react/jsx-key': 'error',
        'react/jsx-max-depth': ['warn', { max: 10 }],
        'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
        'react/jsx-no-bind': 'off',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-curly-brace-presence': 'error',
        'react/jsx-fragments': ['error', 'element'],
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-default-props': 'error',
        'react/jsx-sort-props': 'error',
        'react/jsx-tag-spacing': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'error',
    },
};
