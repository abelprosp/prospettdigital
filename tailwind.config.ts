import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color
        primary: {
          DEFAULT: '#105DFC',    // Main brand blue
          light: '#3D7DFD',     // Lighter blue
          dark: '#0A4BC4',       // Darker blue
          soft: '#105DFC20',     // Soft blue with opacity
        },
        // Black and grays
        black: {
          DEFAULT: '#000000',    // Pure black
          dark: '#0A0A0A',       // Almost black
          light: '#1A1A1A',      // Dark gray
        },
        gray: {
          dark: '#2A2A2A',       // Dark gray
          mid: '#4A4A4A',        // Medium gray
          light: '#6A6A6A',      // Light gray
          lighter: '#E8E8E8',   // Very light gray
          lightest: '#F5F5F5',  // Almost white
        },
      },
      fontFamily: {
        editorial: ['Classy Marisa', 'serif'],
        urban: ['var(--font-urban)', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'headline': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'title': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
      },
      spacing: {
        'section': 'clamp(4rem, 12vw, 8rem)',
        'block': 'clamp(2rem, 6vw, 4rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(16, 93, 252, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(16, 93, 252, 0.6)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
export default config

