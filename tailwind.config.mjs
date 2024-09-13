/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        taupe_gray: {
          DEFAULT: "#897c80",
          100: "#1b1919",
          200: "#373133",
          300: "#524a4c",
          400: "#6d6366",
          500: "#897c80",
          600: "#a09699",
          700: "#b8b0b3",
          800: "#d0cbcc",
          900: "#e7e5e6",
        },
        rosy_brown: {
          DEFAULT: "#ba8f95",
          100: "#29191b",
          200: "#523237",
          300: "#7b4c52",
          400: "#a2676f",
          500: "#ba8f95",
          600: "#c9a6ab",
          700: "#d6bdc0",
          800: "#e4d3d5",
          900: "#f1e9ea",
        },
        thistle: {
          DEFAULT: "#cfbcdf",
          100: "#2b1b38",
          200: "#563670",
          300: "#8051a7",
          400: "#a886c5",
          500: "#cfbcdf",
          600: "#dacbe6",
          700: "#e3d8ec",
          800: "#ece5f2",
          900: "#f6f2f9",
        },
      },
    },
  },
  plugins: [],
};
