module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'max-lines-per-function': ['error', { max: 600 }],
        'no-caller': 'error',
        'no-empty-function': 'error',
        'no-eval': 'error',
        'no-sequences': 'off',
        'react-hooks/exhaustive-deps': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react/display-name': 0,
        'require-await': 'error',
        eqeqeq: 'error'
    }
};
