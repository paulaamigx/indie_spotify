import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const SFontAwesomeIcon = styled(FontAwesomeIcon)<{$liked: boolean}>`
  cursor: pointer;
  color: ${props => props.$liked?
    'var(--main) !important': 'white'};
`
