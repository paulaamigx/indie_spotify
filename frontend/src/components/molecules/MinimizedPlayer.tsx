import { SIcons, SInfo, SWrapper } from '@/styles/MinimizedPlayer'
import Image from 'next/image'
import { usePlayerControl } from '@/hooks'
import { usePlayingContext } from '@/contexts'

const MinimizedPlayer = () => {
  const { song } = usePlayingContext()
  const { PlayButton, LikeButton } = usePlayerControl()

  return(
    <>
      {song &&
        <SWrapper>
          <Image alt='cover' src={song.cover}/>
          <SInfo>
            <p>{song.title}</p>
            <p>{song.artist}</p>
          </SInfo>
          <SIcons>
            <LikeButton/>
            <PlayButton/>
          </SIcons>
        </SWrapper>
      }
    </>
  )
}

export default MinimizedPlayer
