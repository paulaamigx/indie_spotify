import { SIcons, SInfo, SWrapper } from '@/styles/MinimizedPlayer'
import { faHeart, faPause,  faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { usePlayingContext } from '@/contexts'

const MinimizedPlayer = () => {
  const {song, setSong, isPlaying, setIsPlaying}= usePlayingContext()

  const handlePlay = () => {
    setIsPlaying(isPlaying? '' : song?.id || '')
  }

  const handleLike= () => {
    setSong( prev => ({...prev, liked: !prev.liked}))
  }

  return(
    <>
      {song &&
        <SWrapper>
          <Image alt='cover' src={song.cover}/>
          <SInfo>
            <p>{song.title}</p>
            <p>{song.artist}</p>
          </SInfo>
          <SIcons liked={song.liked}>
            <FontAwesomeIcon
              onClick={handleLike}
              icon={song.liked? faHeart : faHeartRegular} />
            <FontAwesomeIcon
              onClick={handlePlay}
              icon={isPlaying === song.id? faPause : faPlay} />
          </SIcons>
        </SWrapper>
      }
    </>
  )
}

export default MinimizedPlayer
