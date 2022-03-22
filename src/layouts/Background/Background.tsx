import { ResponsiveBlobBackground } from './ResponsiveBlobBackground'

/**
 * Background props.
 */
export type BackgroundProps = {
  children: React.ReactNode
}

/**
 * Background component.
 */
export const Background: React.VFC<BackgroundProps> = (props) => {
  const { children } = props

  return (
    <>
      <ResponsiveBlobBackground />
      {children}
    </>
  )
}
