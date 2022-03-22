import Head from 'next/head'
import { title } from 'process'

/**
 * Titled props.
 */
export type TitledProps = {
  children: React.ReactNode

  title: string
}

/**
 * Titled component.
 */
export const Titled: React.VFC<TitledProps> = (props) => {
  const { children, title } = props

  return (
    <>
      <Head>
        <title>{title} | SFC Guard</title>
      </Head>
      {children}
    </>
  )
}
