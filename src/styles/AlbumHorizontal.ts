import { PlayingAnimation } from '@/components'
import styled from 'styled-components'

export const SWrapper = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 4;
  background-color: rgba(0, 0, 0, .8);
  color: white;
  border-radius: .1rem;
  gap: 10%;
  align-items: center;
  justify-content: space-between;
  padding-right: 10%;
  img{
    height: 100%;
    width: auto;
    aspect-ratio: 1;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    flex-shrink: 0;
    flex-grow: 0;
  }
  p{
    width: 100%;
    font-size: .8rem;
    font-weight: bold;
  }
`

export const SPlayingAnimation = styled(PlayingAnimation)`
  width: 7%;
  height: 22%;
`
