// import { useState } from 'react'
import logo from './assets/logo.svg'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';

function Header() {
  return (
    <header>
      <img src={logo}></img>
      <HomeIcon />
      <PersonIcon />
      <ListAltIcon />
    </header>
  )
}

export default Header
