import Image, {StaticImageData} from 'next/image'
import { SInfo, SWrapper } from '@/styles/AlbumVertical'

interface Props {
  cover: StaticImageData,
  name: string,
  artist: string
}

const AlbumVertical = ({cover, name, artist}: Props) => {
  return(
    <SWrapper>
      <Image
        src={cover}
        alt='cover'/>
      <SInfo>
        <p>{name}</p>
        <p>{artist}</p>
      </SInfo>
    </SWrapper>
  )
}

export default AlbumVertical
