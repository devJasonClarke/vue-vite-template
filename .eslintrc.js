module.exports = {
  env: {
    node: true
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {
    "no-unused-vars": "off",
    "no-var": "error",
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", { before: false, after: true }],
    "vue/html-quotes": ["error", "double", { avoidEscape: false }],
    /*     "vue/no-unused-vars": [
      "error",
      {
        ignorePattern: "^_"
      }
    ], */
    "vue/no-unused-components": [
      "error",
      {
        ignoreWhenBindingPresent: true
      }
    ],
    "vue/no-use-v-if-with-v-for": [
      "error",
      {
        allowUsingIterationVar: false
      }
    ],
    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "ignore",
        multiline: "below"
      }
    ],
    "vue/component-api-style": ["error", ["script-setup", "composition"]],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: true
      }
    ],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["about", "index", "again"]
      }
    ]
  }
};
