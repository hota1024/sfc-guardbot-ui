import { styled } from '@/stiches.config'

export const ResponsiveBlobBackground = styled('div', {
  '@xs': {
    background: `url(/blob-scene-1x2.svg)`,
  },
  '@sm': {
    background: `url(/blob-scene-3x4.svg)`,
  },
  '@md': {
    background: `url(/blob-scene-16x9.svg)`,
  },
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  minHeight: '100vh',
  position: 'absolute',
  zIndex: -1,
})
