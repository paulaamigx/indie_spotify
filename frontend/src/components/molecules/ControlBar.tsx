import { faBackwardStep, faForwardStep, faPenToSquare }
  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { SWrapper } from '@/styles/ControlBar'
import { usePlayerControl } from '@/hooks'

const ControlBar = () => {
  const { LikeButton, PlayButton } = usePlayerControl()

  return(
    <SWrapper>
      <LikeButton/>
      <FontAwesomeIcon
        icon={faBackwardStep}/>
      <PlayButton/>
      <FontAwesomeIcon
        icon={faForwardStep}/>
      <FontAwesomeIcon
        icon={faPenToSquare}/>
    </SWrapper>
  )
}

export default ControlBar
