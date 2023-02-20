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
