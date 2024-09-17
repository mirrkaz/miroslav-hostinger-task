import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020, // Use the latest ECMAScript features
        sourceType: "script", // CommonJS syntax
      },
    },
  },
  pluginJs.configs.recommended,
];
