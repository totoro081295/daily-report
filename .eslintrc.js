module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs', 'prettier'],
  plugins: ['prettier', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    'prefer-const': 2,
    '@typescript-eslint/no-unused-vars': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/max-attributes-per-line': [2, {
      singleline: 1
    }],
    'no-irregular-whitespace': 0
  }
}
