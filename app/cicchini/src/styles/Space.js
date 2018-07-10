import { css } from 'styled-components'

const MarginMixin = css`
  margin: ${props => props.margin};
`

const PaddingMixin = css`
  padding: ${props => props.padding};
`

export {
  MarginMixin,
  PaddingMixin,
}
