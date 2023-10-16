export const rem = (value: number, base = 16) => `${value / base}rem`

// https://rsms.me/inter/dynmetrics
// tracking = a + b * e ^ (c * z)
// e = Math.E (2.718281828459045)
// z = font size
// a = -0.0223
// b =  0.1850
// c = -0.1745

export const getInterTracking = (
  fontSize: number,
  a = -0.0223,
  b = 0.185,
  c = -0.1745,
) => (a + b * Math.pow(Math.E, c * fontSize)).toFixed(3) + "em"

export const getMonoTracking = (fontSize: number) => `${fontSize && 0}`

export const getLeading = (fontSize: number, lineHeight: number) => {
  const value = Math.floor(lineHeight * fontSize)
  const isOdd = Boolean(value % 2)

  return rem(isOdd ? value + 1 : value)
}

export type FontTrackingFunction = (number) => string

export interface FontConfig {
  letterSpacing?: string
  lineHeight?: string
  fontWeight?: string
}

export type FontSettings = [string, FontConfig]

export const getFontSettings =
  (defaultLineHeight: number, getTracking: FontTrackingFunction) =>
  (fontSize: number, lineHeight = defaultLineHeight): FontSettings => [
    rem(fontSize),
    {
      letterSpacing: getTracking(fontSize),
      lineHeight: getLeading(fontSize, lineHeight),
    },
  ]

export const getHeroFont = getFontSettings(1.1, getInterTracking)

export const getBodyFont = getFontSettings(1.5, getInterTracking)

export const getMonoFont = getFontSettings(1.5, getMonoTracking)
