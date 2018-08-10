import styled from 'styled-components'
import { FlexMixin } from './Flex'

const Hero = styled.div`
  background: ${props => props.background};
  ${props => {
    console.log(props)
    if(props.backgroundImage)
      return `
        background: url(${props.backgroundImage}) ${props.imageAlign || 'top'} center no-repeat;
        background-size: auto auto;
        background-size: cover;
      `
  }}
  height: ${props => props.height || '40rem'};
  min-height: ${props => props.height || '80vh'};
  width: 100%;
  ${props => props.flex ? FlexMixin : '' }
  @media (min-width: 700px) {
    min-height: 30rem;
  }
`
export default Hero
