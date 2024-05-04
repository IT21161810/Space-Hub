import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import spaceBg from '../assets/footer-bg.png'
import './Mars.css'

const Register = () => {

  const history = useNavigate();

  const [userData, setUserData] = useState([{
    name: '',
    email: '',
    password: ''
  }])

  const userRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/register', {
        name: userData.name,
        email: userData.email,
        password: userData.password
      })
      if (response.status === 201) {
        console.log(response)
        toast.success('Register successful');
        setTimeout(() => history("/login"), 800);
      } else {
        toast.error('Error Register')
      }
    } catch (err) {
      console.error(err)
      toast.error('Error Register')
    }
  }

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await userRegister()
  };

  return (
    <div className='regPage'>
    <form onSubmit={handleSubmit} className='reg'>
      <Box className='reg' sx={{marginTop: '2rem', borderRadius: '1.5rem' }}>
        <Stack className='log-stack'>
          <Typography variant='h5' sx={{
            marginBottom: '1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>Register</Typography>
          <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            name='name'
            type='string'
            value={userData.name}
            onChange={handleChange}
            required
          />
          <TextField
            helperText="Please enter your email"
            id="demo-helper-text-aligned"
            label="Email"
            name='email'
            type='email'
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
            position='bottom-right'
            onChange={handleChange}
            value={userData.password}
            required
          />

          <Button type="submit" sx={{
            backgroundColor: '#1f2e2e', color: 'white'
            , '&:hover': { backgroundColor: 'black', color: 'white' }, marginTop: '1rem',
            paddingTop: '0.5rem', paddingBottom: '0.5rem'
          }}>Register</Button>
          <ToastContainer />
          <Typography variant='body2' sx={{
            display: 'flex',
            marginTop: '0.5rem',
            alignItems: 'center', justifyContent: 'center'
          }} >
            Already have an account? &nbsp;&nbsp;<Link style={{ textDecoration: 'none' }} to='/login'>Login here</Link></Typography>
        </Stack>
      </Box>
    </form>
    </div>
  )
}

export default Register
