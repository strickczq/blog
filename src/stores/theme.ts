import { persistentAtom } from '@nanostores/persistent'

export type Theme = 'light' | 'dark'

export const $theme = persistentAtom<Theme>(
  'theme',
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
)

$theme.subscribe((value) => {
  document.documentElement.classList.toggle('dark', value === 'dark')
})

export function toggleTheme() {
  $theme.set($theme.get() === 'dark' ? 'light' : 'dark')
}
