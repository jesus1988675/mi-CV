module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,  // Si tu proyecto usa el navegador
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: [
    "eslint:recommended",
    "google",
    "plugin:react/recommended",  // Asegúrate de incluir el plugin React
  ],
  settings: {
    react: {
      version: "detect", // Detecta la versión de React automáticamente
    },
  },
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
  },
  globals: {
    module: "readonly",
    exports: "readonly",
  },
};
