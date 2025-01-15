/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"],
 theme: {
  colors: {
   'cinza': '#ff9344',
   'amarelo': '#E5B634',
   'azul-escuro': '#3A6CB5',
   'azul-claro': '#24A1E1',
   'verde': '#2BB898',
   'cinza': '#D7D7D9',
   'branco': '#FFFFFF',
   'cinza-escuro': '#333333',
  },
  fontFamily: {
   'sans': ['ui-sans-serif', 'system-ui'],
   'serif': ['ui-serif', 'Georgia'],
   'mono': ['ui-monospace', 'SFMono-Regular'],
   'display': ['Oswald'],
   'body': ['"Open Sans"']
  },
  container: {
   center: true,
  },
  extend: {},
 },
 plugins: [],
}
