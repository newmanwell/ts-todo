import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import erasableSyntaxOnly from "eslint-plugin-erasable-syntax-only";


defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
]);

tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	erasableSyntaxOnly.configs.recommended, // 👈
);

export {defineConfig, tseslint}
