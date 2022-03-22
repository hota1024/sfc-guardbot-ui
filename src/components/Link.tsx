import { styled } from '@/stiches.config'
import NextLink from 'next/link'

/**
 * Link props.
 */
export type LinkProps = {
  href: string

  children: React.ReactNode
}

const Anchor = styled('a', {
  color: '#f0f0f0',
  textDecoration: 'none',
})

/**
 * Link component.
 */
export const Link: React.VFC<LinkProps> = (props) => {
  const { href, children } = props

  return (
    <NextLink href={href}>
      <Anchor href={href}>{children}</Anchor>
    </NextLink>
  )
}
