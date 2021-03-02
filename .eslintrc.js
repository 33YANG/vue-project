module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: 'off',
    'no-plusplus': 'off',
    // 'max-len': 'off',
    'vue/no-template-key': 'off',
    'less(css-mediaqueryexpected)': 'off',
    // 'comma-dangle': 'off',
    // 'linebreak-style': off,
    'func-names': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}

