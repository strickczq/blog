import { isClient } from '@vueuse/core'
import _dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

_dayjs.extend(relativeTime)

export function useLocalDayjs() {
  const { locale } = useI18n()

  return computed(() => {
    _dayjs.locale(locale.value)
    return _dayjs
  })
}

export function useLocale() {
  const { availableLocales, locale } = useI18n()

  watchEffect(() => {
    console.log('new locale', locale.value)
    if (isClient) {
      document.documentElement.lang = locale.value
      localStorage.setItem('locale', locale.value)
    }
  })

  const toggleLocale = () => {
    const locales = availableLocales
    locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  }

  return {
    locale,
    toggleLocale,
  }
}
