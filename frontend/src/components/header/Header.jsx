import React from 'react'
import './Header.css'
import LogoHorizontal from '../../assets/logo-horizontal.png'

const Header = () => {
  return (
    <header>
      <img src={LogoHorizontal} className='header-logo' />
    </header>
  )
}

export default Header