import styled from 'styled-components'

export const SWrapper = styled.div`
  width: 100%;
  color: white;
  display: grid;
  grid-template-columns: 10fr 1fr 1fr 1fr 10fr;
  padding: .5rem;
  align-items: center;
  gap: .5rem;
  svg{
    justify-self: center;
    font-size: .8rem;
  }
  svg:nth-child(1){ justify-self: start; }
  svg:nth-child(5){ justify-self: end; }
  svg:nth-child(3){
    background-color: white;
    color: black;
    border-radius: 50%;
    aspect-ratio: 1;
    padding: .4rem;
    font-size: .6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`
