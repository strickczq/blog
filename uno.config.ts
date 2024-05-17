import { defineConfig } from 'unocss'
import { type Theme, presetUno } from '@unocss/preset-uno'
import { presetIcons } from '@unocss/preset-icons'
import { presetTheme } from 'unocss-preset-theme'
import transformerVariantGroup from '@unocss/transformer-variant-group'

import { lightTheme, darkTheme } from './theme'

export default defineConfig<Theme>({
  content: {
    filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
  },
  theme: lightTheme,
  shortcuts: {
    card: 'transition bg-ui-card hover:bg-ui-hover hover:scale-102 border border-ui-separator rounded-lg overflow-hidden',
  },
  presets: [
    presetUno(),
    presetIcons({ scale: 1.2, warn: true }),
    presetTheme<Theme>({
      theme: { dark: darkTheme },
    }),
  ],
  transformers: [transformerVariantGroup()],
})
