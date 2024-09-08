module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#E6F3FF',
        'dark-blue': '#0056b3',
        blue: {
          100: '#E6F0FD',
          500: '#3B82F6',
          600: '#2563EB',
          800: '#1E40AF',
        },
        gray: {
          100: '#F3F4F6',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}