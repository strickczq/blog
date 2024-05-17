import type { Theme as UnoTheme } from '@unocss/preset-uno'

interface C<T> {
  [key: string]: (C<T> & { DEFAULT?: T }) | T
}

type Colors = C<string>
type PairColors = C<[string, string]>

interface ColorScheme<T> {
  colors?: T
  borderColor?: T
  backgroundColor?: T
  textColor?: T
  shadowColor?: T
  accentColor?: T
}

function separateColors(colors: PairColors): [Colors, Colors] {
  const result: [Colors, Colors] = [{}, {}]
  for (const key in colors) {
    const value = colors[key]
    if (value === undefined) continue
    if (Array.isArray(value)) {
      result[0][key] = value[0]
      result[1][key] = value[1]
    } else {
      const subResult = separateColors(value)
      result[0][key] = subResult[0]
      result[1][key] = subResult[1]
    }
  }
  return result
}

function separateColorScheme(
  colorScheme: ColorScheme<PairColors>,
): [ColorScheme<Colors>, ColorScheme<Colors>] {
  const result: [ColorScheme<Colors>, ColorScheme<Colors>] = [{}, {}]
  for (const key in colorScheme) {
    const k = key as keyof ColorScheme<PairColors>
    const value = colorScheme[k]
    if (value === undefined) continue
    const valueResult = separateColors(value)
    result[0][k] = valueResult[0]
    result[1][k] = valueResult[1]
  }
  return result
}

const hsl = (h: number, s: number, l: number) => `hsl(${h}, ${s}%, ${l}%)`
const hsla = (h: number, s: number, l: number, a: number) =>
  `hsla(${h}, ${s}%, ${l}%, ${a}%)`

const blacka = (a: number | undefined = 100) => hsla(0, 0, 0, a)
const whitea = (a: number | undefined = 100) => hsla(0, 0, 100, a)

const gray = {
  DEFAULT: [hsl(240, 2, 57), hsl(240, 2, 57)] as [string, string],
  2: [hsl(240, 3, 69), hsl(240, 1, 39)] as [string, string],
  3: [hsl(240, 5, 79), hsl(240, 1, 29)] as [string, string],
  4: [hsl(240, 6, 83), hsl(240, 2, 23)] as [string, string],
  5: [hsl(240, 11, 91), hsl(240, 2, 18)] as [string, string],
  6: [hsl(240, 24, 96), hsl(240, 3, 11)] as [string, string],
}

const [lightColorScheme, darkColorScheme] = separateColorScheme({
  colors: {
    ui: {
      brand: [hsl(211, 100, 50), hsl(210, 100, 52)],
      gray,
    },
  },
  textColor: {
    ui: {
      label: {
        DEFAULT: [blacka(100), whitea(100)],
        2: [blacka(60), whitea(60)],
        3: [blacka(30), whitea(30)],
        4: [blacka(18), whitea(18)],
      },
      link: {
        DEFAULT: [hsl(214, 100, 59), hsl(210, 100, 52)],
        hover: [hsl(214, 100, 49), hsl(210, 100, 42)],
      },
    },
  },
  borderColor: {
    ui: {
      separator: gray[5],
    },
  },
  backgroundColor: {
    ui: {
      page: [whitea(), blacka()],
      card: gray[6],
      hover: gray[5],
    },
  },
})

export const lightTheme: UnoTheme = {
  ...lightColorScheme,
}

export const darkTheme: UnoTheme = {
  ...darkColorScheme,
}
