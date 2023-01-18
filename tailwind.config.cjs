/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        red: 'hsl(0, 87%, 67%)',
        violet: {
          700: 'hsl(257, 27%, 26%)',
          800: 'hsl(260, 8%, 14%)'
        },

        gray: {
          50: 'hsl(225, 33%, 95%)',
          100: 'hsl(0, 0%, 75%)',
          500: 'hsl(257, 7%, 63%)',
          700: 'hsl(255, 11%, 22%)'
        }
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif'
      }
    }
  },
  plugins: []
}
