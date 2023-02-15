import { AlbumHorizontal, AlbumVertical, ControlBar, Logo,
  MinimizedPlayer, Title } from '@/components'
import { Inter } from '@next/font/google'
import { Lenna } from '@/assets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className={inter.className}>
      <div style={{width: '100px', height: '200px'}}>
        <Title text='Buenos días'/>
        <Logo/>
        <AlbumHorizontal name='Test' isPlaying cover={Lenna}/>
        <AlbumVertical name='Test' cover={Lenna} artist='Lenna'/>
        <MinimizedPlayer/>
        <ControlBar/>
      </div>
    </div>
  )
}
