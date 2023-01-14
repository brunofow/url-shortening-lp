/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        violet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',

        gray: {
          100: 'hsl(0, 0%, 75%)',
          500: 'hsl(257, 7%, 63%)',
          700: 'hsl(255, 11%, 22%)',
          800: 'hsl(260, 8%, 14%)'
        }
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif'
      }
    }
  },
  plugins: []
}
