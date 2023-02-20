import styled from 'styled-components'

export const SWrapper = styled.div<{selected: boolean}>`
  cursor: pointer;
  display: flex;
  font-size: 5rem !important;
  flex-flow: column nowrap;
  gap: .5rem;
  align-items: center;
  color: ${props => props.selected?
    'white' : 'rgba(255,255,255,.3)'};
  svg{
    font-size: 1.4rem;
    font-weight: 400;
  }
  p{
    font-size: .6rem;
    font-weight: 600;
  }
`
