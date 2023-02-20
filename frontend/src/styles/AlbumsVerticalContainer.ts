import styled from 'styled-components'

export const SWrapper = styled.div`
  width: 100%;
  min-width: 0px;
  display: flex;
  flex-flow: column nowrap;
  gap: .5rem;
`

export const SContainer= styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100% !important;
  overflow-x: auto;
  gap: .5rem;
  div{
    width: 9rem;
    flex-shrink: 0;
  }
`
