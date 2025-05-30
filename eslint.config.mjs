
// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.ts"],
    ignores: ["!**/node_modules"],
    languageOptions: {
        parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    rules:{
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-explicit-any": "warn"
    }
   
  }
);