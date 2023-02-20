import { SLine, SLineBorderLeft, SLineBorderRight,
  SLineWrapper,  SWrapper } from '@/styles/Logo'
export type SizeType = 's' | 'm' | 'l'

const Logo = ({className}:{className?: string}) => {
  return(
    <SWrapper className={className}>
      <Line size='l'/>
      <Line size='m'/>
      <Line size='s'/>
    </SWrapper>
  )
}

const Line = ( {size}: {size: SizeType}) =>
  <SLineWrapper size={size}>
    <SLine size={size}/>
    <SLineBorderLeft size={size}/>
    <SLineBorderRight size={size}/>
  </SLineWrapper>

export default Logo
