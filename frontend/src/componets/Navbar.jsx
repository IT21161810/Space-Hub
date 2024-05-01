import { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Brand from '../assets/nasa_logo.png'
import './Nav.css'
import { Button, Typography } from '@mui/material';
import { UserContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false)
  const history = useNavigate()
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const location = useLocation()

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const logout = () => {
    localStorage.removeItem('user')
    setCurrentUser(null)
    history('/')
    toast.success('Logout successful');
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Brand} alt="Menu" style={{ width: '4.4rem', height: '3.8rem' }} />
          <Typography sx={{ fontSize: '1.2rem' }}>Space Hub</Typography>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            {currentUser && currentUser ? (
              <>
                <li>
                  <NavLink to="/home" style={{ textDecoration: 'none', color: '#333332' }}>
                    <Button sx={{ '&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/home' ? 'white' : 'black', backgroundColor: location.pathname === '/home' ? 'black' : 'transparent' }}>
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
              </>  ) : null}
            <li>
              {
                currentUser && currentUser ?
                  <Button onClick={logout} sx={{ '&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/*' ? 'white' : 'black', backgroundColor: location.pathname === '/*' ? 'black' : 'transparent' }}>
                    LogOut
                  </Button>
                  :
                  <NavLink to='/login' style={{ textDecoration: 'none', color: '#333332' }}>
                    <Button sx={{ '&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/login' ? 'white' : 'black', backgroundColor: location.pathname === '/login' ? 'black' : 'transparent' }}>
                      Login
                    </Button>
                  </NavLink>
              }
            </li>
            <li>
              {!currentUser ? <NavLink to='/register' style={{ textDecoration: 'none', color: '#333332' }}>
                <Button color='inherit' sx={{ '&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/register' ? 'white' : 'black', backgroundColor: location.pathname === '/register' ? 'black' : 'transparent' }}>
                  Sign Up
                </Button>
              </NavLink> : null}
            </li>
          </ul>
          <ToastContainer autoClose={2000} position='bottom-right' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar