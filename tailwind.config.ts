import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      // },
      colors: {
        default: 'var(--default)',
        fail: 'var(--fail)',
        'fail-2': 'var(--fail-2)',
        main: 'var(--main)',
        'sub-1': 'var(--sub-1)',
        'sub-2': 'var(--sub-2)',
        'sub-3': 'var(--sub-3)'
      }
    }
  },
  plugins: []
};
export default config;
