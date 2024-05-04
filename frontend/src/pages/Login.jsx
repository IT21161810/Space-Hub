import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../context/AuthContext';
import Snackbar from '@mui/material/Snackbar';
import './User.css'

const Login = () => {

  const history = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const { setCurrentUser } = useContext(UserContext)

  const [userData, setUserData] = useState([{
    email: '',
    password: ''
  }])

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const userLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/user/login', {
        email: userData.email,
        password: userData.password
      });

      if (res.status === 200) {
        setCurrentUser(res.data)
        handleClick()
        setTimeout(() => history("/home"), 500);
      } else {
        toast.error('Error: Unable to login');
      }
    } catch (err) {
      console.error('Login error:', err);
      toast.error('Error: Unable to login');
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault()
    await userLogin()
  }

  return (
    <div className='loginPage'>
      <form onSubmit={handleLogin} >
        <Box className='reg' sx={{ marginTop: '2rem', borderRadius: '1.6rem' }}>
          <Stack className='reg-stack' >
            <Typography variant='h5' sx={{
              marginBottom: '1rem', display: 'flex',
              alignItems: 'center', justifyContent: 'center'
            }}>Login</Typography>

            <TextField
              helperText="Please enter your email"
              id="demo-helper-text-aligned"
              label="Email"
              name='email'
              value={userData.email}
              onChange={handleChange}
              required
            />
            <TextField
              type='password'
              helperText="Please enter your password"
              id="demo-helper-text-aligned"
              label="Password"
              name='password'
              value={userData.password}
              onChange={handleChange}
              required
            />
            <Button type='submit' sx={{
              backgroundColor: '#1f2e2e', color: 'white'
              , '&:hover': { backgroundColor: 'black', color: 'white' }, marginTop: '1rem',
              paddingTop: '0.5rem', paddingBottom: '0.5rem'
            }}>Login</Button>
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
              >
               Login Success
              </Alert>
            </Snackbar>
            <ToastContainer position='bottom-right' autoClose={1000}/>
            <Typography variant='body2' sx={{
              display: 'flex',
              marginTop: '0.5rem',
              alignItems: 'center', justifyContent: 'center'
            }} >
              Don't have an account? &nbsp;&nbsp;<Link style={{ textDecoration: 'none' }}
                to='/register'>Register here</Link></Typography>
          </Stack>
        </Box>
      </form>
    </div>
  )
}

export default Login
