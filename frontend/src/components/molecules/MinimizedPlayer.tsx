import { SIcons, SInfo, SWrapper } from '@/styles/MinimizedPlayer'
import { Albums } from '@/assets/SongsFixtures'
import Image from 'next/image'
import { usePlayerControl } from '@/hooks'
import { usePlayingContext } from '@/contexts'
const MinimizedPlayer = ({className}:{className?: string}) => {
  const { song } = usePlayingContext()
  const { PlayButton, LikeButton } = usePlayerControl()

  return(
    <>
      {song &&
        <SWrapper className={className}>
          <Image
            alt='cover'
            src={Albums.find(a => a.id === song.albumId)?.cover || ''}/>
          <SInfo>
            <p>{song.title}</p>
            <p>{Albums.find(a => a.id === song.albumId)?.artist || ''}</p>
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
