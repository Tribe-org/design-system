import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import tsEslint from "typescript-eslint";

export default tsEslint.config(tsEslint.configs.recommended, {
  files: ["src/**/*.{ts,tsx}"],
  plugins: {
    "simple-import-sort": simpleImportSort,
    "unused-imports": unusedImports,
  },
  rules: {
    "simple-import-sort/imports": "error", // import 정렬
    "simple-import-sort/exports": "error", // export 정렬
    "no-unused-vars": "off", // 기본 규칙 비활성화
    "@typescript-eslint/no-unused-vars": "off", // TypeScript의 미사용 변수 규칙 비활성화
    "unused-imports/no-unused-imports": "error", // 미사용 import 제거
    "unused-imports/no-unused-vars": "error",
    "react/react-in-jsx-scope": "off", // React 17+ JSX 트랜스폼 설정
  },
});
