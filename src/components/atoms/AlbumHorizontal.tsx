import Image, {StaticImageData} from 'next/image'
import { SPlayingAnimation,  SWrapper } from '@/styles/AlbumHorizontal'

interface Props {
  cover: StaticImageData,
  name: string,
  isPlaying?: boolean
}

const AlbumHorizontal = ({cover, name, isPlaying}: Props) => {
  return(
    <SWrapper>
      <Image
        src={cover}
        alt='cover'/>
      <p>{name}</p>
      {isPlaying && <SPlayingAnimation/>}
    </SWrapper>
  )
}

export default AlbumHorizontal
