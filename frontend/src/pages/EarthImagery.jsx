import React, { useState } from 'react'
import axios from 'axios'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs';
import './Mars.css'
import Earth from '../componets/Earth';
import Loader from '../componets/Loader';
import { API_KEY } from '../API';


const EarthImagery = () => {

  const [earthImagery, setEarthImagery] = useState()
  const [lot, steLon] = useState()
  const [lat, setLat] = useState()
  const [dim, setDim] = useState()
  const [startDate, setStartDate] = useState(null)
  const [Loading, setLoading] = useState(true)

  const date = dayjs(startDate).format('YYYY-MM-DD')

  console.log(earthImagery)

  const changeDate = (dateVal) => {
    setStartDate(dateVal)
  }

  const fetchData = async () => {
    setLoading(true)
    await axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=${lot}&lat=${lat}&date=${date}&dim=${dim}&api_key=${API_KEY}`)
      .then((response) => {
        setEarthImagery(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const defaultData = async () => {
    setLoading(true)
    await axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=100.80&lat=1.8&date=2018-02-05&dim=0.25&api_key=${API_KEY}`)
    .then(response => {
      setEarthImagery(response.data)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    defaultData()
  }, [])

  return (
    <div className='earthPage'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='earth'>
          <div>
            <Typography variant="subtitle2" sx={{color:'white',marginBottom:'0.5rem'}} >Start Date: </Typography>
            <DatePicker
              sx={{ width: '13.9rem',border:'solid 1px white',borderRadius:'4px',backgroundColor:'white' }}
              value={startDate}
              onChange={changeDate} />
          </div>
          <div>
            <Typography variant="subtitle2" sx={{color:'white',marginBottom:'0.5rem'}} >Set Longitude:</Typography>
            <TextField id="outlined-basic"
              sx={{ width: '13.9rem',borderRadius:'4px',border:'solid 1px white',backgroundColor:'white' }}
              onChange={(e) => steLon(e.target.value)} variant="outlined" />
          </div>
          <div>
            <Typography variant="subtitle2" sx={{color:'white',marginBottom:'0.5rem'}}>Set Latitude:</Typography>
            <TextField id="outlined-basic"
              sx={{ width: '13.9rem',borderRadius:'4px',border:'solid 1px white',backgroundColor:'white' }}
              onChange={(e) => setLat(e.target.value)}  variant="outlined" />
          </div>
          <div>
            <Typography variant="subtitle2" sx={{color:'white',marginBottom:'0.5rem'}}>Set Dimension:</Typography>
            <TextField id="outlined-basic"
              sx={{ width: '13.9rem',border:'solid 1px white',borderRadius:'4px',backgroundColor:'white' }}
              onChange={(e) => setDim(e.target.value)} variant="outlined" />
          </div>
          <div>
            <Button variant="outlined" sx={{ padding: '0.7rem 1.5rem',marginLeft:'2rem',backgroundColor:'white',
            '&:hover': { backgroundColor:'white' },color:'black',
            border:'solid 2px #1f2e2e', marginTop: '1.4rem' }} onClick={fetchData}>
              Search
            </Button>
          </div>

        </div>
      </LocalizationProvider>
      <div className='earthImage'>
      {
      Loading ? (<Loader/>) : (
      earthImagery &&
        <Earth img_src={earthImagery.url} planet={earthImagery.resource.planet}  />
      )
      }
      </div>
    </div>
  )
}

export default EarthImagery
