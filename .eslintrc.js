module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:vue/essential",
        "standard",
        "plugin:vue/vue3-recommended",
        'plugin:nuxt/recommended',
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser"
    },
    "plugins": [
        "vue",
        "@typescript-eslint",
    ],
    "rules": {
        "vue/multi-word-component-names": 0,
        "no-undef": 0,
        "vue/no-v-model-argument": 0,
        "no-unused-vars": 0,
        "vue/require-default-prop": 0
        // "extends": "plugin:nuxt/base",
    }
}
