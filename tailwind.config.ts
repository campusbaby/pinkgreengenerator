import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brave-pink': '#F784C5',
        'hero-green': '#1B602F',
        'brave-pink-friendly': '#F99FD2', 
        'hero-green-friendly': '#165027',
      },
    },
  },
  plugins: [],
}
export default config