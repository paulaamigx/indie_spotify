import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const SFontAwesomeIcon = styled(FontAwesomeIcon)<{$liked: boolean}>`
  cursor: pointer;
  color: ${props => props.$liked?
    'var(--main) !important': 'white'};
`

const heartSize =.7

const Hearts = `
  content: " ♥ -  ♥♥    ♥";
  text-align: center;
  background: radial-gradient(
    farthest-side at ${heartSize*1.5}rem  ${heartSize*.4}rem,
    transparent 30%,
    var(--main) 30%
  );
  position: absolute;
  font-size: ${heartSize}rem;
  line-height:  ${heartSize}rem;
  word-break: break-all;
  width: ${heartSize*3}rem;
  height: ${heartSize*2}rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  left: -.5rem;
  top: .1rem;
`

const Circles = `
  content: "";
  position: absolute;
  aspect-ratio: 1;
  background: radial-gradient(closest-side, 
     transparent 47%, white 47%, 
     white 50%, transparent 50%,
     transparent 77%, white 77%,
     white 80%, transparent 80%);
`

export const SContainer = styled.div`
  position: relative;
  &.dislike{
    animation: shake .5s; 
    animation-timing-function: linear;
    @keyframes shake{
      0% {transform: rotate(-15deg); }
      25% {transform: rotate(15deg); }
      50% {transform: rotate(-15deg); }
      75% {transform: rotate(15deg); }
      100% {transform: rotate(0); }
    }
  }
  &.like{
    &:before{
      ${Circles}
      animation: sizeCircles .7s; 
      animation-timing-function: linear;
      @keyframes sizeCircles{
        0% { 
          visibility: visible;
          opacity: 1;
           left: .5rem;
           top: .5rem; 
          width: 0rem; 
        }
        100% {
          width: 3rem; 
          opacity: 0;
           left: -1rem;
           top: -1rem; 
        }
      }
    }
    &:after{
      ${Hearts}
      animation: moveHearts .5s; 
      animation-timing-function: linear;
      visibility: hidden;
      @keyframes moveHearts{
        0% { 
          visibility: visible;
          opacity: 1;
          transform: translate(-.1rem, -.1rem) rotate(0deg); 
        }
        25% { transform: translate(0px, -.3rem) rotate(15deg); }
        50% { transform: translate(1px, -.5rem) rotate(0deg); }
        75% { 
          transform: translate(-3px, -.8rem) rotate(-10deg); 
          opacity: .7;
        }
        100% { 
          transform: translate(1px, -1.2rem) rotate(-1deg); 
          opacity: 0;
        }
      }
    }
  }
`

