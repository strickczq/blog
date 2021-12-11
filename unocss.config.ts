import presetRemToPx from '@unocss/preset-rem-to-px'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: [
    [
      /bg-(page|container|secondary|accent|accent-alt)/,
      ([_, c]) =>
        ({
          page: 'bg-white dark:bg-zinc-900',
          container: 'bg-zinc-100/50 dark:bg-zinc-800/50',
          secondary: 'bg-zinc-100 dark:bg-zinc-800',
          accent: 'bg-blue-700 dark:bg-blue-500',
          'accent-alt': 'bg-blue-400 dark:bg-blue-700',
        }[c]),
    ],
    [
      /text-(primary|secondary|accent|reversed)/,
      ([_, c]) =>
        ({
          primary: 'text-zinc-900 dark:text-white',
          secondary: 'text-zinc-600 dark:text-zinc-300',
          accent: 'text-blue-700 dark:text-blue-500',
          reversed: 'text-white dark:text-zinc-900',
        }[c]),
    ],
    [
      /border-(primary|secondary|separator|accent|accent-alt)/,
      ([_, c]) =>
        ({
          primary: 'border-zinc-900 dark:border-white',
          secondary: 'text-zinc-600 dark:text-zinc-300',
          separator: 'border-zinc-200 dark:border-zinc-700',
          accent: 'border-blue-700 dark:border-blue-500',
          'accent-alt': 'border-blue-500 dark:border-blue-700',
        }[c]),
    ],
  ],
})
