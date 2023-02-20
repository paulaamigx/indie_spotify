import { AlbumVertical, Title } from '@/components'
import { SContainer, SWrapper } from '@/styles/AlbumsVerticalContainer'
import { Albums } from '@/assets/SongsFixtures'

const AlbumsVerticalContainer = () => {
  return(
    <SWrapper>
      <Title text='Guardados'/>
      <SContainer>
        {Albums.map(album=>
          <AlbumVertical
            key={`albumV_${album.id}`}
            title={album.title}
            artist={album.artist}
            cover={album.cover}/>
        )}
      </SContainer>
    </SWrapper>
  )
}

export default AlbumsVerticalContainer
