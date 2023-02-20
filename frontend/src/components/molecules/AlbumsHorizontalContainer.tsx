import { AlbumHorizontal } from '@/components'
import { Albums } from '@/assets/SongsFixtures'
import { SWrapper } from '@/styles/AlbumsHorizontalContainer'
import { usePlayingContext } from '@/contexts'

const AlbumsHorizontalContainer = () => {
  const { isPlaying } = usePlayingContext()
  return(
    <SWrapper>
      {Albums.slice(0,9).map(album=>
        <AlbumHorizontal
          key={`albumH_${album.id}`}
          title={album.title}
          isPlaying={isPlaying === album.id}
          cover={album.cover}/>
      )}
    </SWrapper>
  )
}

export default AlbumsHorizontalContainer
