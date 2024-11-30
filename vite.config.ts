// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts"; // 타입 선언 파일 생성 플러그인
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // 타입 파일의 진입점을 추가
      copyDtsFiles: false, // 불필요한 d.ts 파일 복사 방지
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"), // 라이브러리 진입점
      name: "DesignSystem", // 번들링된 라이브러리 이름
      formats: ["es", "cjs"], // ESM과 CommonJS 형식으로 빌드
      fileName: (format) => `design-system.${format}.js`, // 출력 파일명
    },
    rollupOptions: {
      external: ["react", "react-dom"], // 외부 의존성은 번들에서 제외
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
