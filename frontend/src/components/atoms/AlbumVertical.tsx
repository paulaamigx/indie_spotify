import Image, {StaticImageData} from 'next/image'
import { SInfo, SWrapper } from '@/styles/AlbumVertical'

interface Props {
  cover: StaticImageData,
  title: string,
  artist: string
}

const AlbumVertical = ({cover, title, artist}: Props) => {
  return(
    <SWrapper>
      <Image
        src={cover}
        alt='cover'/>
      <SInfo>
        <p>{title}</p>
        <p>{artist}</p>
      </SInfo>
    </SWrapper>
  )
}

export default AlbumVertical
