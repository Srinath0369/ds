/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B7CAFF',
        secondary: '#E3E3E3',
        tertiary: '#BCBCBE',
        error: '#FF4C4C',
        primaryContainer: '#7A90C8',
        background: '#121318',
        surface: '#121318',
        surfaceContainerLow: '#1E2028',
        surfaceVariant: '#2E323E',
        onSurface: '#E3E3E3',
        onSurfaceVariant: '#BCBCBE',
        onPrimary: '#00143B',
        surfaceContainerHighest: '#1A1B20',
        surfaceTint: '#000000',
        inversePrimary: '#2A4174',
        inverseSurface: '#E3E3E3',
        inverseOnSurface: '#121318',
        outline: '#2E323E',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #3b82f6, 0 0 10px #3b82f6' },
          '100%': { boxShadow: '0 0 20px #3b82f6, 0 0 30px #8b5cf6' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}
