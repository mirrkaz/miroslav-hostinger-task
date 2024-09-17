import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: 'module', // Use 'module' if using ES Modules
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    },
    env: {
      mocha: true // Set environment to recognize Mocha globals
    }
  },
  pluginJs.configs.recommended,
];
