import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { SWrapper } from '@/styles/BottomMenuButton'

interface Props {
  icon: IconProp,
  label: string,
  onClick?: ()=>void,
  selected: boolean,
}

const BottomMenuButton  = ({icon, label, onClick, selected}:Props) => {
  return(
    <SWrapper selected={selected} onClick={onClick}>
      <FontAwesomeIcon icon={icon}/>
      <p>{label}</p>
    </SWrapper>
  )
}

export default BottomMenuButton
