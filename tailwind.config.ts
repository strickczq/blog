import type { Config } from 'tailwindcss'
import {
  createVariableColors,
  getDefaultColors,
  variableColorsPlugin,
} from 'tailwindcss-variable-colors'

const colors = getDefaultColors()

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: (() => {
      const variableColors = createVariableColors(colors)
      return {
        ...variableColors,
        label: {
          DEFAULT: variableColors.black,
          secondary: variableColors.zinc[600],
          tertiary: variableColors.zinc[500],
        },
      }
    })(),
  },
  plugins: [variableColorsPlugin(colors)],
} satisfies Config
