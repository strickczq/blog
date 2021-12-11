import { createI18n } from 'vue-i18n'

const locales = import.meta.glob<{ default: any }>('../../locales/*.yaml', {
  eager: true,
})

const messages = Object.fromEntries(
  Object.entries(locales).map(([key, value]) => {
    const yaml = key.endsWith('.yaml')
    return [key.slice(14, yaml ? -5 : -4), value.default]
  }),
)

export const install: UserModule = ({ isClient, app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: isClient ? localStorage.getItem('locale') ?? 'en' : 'en',
    globalInjection: true,
    messages,
  })

  app.use(i18n)
}
