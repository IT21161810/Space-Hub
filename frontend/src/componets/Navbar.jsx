import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Brand from '../assets/nasa_logo.png'
import './Nav.css'
import { Button, Typography } from '@mui/material';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const location = useLocation()

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Brand} alt="Menu" style={{ width: '4.4rem', height: '3.8rem' }} />
          <Typography sx={{fontSize:'1.2rem'}}>Space Hub</Typography>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/" style={{ textDecoration: 'none', color: '#333332' }}>
                <Button sx={{ '&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/' ? 'white' : 'black', backgroundColor: location.pathname === '/' ? 'black' : 'transparent' }}>
                  Home
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/apod" style={{ textDecoration: 'none', color: '#333332' }}>
                <Button sx={{ '&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/apod' ? 'white' : 'black', backgroundColor: location.pathname === '/apod' ? 'black' : 'transparent' }}>
                  Apod
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to='/earth' style={{ textDecoration: 'none', color: '#333332' }}>
                <Button sx={{ '&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/earth' ? 'white' : 'black', backgroundColor: location.pathname === '/earth' ? 'black' : 'transparent' }}>
                  Earth Imagery
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to='/mars' style={{ textDecoration: 'none', color: '#333332' }}>
                <Button sx={{ '&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/mars' ? 'white' : 'black', backgroundColor: location.pathname === '/mars' ? 'black' : 'transparent' }}>
                  Mars Rover
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' style={{ textDecoration: 'none', color: '#333332' }}>
                <Button sx={{ '&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/login' ? 'white' : 'black', backgroundColor: location.pathname === '/login' ? 'black' : 'transparent' }}>
                  Login
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to='/register' style={{ textDecoration: 'none', color: '#333332' }}>
                <Button color='inherit' sx={{ '&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/register' ? 'white' : 'black', backgroundColor: location.pathname === '/register' ? 'black' : 'transparent' }}>
                  Sign Up
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar