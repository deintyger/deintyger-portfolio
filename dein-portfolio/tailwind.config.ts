import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,jsx}'],
  // `mode: 'jit'` was used in older Tailwind versions — keep for compatibility
  // (Tailwind v3+ uses JIT by default and may ignore this field)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}

export default config
