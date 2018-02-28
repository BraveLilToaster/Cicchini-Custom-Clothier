import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../img/logo.svg'

class NavBar extends Component {

  render(){
    const NavBar = styled.div`
      background: rgba(0,0,0,1);
      width: 100%;
      height: 4rem;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      clear: both;
    `
    const Logo = styled.img`
      height: 3rem;
      padding: .5rem 0;
    `
    return (
      <NavBar>
        <Logo src={logo} alt="Cicchini Custom Clothier Logo"/>
      </NavBar>
    )
  }
}

export default NavBar
