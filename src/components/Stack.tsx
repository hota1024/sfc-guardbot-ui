import { styled } from '@/stiches.config'

export const Stack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  ':first-child': {
    marginTop: 0,
  },
  '*': {
    marginTop: '16px',
  },
  variants: {
    spacings: {
      [0]: {
        '*': {
          marginTop: '$spacing.0',
        },
      },
    },
  },
})
