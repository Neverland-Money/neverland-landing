// eslint.config.mjs
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// provide the built-in “eslint:recommended” (and “eslint:all” if you ever need it)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  // bring in Next.js & TS defaults along with shared plugins
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: join(__dirname, 'tsconfig.json'),
        tsconfigRootDir: __dirname,
      },
      ecmaFeatures: { jsx: true },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: { project: join(__dirname, 'tsconfig.json') },
      },
    },
    rules: {
      // Prettier integration
      'prettier/prettier': 'error',

      // Quote style
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      'jsx-quotes': ['error', 'prefer-single'],

      // React & TS tweaks
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Enforce import order
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
    ignorePatterns: ['.next/', 'node_modules/', 'out/', 'build/', 'coverage/'],
  },
]);
