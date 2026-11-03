import js from "@eslint/js";
import globals from "globals";
import {defineConfig} from "eslint/config";

export default defineConfig([
  {ignores: ["dist/"]},
  {files: ["**/*.{js,ts}"], plugins: {js}, extends: ["js/recommended"]},
  {files: ["**/*.{js,ts}"], languageOptions: {globals: globals.node}},
  {languageOptions: {ecmaVersion: 2019, sourceType: "module"}},
  {files: ["rollup.config.js"], languageOptions: {ecmaVersion: 2026}}
]);
