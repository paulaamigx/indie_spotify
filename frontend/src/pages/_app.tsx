import '@/styles/globals.css'
import { SBottomMenu, SMinimizedPlayer } from '@/styles/Template'
import type { AppProps } from 'next/app'
import { PlayingProvider } from '@/contexts'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <PlayingProvider>
      <Component {...pageProps} />
      <SMinimizedPlayer/>
      <SBottomMenu/>
    </PlayingProvider>
  )
}
