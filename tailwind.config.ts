import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      orange: {
        20: '#FBCFA2CC', //transparent 80%
        30: '#FBCEA0'
      },
      brown: { 30: '#C19976', 50: '#8F8031' },
      beige: { 50: '#D0B285' }
    },

    fontFamily: {
      jeju: ['JejuMyeongjo', ...defaultTheme.fontFamily.sans],
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
      gothic: ['Gothic A1', ...defaultTheme.fontFamily.sans],
      beaufortLoL: ['BeaufortforLOL', ...defaultTheme.fontFamily.sans]
    },
    boxShadow: { 'custom-black': '0px 0px 10px 0px #00000040' },
    extend: {
      backgroundImage: {
        whiteToPeach: 'linear-gradient(180deg, #FFFFFF 0%, #FFD8AA 100%)',
        whiteToBlack:
          'linear-gradient(3.71deg, #000000 12.46%, rgba(0, 0, 0, 0) 86.66%)',
        whiteToPeach96deg:
          'linear-gradient(96deg, #FFFFFF 0%, #FBCEA0 66%, #FBCFA0 100%)',
        whiteToPeach98deg:
          'linear-gradient(98.05deg, #FFFFFF 0%, #FBCEA0 66%, #FBCFA0 100%)',
        yellowToOrange: 'linear-gradient(90deg, #FEFFBC 0%, #9C6716 109.36%)',
        fadeToTransparent:
          'linear-gradient(to bottom, #000000 0%, #00000000 100%)',
        yellowGlowCenter:
          'radial-gradient(50% 50% at 50% 50%, rgba(255, 222, 103, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
        fadeToYellow270deg:
          'linear-gradient(270deg, rgba(254, 255, 188, 0) -53.8%, #FEFFBC 100%)',
        goldenAmber90deg: 'linear-gradient(90deg, #E9CFA9 0%, #FFC671 33.36%)',
        goldToBronze90deg: 'linear-gradient(90deg, #F1BB6A 0%, #997743 100%)'
      },
      backgroundSize: {
        full: '100% 100%'
      }
    }
  },
  plugins: []
}
export default config
