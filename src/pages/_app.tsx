import { UserProvider } from '@auth0/nextjs-auth0'
import { globalCss } from '@stitches/react'
import type { AppProps } from 'next/app'

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  )
}

export default MyApp
