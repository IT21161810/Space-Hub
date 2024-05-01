import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../context/AuthContext';


const Login = () => {

  const history = useNavigate();

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
        toast.success('Login successful');
        setTimeout(() => history("/home"), 100);
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
    <form onSubmit={handleLogin}>
      <Box className='reg'>
        <Stack className='stack'>
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
          <ToastContainer autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light" />
          <Typography variant='body2' sx={{
            display: 'flex',
            marginTop: '1rem',
            alignItems: 'center', justifyContent: 'center'
          }} >
            Don't have an account? &nbsp;&nbsp;<Link style={{ textDecoration: 'none' }}
              to='/register'>Register here</Link></Typography>
        </Stack>
      </Box>
    </form>
  )
}

export default Login
