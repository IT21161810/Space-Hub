import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apod = () => {

  const [count, setCount] = useState()
  const [Loading, setLoading] = useState(true)
  const [apodData, setApodData] = useState([])

  console.log(apodData)

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
    setLoading(false)
    await axios.get(`https://api.nasa.gov/planetary/apod?api_key=3jQMjnxVQV8vaH1wlg3e2mtM13v7dAebMA4aekZd`)
      .then((response) => {
        setApodData(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    defaultData()
  },[])

  return (
    <div>
      <div className='apod'>
        <div>
          <Typography variant="subtitle2">Set Image Count</Typography>
          <TextField id="outlined-basic"
            onChange={(e) => setCount(e.target.value)} label="Outlined" variant="outlined" />
        </div>
        <div>
          <Button variant="outlined" sx={{ padding: '0.7rem 1.5rem', marginTop: '1.4rem' }} onClick={fetchData}>
            Search
          </Button>
        </div>
        
      </div>
    </div>
  )
}

export default Apod
