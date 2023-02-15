import { SizeType } from '@/components/atoms/Logo'
import styled from 'styled-components'

interface Props  {size: SizeType }
interface settings {
  borderWidth: string,
  borderTop: string,
  borderDegree: number,
  coverTop: string,
  coverSides:number,
  width: string
}

const green = '#1DB954'

export const SWrapper = styled.div`
  background-color: ${green};
  border-radius: 50%;
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 17%;
  align-items: center;
  justify-content: center;
  transform: rotate(6deg);
`

export const SLineWrapper = styled.div<Props>`
  position: relative;
  width: ${props => size[props.size].width};
  ${props => props.size === 's'? `
    margin-top: -3%;
  ` : ''}
`

const borders =  (props: Props) => `
  position: absolute;
  width: ${size[props.size].borderWidth};
  aspect-ratio: 1;
  background-color: black;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  margin-top: ${size[props.size].borderTop};
  z-Index: 3;
`

export const SLineBorderLeft = styled.div<Props>`
  ${props => borders(props)} 
  left: 10%;
  transform: rotate(-${props => size[props.size].borderDegree}deg);
`

export const SLineBorderRight = styled.div<Props>`
  ${props => borders(props)} 
  transform: rotate(${props => 180 + size[props.size].borderDegree}deg);
  right: 10%;
`

export const SLine = styled.div<Props>`
  width: 100%;
  z-Index: 1;
  aspect-ratio: 6;
  border-radius: 50%/100% 100% 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${props => `
    background: linear-gradient(90deg, 
      transparent ${size[props.size].coverSides}%, 
      black ${size[props.size].coverSides}%, 
      black ${100-size[props.size].coverSides}%, 
      transparent ${100-size[props.size].coverSides}%);
  `}

  &:after{
    content: ""; 
    border-radius: 50%/100% 100% 0 0;
    aspect-ratio: 6;
    width: 100%;
    position: absolute;
    top: ${props => size[props.size].coverTop};
    background: linear-gradient(180deg, ${green} 55%, transparent 55%);
  }
`

/*
 * these values work as a scale,
 * any other size will have the same proportions
*/
const  size: {[key in SizeType]: settings} = {
  'l': {
    borderWidth: '11.3%',
    borderTop: '-3.6%',
    borderDegree: 15,
    coverSides: 17,
    coverTop: '70%',
    width: '90%',
  },
  'm': {
    borderWidth: '9.7%',
    borderTop: '-3.35%',
    borderDegree: 16,
    coverSides: 16,
    coverTop: '60%',
    width: '80%',
  },
  's': {
    borderWidth: '8.1%',
    borderTop: '-3.15%',
    borderDegree: 17,
    coverTop: '50%',
    coverSides: 15,
    width: '70%',
  }
}
