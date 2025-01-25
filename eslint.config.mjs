import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,jsx}"],  // Matches files with these extensions
  languageOptions: {
    globals: globals.browser,  // Use browser global variables
  },
  plugins: {
    'react': pluginReact,
    '@eslint/js': pluginJs,
  },
  extends: [
    pluginJs.configs.recommended,  // Use the recommended ESLint JS rules
    pluginReact.configs.flat.recommended,  // Use the recommended React rules
  ],
};
