module.exports = {
  // So parent files don't get applied
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended','plugin:react/recommended', 'prettier', 'prettier/react'],
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
    'babel',
    'react',
    'jest',
    'import',
  ],
  rules: {
    'arrow-parens': 'off',
    'consistent-this': ['error', 'self'],
    'consistent-return': 'off', // Wishlist, one day
    'dot-notation': 'error',
    'eqeqeq': ['error', 'smart'],
    'indent': ['off', 2, {SwitchCase: 1}],
    'id-blacklist': ['error', 'e'],
    'max-len': 'off',
    'new-cap': ['off', {capIsNew: true, newIsCap: true}], // Wishlist, one day
    'no-unused-expressions': 'off', // do expressions in es7 https://github.com/babel/eslint-plugin-babel/issues/13
    'no-unused-vars': 'error',
    'no-shadow': 'off', // Wishlist, one day
    'no-undef': 'error',
    'no-empty-pattern': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-duplicate-case': 'error',
    'no-cond-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'operator-linebreak': ['off', 'after'],
    'prefer-arrow-callback': 'off', // Wishlist, one day
    'prefer-const': 'error',
    'prefer-template': 'error',
    'spaced-comment': 'error',
    'yoda': 'error',
    'babel/object-curly-spacing': 'off',
    'babel/arrow-parens': 'off',
    'no-await-in-loop': 'error',
    'react/display-name': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-curly-spacing': 'off',
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/jsx-handler-names': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-multi-comp': 'off', // Wishlist, one day
    'react/no-render-return-value': 'error',
    'react/no-is-mounted': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-arrow-callback': 'off', // Wishlist, one day
    'react/prefer-es6-class': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'import/extensions': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'react/no-string-refs': 'warn', // Whishlist, one day.
    'react/no-unused-prop-types': 'error',
    'strict': 'off',
    'no-case-declarations': 'off',
    'react/jsx-key': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-sort-props': 'error',
    'react/no-set-state': 'off',
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/require-optimization': 'off',
    'babel/object-shorthand': 'off',
    'babel/new-cap': 'off',
    "jest/no-identical-title": 'error',
  },
};
