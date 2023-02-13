import { AlbumHorizontal, AlbumVertical, Logo } from '@/components'
import { Inter } from '@next/font/google'
import { Lenna } from '@/assets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className={inter.className}>
      Hello World!
      <div style={{width: '100px', height: '200px'}}>
        <Logo/>
        <AlbumHorizontal name='Test' isPlaying cover={Lenna}/>
        <AlbumVertical name='Test' cover={Lenna} artist='Lenna'/>
      </div>
    </div>
  )
}
