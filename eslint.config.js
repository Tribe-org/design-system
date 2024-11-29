import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import tsEslint from "typescript-eslint";

export default tsEslint.config(tsEslint.configs.recommended, {
  files: ["**/*.{ts,tsx}"],
  plugins: {
    "simple-import-sort": simpleImportSort,
    "unused-imports": unusedImports,
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-unused-vars": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
});
