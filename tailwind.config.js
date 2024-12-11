module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '320px', // اضافه کردن اندازه xs (صفحات کوچکتر از 640px)
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        backgroundLight: '#dce7ff',
        backgroundDark: '#111827',
        dailyHourlyCard: '#212f4d',
        sunriseSunsetCardMainDark: '#146077',
        sunriseSunsetCardSecondDark: '#1a7e9d',
        gradientBlue: {
          light: '#3b82f6',
          mid: '#6366f1',
          dark: '#2563eb',
        },
        gradientPink: {
          light: '#ec4899',
          mid: '#f472b6',
          dark: '#f97316',
        },
        gradientOrange: {
          light: '#fb923c',
          dark: '#facc15',
        },
        textLight: '#ffffff',
        textDark: '#1f2937',
        textSecondary: '#9ca3af',
        iconPrimary: '#facc15',
        iconSecondary: '#6b7280',
        buttonPrimary: '#3b82f6',
        buttonPrimaryHover: '#2563eb',
        buttonSecondary: '#1f2937',
        borderLight: '#d1d5db',
        borderDark: '#374151',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'card-blue': 'linear-gradient(to bottom, #3b82f6, #6366f1, #2563eb)',
        'card-pink': 'linear-gradient(to bottom, #ec4899, #f472b6, #f97316)',
        'card-orange': 'linear-gradient(to bottom, #fb923c, #facc15)',
      },
    },
  },
  plugins: [],
};
