import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const ResponsivePlayer = props => (
  <PlayerWrapper>
    <Player
      width='100%'
      height='100%'
      {...props}
    />
  </PlayerWrapper>
)

export default ResponsivePlayer

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`

const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`
