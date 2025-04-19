import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        text: '#FFFFFF',
        primary: '#D4AF37',
        secondary: '#8B0000',
        surface: '#111111'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}

export default config
