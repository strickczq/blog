export function useCopyrightYear(startYear: number) {
  const dayjs = $(useLocalDayjs())

  return computed(() => {
    const currentYear = dayjs().year()
    return startYear === currentYear
      ? startYear
      : `${startYear} - ${currentYear}`
  })
}
