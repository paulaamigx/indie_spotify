import { Dispatch, ReactNode, SetStateAction, createContext, useContext,
  useState } from 'react'
import { ISong } from '@/types/song'

interface Props{
  song?: ISong;
  setSong: Dispatch<SetStateAction<ISong>>
  isPlaying: string;
  setIsPlaying: Dispatch<SetStateAction<string>>
}

const defaultState = {
  isPlaying: '',
  setIsPlaying:function noop () {null},
  setSong:function noop () {null},
  song: {
    id: '0',
    title: 'Test',
    albumId: '0',
    liked: false
  }
}

const PlayingContext = createContext<Props>(defaultState)

export const PlayingProvider = ({children}:{children: ReactNode}) => {
  const [isPlaying, setIsPlaying] = useState('')
  const [song, setSong] = useState(defaultState.song)
  const initValue =  {isPlaying, setIsPlaying, song, setSong}

  return(
    <PlayingContext.Provider value={initValue}>
      {children}
    </PlayingContext.Provider>
  )
}

export const usePlayingContext = () => useContext(PlayingContext)
