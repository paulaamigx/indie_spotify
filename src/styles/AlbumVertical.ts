import styled from 'styled-components'

export const SWrapper = styled.div`
  background-color: rgba(0,0,0, .8);
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: .3rem;
  padding-bottom: .5rem;
  img{
    position: relative;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
  }
`

export const SInfo = styled.span`
  padding: .5rem;
  display: flex;
  flex-flow: column nowrap;
  gap: .2rem;
  p:nth-child(1){
    color: white;
    font-weight: 800;
    font-size: .9rem;
  }
  p:nth-child(2){
    color: gray;
    font-weight: 700;
    font-size: .8rem;
  }
`
