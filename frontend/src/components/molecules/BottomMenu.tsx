import { faBook, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import BottomMenuButton from '../atoms/BottomMenuButton'
import { SWrapper } from '@/styles/BottomMenu'
import { useRouter } from 'next/router'

const BottomMenu = ({className}:{className?: string}) => {
  const router = useRouter()
  const path = router.pathname

  return(
    <SWrapper className={className}>
      <BottomMenuButton
        selected={path === '/'}
        icon={faHome}
        label='Inicio'/>
      <BottomMenuButton
        selected={path === '/search'}
        icon={faSearch}
        label='Buscar'/>
      <BottomMenuButton
        icon={faBook}
        selected={path === '/library'}
        label='Tu Biblioteca'/>
    </SWrapper>
  )
}

export default BottomMenu
