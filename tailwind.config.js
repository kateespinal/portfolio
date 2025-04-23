/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ff00', // Matrix green
          dark: '#00cc00',
        },
        secondary: {
          DEFAULT: '#00ffff', // Cybersecurity blue
          dark: '#00cccc',
        },
        dark: {
          DEFAULT: '#0a0a0a', // Deep dark background
          lighter: '#1a1a1a',
          darker: '#000000',
        },
        terminal: {
          green: '#00ff00', // Classic terminal green
          cyan: '#00ffff',
          red: '#ff0033',
          blue: '#0066ff',
          yellow: '#ffcc00'
        }
      },
      textColor: {
        'terminal-green': '#00ff00',
        'terminal-cyan': '#00ffff',
        'terminal-red': '#ff0033',
        'terminal-blue': '#0066ff',
        'terminal-yellow': '#ffcc00',
      },
      backgroundColor: {
        'terminal-green': '#00ff00',
        'terminal-cyan': '#00ffff',
        'terminal-red': '#ff0033',
        'terminal-blue': '#0066ff',
        'terminal-yellow': '#ffcc00',
      },
      borderColor: {
        'terminal-green': '#00ff00',
        'terminal-cyan': '#00ffff',
        'terminal-red': '#ff0033',
        'terminal-blue': '#0066ff',
        'terminal-yellow': '#ffcc00',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'], // Professional coding font
        display: ['Space Mono', 'monospace'], // For headings
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.75s step-end infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#00ff00' },
        },
        glow: {
          '0%, 100%': { 
            'text-shadow': '0 0 5px rgba(0, 255, 0, 0.5)',
          },
          '50%': { 
            'text-shadow': '0 0 10px rgba(0, 255, 0, 0.7)',
          },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
} 