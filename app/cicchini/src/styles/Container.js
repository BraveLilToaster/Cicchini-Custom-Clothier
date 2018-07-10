import styled from 'styled-components'
import { FlexMixin } from './Flex'
import PropTypes from 'prop-types'

const Container = styled.div`
  min-height: calc(100vh - 4rem);
  background: ${props => props.background};
  margin-top: ${props => props.marginTop || '4rem'};
  ${props => props.flex ? FlexMixin : '' }
`

Container.propTypes = {
  background: PropTypes.string,
}

Container.defaultProps = {
  background: '#FFF',
}

export default Container
