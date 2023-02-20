import '@/styles/globals.css'
import { SBottomMenu, SLogoWrapper, SMinimizedPlayer } from '@/styles/Template'
import { useEffect, useRef, useState } from 'react'
import type { AppProps } from 'next/app'
import { Logo } from '@/components'
import { PlayingProvider } from '@/contexts'

export default function App({ Component, pageProps }: AppProps) {
  const isMounted= useRef(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(isMounted){
      setIsLoading(true)
      setTimeout(()=> setIsLoading(false), 1600)
    }
    isMounted.current = true
  },[])

  return(
    <PlayingProvider>
      {isLoading && !isMounted.current?
        <SLogoWrapper>
          <Logo/>
        </SLogoWrapper>
        :
        <>
          <Component {...pageProps} />
          <SMinimizedPlayer/>
          <SBottomMenu/>
        </>
      }
    </PlayingProvider>
  )
}
