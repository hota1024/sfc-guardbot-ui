import { createStitches } from '@stitches/react'

const createSpacingMap = (start: number, step: number, length: number) => {
  let map: { [key: number]: number } = {}

  for (let i = 0; i < length; i++) {
    map[i] = start + i * step
  }

  return map
}

const space = createSpacingMap(-16, 8, 32)

export const mapSpace = <T>(fn: () => T): T => {}

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      yellow: '#FDD000',
      blue: '#5865F2',
      black: '#23272A',
    },
    space,
  },
  media: {
    xs: '(max-width: 599px)',
    sm: '(min-width: 600px)',
    md: '(min-width: 1200px)',
    lg: '(min-width: 1800px)',
  },
})
