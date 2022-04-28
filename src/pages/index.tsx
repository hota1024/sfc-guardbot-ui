import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { SfcGuardbotIcon } from '@/components/SfcGuardbotIcon'
import { Stack } from '@/components/Stack'
import { Background } from '@/layouts/Background/Background'
import { Centered } from '@/layouts/Centered/Centered'
import { Titled } from '@/layouts/Titled/Titled'
import { NextPage } from 'next'
import Image from 'next/image'

/**
 * HomePage component.
 */
export const HomePage: NextPage = () => {
  return (
    <Background>
      <Titled title="TOP">
        <Centered>
          <Stack css={{ maxWidth: 260, width: '100%', textAlign: 'center' }}>
            <div>
              <SfcGuardbotIcon size="120px" />
            </div>
            <h1>SFC Guard</h1>
            <Button color="blue" block>
              <span style={{ marginRight: '0.8rem' }}>
                <Image
                  src="/discord-white.svg"
                  alt="discord white logo"
                  width="24px"
                  height="24px"
                />
              </span>
              Discordでログイン
            </Button>
            <Link href="/about">このサイトについて</Link>
          </Stack>
        </Centered>
      </Titled>
    </Background>
  )
}

export default HomePage
