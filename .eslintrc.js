module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        semi: ['error', 'always', { omitLastInOneLineBlock: true }],
        'one-var': ['error', 'consecutive'],
        curly: ['error', 'multi-line'],
        'no-unused-vars': ['error', { argsIgnorePattern: '^_|(reject)' }],
        camelcase: ['error', { properties: 'never', ignoreDestructuring: true, allow: ['.*'] }],
        'vue/no-side-effects-in-computed-properties': [0]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
