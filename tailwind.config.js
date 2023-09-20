const defaultColors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        entering: "entering 0.5s cubic-bezier(0,1.09,1,.98)",
        leaving: "leaving 0.5s cubic-bezier(0,1.09,1,.98)",
      },
      keyframes: {
        entering: {
          '0%': { opacity: 0, },
          // '50%': { transform: 'rotate(3deg)' },
          '100%': { opacity: 100, }
        },
        leaving: {
          '0%': { opacity: 100, },
          // '50%': { transform: 'rotate(3deg)' },
          '100%': { opacity: 0, }
        },
      },

      fontFamily: {
        'instagram': ['instagram', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        white: "#fdfdfd",
        black: {
          ...defaultColors.black,
          primary: "rgb(0,0,0)",
          light: "rgba(40, 40, 50)",
          dark: "rgba(0,0,0)",
        },
        gray: {
          ...defaultColors.gray,
          primary: {
            '50': '#f7f7f7',
            '100': '#ededed',
            '200': '#d9d9d9',
            '300': '#c8c8c8',
            '400': '#adadad',
            '500': '#999999',
            '600': '#888888',
            '700': '#7b7b7b',
            '800': '#676767',
            '900': '#545454',
            '950': '#363636',
          },
          light: "rgba(153, 163, 198, 1)",
          dark: "rgba(62, 73, 103, 1)",
          ultralight: "rgb(203, 207, 220, 1)",
        },
        blue: {
          ...defaultColors.blue,
          primary: {
            '50': '#f3f7f8',
            '100': '#e0eaed',
            '200': '#c5d7dc',
            '300': '#9cbac4',
            '400': '#6e97a5',
            '500': '#517a89',
            '600': '#466574',
            '700': '#3d5561',
            '800': '#384952',
            '900': '#323e47',
            '950': '#1e282e',
          },
        },
        green: {
          ...defaultColors.green,
          primary: {
            '50': '#f0f9f3',
            '100': '#dbf0e1',
            '200': '#b9e1c7',
            '300': '#8bcaa4',
            '400': '#5aad7e',
            '500': '#399062',//light
            '600': '#28734d',
            '700': '#215f41',//primary
            '800': '#1b4a34',
            '900': '#173d2b',//dark
            '950': '#0c2219',
          },

        },
        red: {
          ...defaultColors.red,
        },
        yellow: {
          ...defaultColors.yellow,
          primary: {
            '50': '#fcfaee',
            '100': '#f4efd1',
            '200': '#e9df9e',
            '300': '#ddca6c',
            '400': '#d9bd59',
            '500': '#cc9d34',
            '600': '#b47c2b',
            '700': '#965e27',
            '800': '#7b4b25',
            '900': '#663e21',
            '950': '#39200f',
          },
        },
        orange: {
          ...defaultColors.orange,
        },
        purple: {
          ...defaultColors.purple,
        }
      }
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: defaultColors.black,
    //   white: defaultColors.white,
    //   gray: defaultColors.gray,
    //   emerald: defaultColors.emerald,
    //   indigo: defaultColors.indigo,
    //   yellow: defaultColors.yellow,
    // },
  },
  variants: {
    extend: {
      shadow: ['hover', 'focus', 'group-hover', 'group-focus'],
      backgroundColor: ['hover', 'focus', 'group-hover', 'group-focus'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

