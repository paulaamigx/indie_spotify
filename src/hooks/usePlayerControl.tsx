import { faHeart, faPause,  faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { usePlayingContext } from '@/contexts'

const usePlayerControl = () => {
  const {song, setSong, isPlaying, setIsPlaying}= usePlayingContext()

  const handlePlay = () => {
    setIsPlaying(prev => prev? '' : song?.id || '')
  }

  const handleLike= () => {
    setSong( prev => ({...prev, liked: !prev.liked}))
  }

  const PlayButton = () =>
    <FontAwesomeIcon
      onClick={handlePlay}
      icon={isPlaying === song?.id? faPause : faPlay} />

  const LikeButton = () =>
    <FontAwesomeIcon
      onClick={handleLike}
      icon={song?.liked? faHeart : faHeartRegular} />

  return{
    PlayButton, LikeButton
  }
}

export default usePlayerControl
