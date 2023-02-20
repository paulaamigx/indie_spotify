import { BottomMenu, MinimizedPlayer } from '@/components'
import styled from 'styled-components'

export const SBottomMenu = styled(BottomMenu)`
  position: absolute;
  left: 0;
  bottom: 0;
`
export const SMinimizedPlayer= styled(MinimizedPlayer)`
  position: absolute;
  left: var(--padding);
  bottom: 4rem;
  width: calc(100% - var(--padding) - var(--padding));
  margin: auto;
`
export const SLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  padding: 25%;
  animation: opacity 1.6s;
  animation-timing-function: ease-out;
  @keyframes opacity{
    0%{opacity: 0; }
    50%{opacity: 0.2; }
    70%{opacity: 0.5; }
    90%{opacity: 0.7; }
    100%{ opacity: 1; }
  }
 `
