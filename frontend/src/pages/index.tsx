import { AlbumsHorizontalContainer, AlbumsVerticalContainer,
  MinimizedPlayer, Title } from '@/components'
import { SFontAwesomeIcon, SWrapper } from '@/styles/Home'
import { Inter } from '@next/font/google'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <SWrapper className={inter.className}>
      <Title text='Buenos días'/>
      <SFontAwesomeIcon icon={faPenToSquare}/>
      <AlbumsHorizontalContainer/>
      <AlbumsVerticalContainer/>
      <MinimizedPlayer/>
    </SWrapper>
  )
}
