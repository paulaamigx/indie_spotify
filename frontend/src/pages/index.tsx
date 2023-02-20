import { AlbumHorizontal, AlbumVertical, MinimizedPlayer,
  Title } from '@/components'
import { Albums } from '@/assets/SongsFixtures'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Inter } from '@next/font/google'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { usePlayingContext } from '@/contexts'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { isPlaying } = usePlayingContext()

  return (
    <div className={inter.className}>
      <div style={{width: '100px', height: '200px'}}>
        <Title text='Buenos días'/>
        <FontAwesomeIcon icon={faPenToSquare}/>
        {Albums.map(album=>
          <AlbumHorizontal
            key={`albumH_${album.id}`}
            title={album.title}
            isPlaying={isPlaying === album.id}
            cover={album.cover}/>
        )}
        {Albums.map(album=>
          <AlbumVertical
            title={album.title}
            cover={album.cover}
            artist={album.artist}/>
        )}
        <MinimizedPlayer/>
      </div>
    </div>
  )
}
