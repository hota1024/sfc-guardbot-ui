import { Box } from '@/components/Box'

/**
 * Centered props.
 */
export type CenteredProps = {
  children: React.ReactNode
}

/**
 * Centered component.
 */
export const Centered: React.VFC<CenteredProps> = (props) => {
  const { children } = props

  return (
    <Box
      css={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  )
}
