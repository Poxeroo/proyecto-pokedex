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
        'fuego':'#d62828',
        'agua': '#0077b6',
        'hierba':'#55a630',
        'rayo':'#ffd60a',
        'tierra':'#b69121',
        'roca':'#b08968',
        'hielo':'#90e0ef',
        'lucha':'#941b0c',
        'veneno':'#c04cfd',
        'volador':'#e0aaff',
        'psiquico':'#f72585',
        'bicho':'#38b000',
        'fantasma':'#8367c7',
        'oscuridad':'#8a817c',
        'dragon':'#6a00f4',
        'acero':'#cbc0d3',
        'hada':'#ffc8dd',
        'normal':'#adb5bd'
        
        

      },
    },
  },
  plugins: [],
}
