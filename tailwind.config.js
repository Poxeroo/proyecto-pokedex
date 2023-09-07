/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'fire':'#d62828',
        'water': '#0077b6',
        'grass':'#55a630',
        'electric':'#ffd60a',
        'ground':'#b69121',
        'rock':'#b08968',
        'ice':'#90e0ef',
        'fighting':'#941b0c',
        'poison':'#c04cfd',
        'flying':'#e0aaff',
        'psychic':'#f72585',
        'bug':'#38b000',
        'ghost':'#8367c7',
        'dark':'#8a817c',
        'dragon':'#6a00f4',
        'steel':'#cbc0d3',
        'fairy':'#ffc8dd',
        'normal':'#adb5bd'
        
        

      },
    },
  },
  plugins: [],
}
