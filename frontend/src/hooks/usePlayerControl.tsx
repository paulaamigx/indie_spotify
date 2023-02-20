import { SContainer, SFontAwesomeIcon } from '@/styles/LikeButton'
import { faHeart, faPause,  faPlay } from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { usePlayingContext } from '@/contexts'

const usePlayerControl = () => {
  const {song, setSong, isPlaying, setIsPlaying}= usePlayingContext()
  const [animation, setAnimation] = useState('')

  const handlePlay = () => {
    setIsPlaying(prev => prev? '' : song?.id || '')
  }

  const handleLike= () => {
    setAnimation(song?.liked? 'dislike' : 'like')
    setSong( prev => ({...prev, liked: !prev.liked}))
  }

  useEffect(() => {
    if(animation)
      setTimeout(() => {setAnimation('')}, 700)
  },[animation])

  const PlayButton = () =>
    <FontAwesomeIcon
      onClick={handlePlay}
      icon={isPlaying === song?.id? faPause : faPlay} />

  const LikeButton = () =>
    <SContainer className={animation}>
      <SFontAwesomeIcon
        $liked={!!song?.liked}
        onClick={handleLike}
        icon={song?.liked? faHeart : faHeartRegular} />
    </SContainer>

  return{
    PlayButton, LikeButton
  }
}

export default usePlayerControl
