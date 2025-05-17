// const config = {
//   theme: {
//     extend: {
//       colors: {
//         lightHover: '#fcf4ff',
//         darkHover: '#2a004a',
//         darkTheme: '#11001f'
//       },
//       fontFamily: {
//         Outfit: ["Outfit", "sens-serif"],
//         Ovo: ["Ovo", "serif"]
//       }
//     },
//   },
//   plugins: ["@tailwindcss/postcss"],
// };

// export default config;



/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001f',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        ovo: ['Ovo', 'serif'],
      },
    },
  },
  // darkMode: 'selector',
  plugins: ["@tailwindcss/postcss"]
};

export default config;
