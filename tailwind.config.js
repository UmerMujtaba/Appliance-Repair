// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      clipPath: {
        custom: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
      },
    },
  },
  plugins: [],
};
