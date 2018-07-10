import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FlexMixin } from '../styles/Flex'
import Section from '../styles/Section'

const Header = props => {
  return (
    <HeaderContainer>
      <Section flex>
        <NavigationList flexFlow={'row wrap'}>
          {props.routes.map( (route, i) => {
            return(
              <NavigationItem key={i}>
                <NavLink
                  to={route.link}
                  exact
                >
                  {route.label}
                </NavLink>
              </NavigationItem>
            )
          })}
        </NavigationList>
      </Section>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background: rgb(38, 38, 38);
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  clear: both;
  width: 100%;
  ${FlexMixin}
`

const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  ${FlexMixin}
  align-self: flex-end;
`

const NavigationItem = styled.li`
  list-style-type: none;
  margin: 0.5rem;
  a{
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`

export default Header
