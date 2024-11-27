/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"], // Use Poppins as your main font
      },
      keyframes: {
        popInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        popInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slide: {
          "0%, 25%": { transform: "translateY(0)" },
          "33%, 58%": { transform: "translateY(-100%)" },
          "66%, 91%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(-300%)" },
        },
      },
      animation: {
        popInLeft: "popInLeft 1s ease-out",
        popInRight: "popInRight 1s ease-out",
      },
    },
  },
  plugins: [],
};
