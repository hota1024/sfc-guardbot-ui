import Image from 'next/image'

/**
 * SfcGuardbotIcon props.
 */
export type SfcGuardbotIconProps = {
  size: string
}

/**
 * SfcGuardbotIcon component.
 */
export const SfcGuardbotIcon: React.VFC<SfcGuardbotIconProps> = (props) => {
  const { size } = props

  return (
    <Image
      src="/sfc-guardbot.svg"
      alt="sfc guardbot icon"
      width={size}
      height={size}
    />
  )
}
