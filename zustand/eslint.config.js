import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint, { parser } from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks';
import tsParser from '@typescript-eslint/parser';
import stylisticTs from '@stylistic/eslint-plugin-ts'

export default [

  {
    files: ["**/*.{ts,jsx,tsx}"],
    plugins: {
      tseslint,
      pluginJs,
      react,
      reactHooks,
      '@stylistic/ts': stylisticTs
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser
      }
    },

    rules: {
      '@stylistic/ts/block-spacing': ['warn', 'always'],
      '@stylistic/ts/brace-style': ["warn", "stroustrup"],
      '@stylistic/ts/comma-dangle': ["warn", "never"],
      '@stylistic/ts/semi': ['warn', 'always'],
      '@stylistic/ts/keyword-spacing': ["error", { "before": true }],
      '@stylistic/ts/no-extra-parens': "warn",
      '@stylistic/ts/quotes': ["error", "single"],
      '@stylistic/ts/object-curly-spacing': ['warn', 'always'],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/self-closing-comp': 'error',
      'react/forward-ref-uses-ref': 'error',
      "react/function-component-definition": ['error', {
        'namedComponents': 'arrow-function',
        'unnamedComponents': 'arrow-function'
      }],
      "react/jsx-boolean-value": ['error', "never"],
      'react/jsx-curly-brace-presence': ['warn', 'always'],
      'react/jsx-curly-newline': ['error', {
        'multiline': 'consistent',
        'singleline': 'consistent',
      }],
      'react/jsx-curly-spacing':['warn', {"when": "never", "spacing": {
        "objectLiterals": "never"
      }}],
      "react/jsx-filename-extension": ['warn', { "extensions": [".tsx"] }],
      "react/jsx-indent":['warn', 'tab', {
        checkAttributes: true,
        indentLogicalExpressions:true
      }],
      "react/jsx-indent-props": ['warn', 'tab'],
      "react/jsx-key": ['error', { "checkFragmentShorthand": true, checkKeyMustBeforeSpread: true }],
      "react/jsx-max-props-per-line": ['warn', { "maximum": { "single": 3 } }],
      "react/jsx-no-literals": ['warn'],
      "react/jsx-no-undef": ['error', { "allowGlobals": true }],
      "react/jsx-no-useless-fragment": 'warn',
      "react/jsx-one-expression-per-line": ['warn', { "allow": "none" }],
      "react/jsx-pascal-case": ['warn', { allowNamespace: true }],
      'react/jsx-props-no-multi-spaces': 'warn',
      'react/jsx-props-no-spread-multi': 'error',
      "react/jsx-sort-props": ['error', {
        "callbacksLast": true,
        "multiline": "last",
        "ignoreCase": true,
      }],
      'react/jsx-tag-spacing': ['warn',
        {
          "closingSlash": "allow",
          "beforeSelfClosing": "always",
          "afterOpening": "allow",
          "beforeClosing": "allow"
        }
      ],
      'react/jsx-uses-vars': 'warn',
      'react/no-array-index-key': 'error',
      'react/no-deprecated': 'error',
      'react/no-string-refs': 'error',
      "react/no-unescaped-entities": ['error'],
      "react/no-unknown-property": ['error'],
      'react/no-unstable-nested-components': ['error'],
  },
}
  // {languageOptions: { globals: globals.browser }},
  // pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
  // react.configs.flat.recommended,
];

// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import react from "eslint-plugin-react";


// export default [
//   {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   react.configs.flat.recommended,
// ];