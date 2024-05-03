import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Mars.css'
import Picture from '../componets/Picture'
import Loader from '../componets/Loader'

const Apod = () => {
  
  const [count, setCount] = useState()
  const [Loading, setLoading] = useState(true)
  const [apodData, setApodData] = useState()

  console.log(import.meta.env.VITE_KEY)

  const fetchData = async () => {
    setLoading(true)
    await axios.get(`https://api.nasa.gov/planetary/apod?api_key=3jQMjnxVQV8vaH1wlg3e2mtM13v7dAebMA4aekZd&count=${count}`)
      .then((response) => {
        setApodData(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const defaultData = async () => {
    setLoading(true)
    await axios.get(`https://api.nasa.gov/planetary/apod?api_key=3jQMjnxVQV8vaH1wlg3e2mtM13v7dAebMA4aekZd&count=${6}`)
      .then((response) => {
        setApodData(response.data)
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
    <div className='apodPage'>
      <div >
        <div className='apod'>
          <div>
            <Typography sx={{ marginBottom: '0.5rem' }} variant="subtitle2">Set Astronomy Picture Count: </Typography>
            <TextField placeholder='Enter count'
            sx={{backgroundColor:'white',borderRadius:'4px'}}
              onChange={(e) => setCount(e.target.value)} label="" variant="outlined" />
          </div>
          <div>
            <Button variant="outlined" sx={{ padding: '0.7rem 1.5rem',
            marginTop: '1.9rem',color:'black',backgroundColor:'white',
            '&:hover': { border:'solid 1px black',backgroundColor:'white'},
            border:'solid 2px black'}}
            onClick={fetchData}>
              Search
            </Button>
          </div>
        </div>


        <div className='apods'>
          {
            Loading ? (
              <Loader />
            ) : (
              apodData && apodData.map((apod, index) => (
                <Picture key={index} copyright={apod.copyright}
                  date={apod.date}
                  explanation={apod.explanation}
                  hdurl={apod.hdurl}
                  title={apod.title} />
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Apod
