import styled from 'styled-components'
import PropTypes from 'prop-types'
import { px2rem } from '../utils/style-utils'
import { FlexMixin } from './Flex'

const Section = styled.div`
  max-width: ${props => px2rem(props.maxWidth) };
  margin: ${props => props.margin };
  padding: ${props => props.padding };
  width: 100%;
  ${props => props.flex ? FlexMixin : ''}
`

Section.propTypes = {
  maxWidth: PropTypes.number,
  margin: PropTypes.string,
  padding: PropTypes.string,
}

Section.defaultProps = {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '1rem',
}

export default Section
