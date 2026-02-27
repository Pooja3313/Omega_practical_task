/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F5F4F8',
        sidebar: '#312E3F',
        sidebarMuted: '#464359',
        sidebarActive: '#F7F5FF',
        sidebarActiveText: '#1D1A31',
        accent: '#F9D66F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 40px rgba(15, 23, 42, 0.10)',
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
};

