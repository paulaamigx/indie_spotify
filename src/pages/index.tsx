import { Inter } from '@next/font/google'
import { Logo } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className={inter.className}>
      Hello World!
      <Logo/>
    </div>
  )
}
