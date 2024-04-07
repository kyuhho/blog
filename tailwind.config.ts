import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'template-projects': 'repeat(2,1fr)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'button-common': '#57bfc1',
        'button-purple': '#dd83f8',
        'button-blue': '#38bdf8',
        'button-black-common': '#1a1f1f',
        'button-black-purple': '#191a28',
        'button-black-blue': '#191b1d',
        'card-bg': '#32343D',
      },
    },
  },
  plugins: [],
};
export default config;
