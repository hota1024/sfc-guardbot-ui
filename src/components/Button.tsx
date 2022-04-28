import { styled } from '@/stiches.config'

export const Button = styled('button', {
  fontWeight: 'bold',
  fontSize: '0.975',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 'none',
  minWidth: '160px',
  padding: '0 1rem',
  height: '48px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: [
    'background 140ms',
    'color 140ms',
    'box-shadow 200ms',
    'transform 200ms ease',
  ].join(','),
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.3)',
  },
  '&:active': {
    transform: 'none',
    boxShadow: 'none',
  },
  variants: {
    color: {
      blue: {
        backgroundColor: '$blue',
        color: 'white',
      },
    },
    block: {
      true: {
        width: '100%',
      },
    },
  },
})
