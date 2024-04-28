import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'whitesmoke' }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="gray"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'gray'}}>
            Nasa Api
          </Typography>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button sx={{'&:hover': {backgroundColor: 'black',color: 'white',},color:'black'}}>
              Login
            </Button>
            <Button color='inherit' sx={{color: 'black','&:hover': {backgroundColor: 'black',color: 'white',},}}>
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
