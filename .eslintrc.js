module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: ['prettier', 'prettier/react'],
  plugins: ['import', 'prettier'],
  env: {
    es6: true,
    browser: true,
    jest: true
  },
  rules: {
    'import/extensions': 1,
    'import/no-named-as-default': 0,
    'prettier/prettier': 'error'
  }
}
