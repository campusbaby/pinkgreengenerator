import js from '@eslint/js';
import typescript from 'typescript-eslint';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/compat';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  js.configs.recommended,
  ...typescript.configs.recommended,
  ...fixupConfigRules(compat.extends('next/core-web-vitals')),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  },
];