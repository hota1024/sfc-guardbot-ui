import { createStitches } from '@stitches/react'

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
  },
  media: {
    xs: '(max-width: 599px)',
    sm: '(min-width: 600px)',
    md: '(min-width: 1200px)',
    lg: '(min-width: 1800px)',
  },
})
