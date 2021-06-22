/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 15:53:42
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
module.exports = {
  purge: ['./public/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    borderColor: theme => ({
      DEFAULT: theme('colors.indigo.500', 'currentColor'),
      purple: theme('colors.purple.500'),
      blue: theme('colors.blue.500'),
      gray: theme('colors.gray.500'),

      indigo: theme('colors.indigo.500'),
      pink: theme('colors.pink.500')
    }),
    borderRadius: {
      DEFAULT: '2.5rem',
      '4xl': '2.5rem'
    },
    fontSize: {
      tiny: '0.9rem',
      xs: '1.0rem',
      base: '1.2rem',
      sm: '1.2rem',
      md: '1.4rem',
      lg: '1.6rem',
      xl: '1.8rem',
      '2xl': '2rem',
      '3xl': '2.2rem',
      '4xl': '2.4rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem'
    },
    boxShadow: {
      default: '3px 5px 1px #171040',
      purple: '3px 5px 1px #21076E',
      lightblue: '3px 5px 1px #0B4C78',
      blue: '3px 5px 1px #162F7C',
      orange: '3px 5px 1px #A65512'

    },
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)'
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)'
    },
    extend: {
      borderColor: theme => ({
        DEFAULT: theme('colors.indigo.500', 'currentColor'),
        indigo: theme('colors.indigo.500')
      }),
      borderRadius: {
        DEFAULT: '2.5rem',
        '4xl': '2.5rem'
      },
      backgroundImage: theme => ({
        waves: "url('../images/waves.svg')",
        gradient: 'linear-gradient(90deg, #8F6AFA 0%, #375CDC 47.03%, #0099EE 105%)',
        wallpaper: "url('../images/wallpaper.svg')",
        'black-gradient': 'linear-gradient(90deg, #292929 2.11%, #000000 104.85%)'
      }),
      colors: {
        transparent: 'transparent',
        purple: {
          DEFAULT: '#6633FF',
          50: '#CDBDFF',
          100: '#C2ADFF',
          200: '#AB8FFF',
          300: '#9470FF',
          400: '#7D52FF',
          500: '#6633FF',
          600: '#571FFF',
          700: '#470AFF',
          800: '#3D00F5',
          900: '#3800E0'
        },
        indigo: {
          DEFAULT: '#3366FF',
          50: '#BDCDFF',
          100: '#ADC2FF',
          200: '#8FABFF',
          300: '#7094FF',
          400: '#527DFF',
          500: '#3366FF',
          600: '#1F57FF',
          700: '#0A47FF',
          800: '#003DF5',
          900: '#0038E0'
        },
        orange: {
          DEFAULT: '#FE943C',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFE8D4',
          300: '#FFCCA1',
          400: '#FEB06F',
          500: '#FE943C',
          600: '#FE7809',
          700: '#D36001',
          800: '#A04901',
          900: '#A65512'
        },
        pink: {
          DEFAULT: '#EA4C89',
          50: '#F8C7DA',
          100: '#F7BAD1',
          200: '#F49EBF',
          300: '#F083AD',
          400: '#ED679B',
          500: '#EA4C89',
          600: '#E73177',
          700: '#DF1A66',
          800: '#C31759',
          900: '#A8144D'
        },
        blue: {
          DEFAULT: '#0099FF',
          50: '#8AD0FF',
          100: '#7ACAFF',
          200: '#5CBEFF',
          300: '#3DB1FF',
          400: '#1FA5FF',
          500: '#0099FF',
          600: '#008DEB',
          700: '#0081D6',
          800: '#0B4C78',
          900: '#162F7C'
        },
        gray: {
          DEFAULT: '#b2b2b2',
          50: '#f6f6f6',
          100: '#6e6e6e',
          200: '#666666',
          300: '#555555',
          400: '#444444',
          500: '#b2b2b2',
          600: '#3e3e3e',
          700: '#333333',
          800: '#212121',
          900: '#121212'
        },
        black: {
          DEFAULT: '#121212',
          50: '#f6f6f6',
          100: '#666666',
          200: '#444444',
          300: '#333333',
          400: '#212121',
          500: '#121212',
          600: '#000000',
          700: '#333333',
          800: '#121212',
          900: '#000000'
        }

      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-bootstrap-grid'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
}
