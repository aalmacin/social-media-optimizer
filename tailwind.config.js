/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Bright Blue
        secondary: '#22C55E', // Green
        accent: '#F97316', // Orange
        success: '#22C55E', // Green
        warning: '#F59E0B', // Amber
        error: '#EF4444', // Red
        neutral: {
          light: '#F3F4F6', // Light Gray
          dark: '#374151', // Dark Gray
        },
      },
    },
  },
  plugins: [],
}

