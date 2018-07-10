import styled from 'styled-components'
import { FlexMixin } from './Flex'

const Hero = styled.div`
  background: ${props => props.background || '#FFF'};
  background: linear-gradient(0deg, ${props => props.theme.primary} 0%, rgba(0,212,255,1) 100%);
  min-height: 80vh;
  width: 100%;
  ${props => props.flex ? FlexMixin : '' }
  @media (min-width: 700px) {
    min-height: 30rem;
  }
`
export default Hero
