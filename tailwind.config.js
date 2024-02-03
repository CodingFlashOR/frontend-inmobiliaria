// tailwind.config.js
import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Habilita el modo oscuro
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
      },
      colors: {
        amarillo: {
          DEFAULT: '#DCB416',
          50: '#FDF8E2',
          100: '#FAF0C5',
          200: '#F5E389',
          300: '#F0D64C',
          400: '#E5C625',
          500: '#DCB416',
          600: '#D2A212',
          700: '#B38C0F',
          800: '#947708',
          900: '#7A5F06'
        },
        'amarillo-cream': {
          DEFAULT: '#FFF0A5',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFE6',
          300: '#FFFFB3',
          400: '#FFFF80',
          500: '#FFF0A5',
          600: '#FFE580',
          700: '#FFD855',
          800: '#FFCC2B',
          900: '#FFBF00'
        },
        'amarillo-oscuro': {
          DEFAULT: '#A68810',
          50: '#FDF8E2',
          100: '#FAF0C5',
          200: '#F5E389',
          300: '#F0D64C',
          400: '#E5C625',
          500: '#DCB416',
          600: '#D2A212',
          700: '#B38C0F',
          800: '#947708',
          900: '#7A5F06'
        }
      }
    }
  },
  plugins: []
})
