import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard-Regular", "sans-serif"],
      },
      colors: {
        "tribe-green": "#41DEAC",
        "tribe-orange": "#F8680E",
        "tribe-navy": "#07143A",
        "tribe-informative": "#2B87EB",
        "tribe-error": "#DE3535",
      },
    },
  },
  plugins: [],
} as Config;
