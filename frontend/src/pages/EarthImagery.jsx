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
    await axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=${lot}&lat=${lat}&date=${date}&dim=${dim}&api_key=3jQMjnxVQV8vaH1wlg3e2mtM13v7dAebMA4aekZd`)
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
    await axios.get('https://api.nasa.gov/planetary/earth/assets?lon=100.80&lat=1.8&date=2018-02-08&dim=0.25&api_key=3jQMjnxVQV8vaH1wlg3e2mtM13v7dAebMA4aekZd')
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
            <Typography variant="subtitle2" sx={{color:'white'}} >Start Date: </Typography>
            <DatePicker
              sx={{ width: '13.9rem',border:'solid 1px white',borderRadius:'4px',backgroundColor:'white' }}
              value={startDate}
              onChange={changeDate} />
          </div>
          <div>
            <Typography variant="subtitle2" sx={{color:'white'}}>Set Longitude:</Typography>
            <TextField id="outlined-basic"
              sx={{ width: '13.9rem',borderRadius:'4px',border:'solid 1px white',backgroundColor:'white' }}
              onChange={(e) => steLon(e.target.value)} label="Enter Longitude" variant="outlined" />
          </div>
          <div>
            <Typography variant="subtitle2" sx={{color:'white'}}>Set Latitude:</Typography>
            <TextField id="outlined-basic"
              sx={{ width: '13.9rem',borderRadius:'4px',border:'solid 1px white',backgroundColor:'white' }}
              onChange={(e) => setLat(e.target.value)} label="Enter Latitude" variant="outlined" />
          </div>
          <div>
            <Typography variant="subtitle2" sx={{color:'white'}}>Set Degrees:</Typography>
            <TextField id="outlined-basic"
              sx={{ width: '13.9rem',border:'solid 1px white',borderRadius:'4px',backgroundColor:'white' }}
              onChange={(e) => setDim(e.target.value)} label="Enter Degress" variant="outlined" />
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
