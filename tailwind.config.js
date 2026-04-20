/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        military: {
          50: '#f3f8f6',
          100: '#dceae3',
          500: '#2f6b57',
          700: '#1f4a3b',
          900: '#123127',
        },
      },
      boxShadow: {
        panel: '0 8px 24px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
