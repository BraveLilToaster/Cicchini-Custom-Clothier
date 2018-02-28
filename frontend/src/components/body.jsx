import React from 'react'
import styled from 'styled-components'

const Body = (props) => {
  const Body = styled.div`
    margin-top: 4rem;
  `
  return(
    <Body>
      {props.children}
    </Body>
  )
}

export default Body
