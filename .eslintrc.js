module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  // plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: 'off',
    'no-plusplus': 'off',
    // 'max-len': 'off'
    'vue/no-template-key': 'off',
    'less(css-mediaqueryexpected)': 'off',
    // comma-dangle：'off',
    // linebreak-style': 'off',
  },
}
