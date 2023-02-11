import { Logo, PlayingAnimation} from '@/components'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className={inter.className}>
      Hello World!
      <div style={{width: '100px', height: '200px'}}>
        <Logo/>
        <PlayingAnimation/>
      </div>
    </div>
  )
}
