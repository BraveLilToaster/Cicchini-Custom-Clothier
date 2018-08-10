import React from 'react'
import styled, { css } from 'styled-components'
import { PaddingMixin, MarginMixin } from './Space'

const font = {
  primary: `"Lato", "Helvetica", "Arial", sans-serif`,
  secondary: 'Lato',
}

const TextComponent = css`
  text-align: ${props => props.align || 'left'};
  color: ${props => props.color || props.theme.text.dark.primary};
  font-family: ${font.primary};
  font-weight: ${props => props.fontWeight || 'normal'};
  margin: 0;
  display: block;
  margin-bottom: 0.35em;
  ${props => props.padding ? PaddingMixin : '' }
  ${props => props.margin ? MarginMixin : '' }
`

const Display4 = styled.h1`
  ${TextComponent}
  font-size: 5rem;
  font-weight: ${props => props.fontWeight || '300'};
  line-height: 1.14286em;
  margin-left: -.04em;
  letter-spacing: -.04em;
`

const Display3 = styled.h1`
  ${TextComponent}
  font-size: 3.5rem;
  line-height: 1.30357em;
  margin-left: -.02em;
  letter-spacing: -.02em;
`

const Display2 = styled.h1`
  ${TextComponent}
  font-size: 2.8125rem;
  line-height: 1.06667em;
  margin-left: -.02em;
`

const Display1 = styled.h1`
  ${TextComponent}
  font-size: 2.125rem;
  line-height: 1.20588em;
`

const Headline = styled.h1`
  ${TextComponent}
  font-size: 1.5rem;
  line-height: 1.35417em;
`

const Title = styled.h2`
  ${TextComponent}
  font-weight: 500;
  font-size: 1.2125rem;
  line-height: 1.16667em;
`

const Subheading = styled.h3`
  ${TextComponent}
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5em;
  color: ${props => props.color || props.theme.text.dark.secondary};
`

const Body2 = styled.aside`
  ${TextComponent}
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.71429em;
`

const Body1 = styled.p`
  ${TextComponent}
  font-size: 1.2rem;
  line-height: 1.46429em;
  white-space: pre-line;
`

export {
  Display4,
  Display3,
  Display2,
  Display1,
  Headline,
  Title,
  Subheading,
  Body2,
  Body1,
}
