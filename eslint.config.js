const js = require("@eslint/js");
const jsdoc = require("eslint-plugin-jsdoc");

module.exports = [
    {
        ignores: ["dist/", "*.config.js"],
    },
    js.configs.recommended,
    {
        plugins: {
            jsdoc,
        },
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                window: "readonly",
                define: "readonly",
                require: "readonly",
                document: "readonly",
                console: "readonly",
                Caman: "readonly",
                $: "readonly",
                OpenSeadragon: "readonly"
            },
        },
        rules: {
            indent: ["error", 4],
            "dot-location": ["error", "property"],
            "jsdoc/check-alignment": "error",
            "jsdoc/check-param-names": "error",
            "jsdoc/check-tag-names": "error",
            "jsdoc/require-jsdoc": [
                "warn",
                {
                    require: {
                        FunctionDeclaration: true,
                        MethodDefinition: true,
                        ClassDeclaration: true,
                        ArrowFunctionExpression: true,
                    },
                },
            ],
        },
    },
];
