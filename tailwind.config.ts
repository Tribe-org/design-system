import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        "tribe-primary-900": "#1b5d48",
        "tribe-primary-800": "#247a5f",
        "tribe-primary-700": "#2e9e7a",
        "tribe-primary-600": "#3bca9d",
        "tribe-primary-500": "#41deac",
        "tribe-primary-400": "#67E5BD",
        "tribe-primary-300": "#80E9C7",
        "tribe-primary-200": "#A8F0D9",
        "tribe-primary-100": "#C4F5E5",
        "tribe-primary-50": "#ECFCF7",
        "tribe-secondary-900": "#682C06",
        "tribe-secondary-800": "#883908",
        "tribe-secondary-700": "#B04A0A",
        "tribe-secondary-600": "#E25F0D",
        "tribe-secondary-500": "#F8680E",
        "tribe-secondary-400": "#F9863E",
        "tribe-secondary-300": "#FA9A5E",
        "tribe-secondary-200": "#FCBA90",
        "tribe-secondary-100": "#FDD0B4",
        "tribe-secondary-50": "#FEF0E7",
        "tribe-teritiary-900": "#0A102E",
        "tribe-teritiary-800": "#121838",
        "tribe-teritiary-700": "#1C2445",
        "tribe-teritiary-600": "#293353",
        "tribe-teritiary-500": "#394361",
        "tribe-teritiary-400": "#6E7CA0",
        "tribe-teritiary-300": "#9CABCF",
        "tribe-teritiary-200": "#C7D4EF",
        "tribe-teritiary-100": "#E2E9F7",
        "tribe-teritiary-50": "#ECF3FF",
        "tribe-gray-900": "#222222",
        "tribe-gray-800": "#424242",
        "tribe-gray-700": "#616161",
        "tribe-gray-600": "#757575",
        "tribe-gray-500": "#9E9E9E",
        "tribe-gray-400": "#BDBDBD",
        "tribe-gray-300": "#E0E0E0",
        "tribe-gray-200": "#EEEEEE",
        "tribe-gray-100": "#F5F5F5",
        "tribe-gray-50": "#FAFAFA",
        "tribe-success": "#2A7CF8",
        "tribe-error": "#F34B3F",
      },
    },
  },
  plugins: [],
} as Config;
