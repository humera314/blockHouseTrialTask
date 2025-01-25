import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config} */
export default {
  languageOptions: {
    globals: globals.browser,
  },
  plugins: {
    'react': pluginReact,
    '@eslint/js': pluginJs,
  },
  extends: [
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
  ],
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],  // Match specific file extensions
    },
  ],
};
