import styled from 'styled-components'

export const SWrapper = styled.div`
  display: flex;
  gap: 20%;
  height: 100%;
  width: 100%;
  align-items: flex-end;
  div{
    width: 20%;
    height: 10px;
    background-color: var(--main);
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  @keyframes height1{
    0%{height: 10%;}
    25% {height: 100%;}
    50%{height: 20%;}
    70%{height: 80%;}
    100% {height: 100%;}
  }
  @keyframes height2{
    0%{height: 100%;}
    50% {height: 30%;}
    60%{height: 100%;}
    100% {height: 10%;}
  }
  @keyframes height3{
    0%{height: 50%;}
    25% {height: 100%;}
    60%{height: 20%;}
    80%{height: 80%;}
    100% {height: 100%;}
  }
  div:nth-child(1){animation-name: height1;}
  div:nth-child(2){animation-name: height2;}
  div:nth-child(3){animation-name: height3;}
`

