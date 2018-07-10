import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { MarginMixin, PaddingMixin } from './Space'

const FlexMixin = css`
  display: flex;
  flex-flow: ${props => props.flexFlow || 'column nowrap'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  align-self: ${props => props.alignSelf || 'auto'};
`

FlexMixin.propTypes = {
  flexFlow: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
}

const Flex = styled.div`
  ${FlexMixin}
  ${MarginMixin}
  ${PaddingMixin}
`

const Box = styled.div`

`

export {
  Flex,
  Box,
  FlexMixin,
}
