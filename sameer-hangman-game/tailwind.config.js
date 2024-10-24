/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        boogaloo: ["Boogaloo", "cursive"],
      },
      
      animation: {
        dash: "dash 5s linear forwards",
        jump: "jmp 5s linear infinite",
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: 0 },
        },
        jmp: {
          "0%": {},
          "11%": { transform: "rotate(270deg)", bottom: "30px", left: "260px" },
          "22%": { transform: "rotate(450deg)", bottom: "100px", left: "0" },
          "33%": {
            transform: "rotate(630deg)",
            bottom: "150px",
            left: "260px",
          },
          "44%": { transform: "rotate(810deg)", bottom: "210px", left: "0" },
          "55%": {
            transform: "rotate(990deg)",
            bottom: "250px",
            left: "260px",
          },
          "66%": { transform: "rotate(1170deg)", bottom: "200px", left: "0" },
          "77%": {
            transform: "rotate(1350deg)",
            bottom: "150px",
            left: "260px",
          },
          "88%": { transform: "rotate(1530deg)", bottom: "40px", left: "0" },
          "100%": { transform: "rotate(1800deg)" },
        },
      },
    },
  },
  plugins: [],
};
