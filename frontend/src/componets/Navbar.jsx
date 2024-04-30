import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Nasa_Logo from '../assets/nasa_logo.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { styled } from '@mui/material';

const ITEM_HEIGHT = 50;

const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const location = useLocation()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'whitesmoke', zIndex: 999 }}>
      <Toolbar>

        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                marginTop: '0.8rem',
                maxHeight: ITEM_HEIGHT * 4.8,
                width: '40ch',
              },
            }}
          >
            <NavLink to="/apod" style={{ textDecoration: 'none', color: '#333332' }}>
              <MenuItem>Astronomy Picture Of the Day</MenuItem>
            </NavLink>
            <NavLink to='/earth' style={{ textDecoration: 'none', color: '#333332' }}>
              <MenuItem>Earth Imagery</MenuItem>
            </NavLink>
            <NavLink to='/mars' style={{ textDecoration: 'none', color: '#333332' }}>
              <MenuItem>Mars Rover Photos</MenuItem>
            </NavLink>
          </Menu>
        </div>

        <img src={Nasa_Logo} style={{ width: '76px', height: '65px' }} />

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#333332' }}>
          Space Hub
        </Typography>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex',marginLeft:'5rem',gap:'0.8rem'}}>
          <NavLink to="/" style={{ textDecoration: 'none', color: '#333332' }}>
              <Button sx={{'&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/' ? 'white' : 'black', backgroundColor: location.pathname === '/' ? 'black' : 'transparent' }}>
                Home
              </Button>
            </NavLink>
            <NavLink to="/apod" style={{ textDecoration: 'none', color: '#333332' }}>
              <Button sx={{'&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/apod' ? 'white' : 'black', backgroundColor: location.pathname === '/apod' ? 'black' : 'transparent' }}>
                Apod
              </Button>
            </NavLink>
            <NavLink to='/earth' style={{ textDecoration: 'none', color: '#333332' }}>
              <Button sx={{ '&:hover': { backgroundColor: 'black', color: 'white' },color: location.pathname === '/earth' ? 'white' : 'black', backgroundColor: location.pathname === '/earth' ? 'black' : 'transparent' }}>
                Earth Imagery
              </Button>
            </NavLink>
            <NavLink to='/mars' style={{ textDecoration: 'none', color: '#333332' }}>
              <Button sx={{ '&:hover': { backgroundColor: 'black', color: 'white' },color: location.pathname === '/mars' ? 'white' : 'black', backgroundColor: location.pathname === '/mars' ? 'black' : 'transparent' }}>
                Mars Rover
              </Button>
            </NavLink>
          </div>
          <NavLink to='/login' style={{ textDecoration: 'none', color: '#333332' }}>
          <Button sx={{ '&:hover': { backgroundColor: 'black', color: 'white' }, color: location.pathname === '/login' ? 'white' : 'black', backgroundColor: location.pathname === '/login' ? 'black' : 'transparent'  }}>
            Login
          </Button>
          </NavLink>
          <NavLink to='/register' style={{ textDecoration: 'none', color: '#333332' }}>
          <Button color='inherit' sx={{'&:hover': { backgroundColor: 'black', color: 'white' },color: location.pathname === '/register' ? 'white' : 'black', backgroundColor: location.pathname === '/register' ? 'black' : 'transparent'  }}>
            Sign Up
          </Button>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
