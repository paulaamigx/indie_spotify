import Image, {StaticImageData} from 'next/image'
import { SPlayingAnimation,  SWrapper } from '@/styles/AlbumHorizontal'

interface Props {
  cover: StaticImageData,
  title: string,
  isPlaying?: boolean
}

const AlbumHorizontal = ({cover, title, isPlaying}: Props) => {
  return(
    <SWrapper>
      <Image
        src={cover}
        alt='cover'/>
      <p>{title}</p>
      {isPlaying && <SPlayingAnimation/>}
    </SWrapper>
  )
}

export default AlbumHorizontal
