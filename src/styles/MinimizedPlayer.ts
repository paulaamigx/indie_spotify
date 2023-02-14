import styled from 'styled-components'

const height = '2.5rem'

export const SWrapper = styled.div`
  background-color: #302c2c;
  width: 100%;
  height: ${height};
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 10fr 1fr .1rem;
  gap: .5rem;
  padding: .3rem;
  border-radius: .3rem;
  img{
    height: 100%;
    aspect-ratio: 1;
    width: calc(${height} - .6rem);
    border-radius: inherit;
  }
`
export const SInfo = styled.div`
  color: white;
  p:nth-child(1){
    font-weight: 600;
    font-size: .7rem;
  }
  p:nth-child(2){
    font-weight: 500;
    font-size: .6rem;
  }
`

export const SIcons = styled.div<{liked: boolean}>`
  display: flex;
  gap: .3rem;
  color: white;
  cursor: pointer;
  svg:nth-child(1){
    color: ${props => props.liked?
    'var(--main)': 'white'};
  }
`
