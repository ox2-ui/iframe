module.exports = {
  // So parent files don't get applied
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended','plugin:react/all', 'plugin:import/errors', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    }
  },
  plugins: [
    'react',
    'jest',
    'import',
  ],
  rules: {
    'arrow-parens': ["error", "as-needed"],
    'consistent-return': 'error',
    'consistent-this': ['error', 'self'],
    'dot-notation': 'error',
    'eqeqeq': ['error', 'always'],
    'id-blacklist': ['error', 'e'], // B
    'new-cap': ['error', {capIsNew: true, newIsCap: true}], // Wishlist, one day
    'no-await-in-loop': 'error',
    'no-shadow': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'off', // do expressions in es7 https://github.com/babel/eslint-plugin-babel/issues/13
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'spaced-comment': 'error',
    'yoda': 'error',
    'react/forbid-component-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-literals': 'off',
    'react/no-children-prop': 'off',
    'react/no-set-state': 'off',
  },
};
