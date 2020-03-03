module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    rules: {
        "indent": [
            "error",
            4, {
                "SwitchCase": 1
            }
        ],
        "one-var": [
            "error",
            "always"
        ],
        "semi": [
            "error",
            "always"
        ],
        "vue/html-indent": [
            "error",
            4
        ],
        "vue/html-self-closing": [
            "error", {
                "html": {
                    "normal": "never"
                }
            }
        ],
        "vue/script-indent": [
            "error",
            4, {
                "baseIndent": 1
            }
        ],
        "vue/singleline-html-element-content-newline": [
            "error", {
                "ignores": ["template"]
            }
        ]
    },
    overrides: [{
        "files": ["*.vue"],
        "rules": {
            "indent": "off"
        }
    }]
}
