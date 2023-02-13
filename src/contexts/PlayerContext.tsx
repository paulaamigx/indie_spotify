import { Dispatch, ReactNode, SetStateAction, createContext, useContext,
  useState } from 'react'
import { ISong } from '@/types/song'
import {Lenna} from '@/assets'

interface Props{
  song?: ISong;
  setSong: Dispatch<SetStateAction<ISong>>
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>
}

const defaultState = {
  isPlaying: false,
  setIsPlaying:function noop () {null},
  setSong:function noop () {null},
  song: {
    title: 'Test',
    artist: 'Lenna',
    cover: Lenna
  }
}

const PlayingContext = createContext<Props>(defaultState)

export const PlayingProvider = ({children}:{children: ReactNode}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [song, setSong] = useState(defaultState.song)
  const initValue =  {isPlaying, setIsPlaying, song, setSong}

  return(
    <PlayingContext.Provider value={initValue}>
      {children}
    </PlayingContext.Provider>
  )
}

export const usePlayingContext = () => useContext(PlayingContext)
