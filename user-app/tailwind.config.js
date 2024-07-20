/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Include all files in the 'pages' directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Include all files in the 'components' directory
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
