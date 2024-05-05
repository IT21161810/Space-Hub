import React, { useEffect, useState } from 'react'
import APIService from '../Services/APIService'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';
import './Mars.css'
import MarsCard from '../componets/MarsCard';
import axios from 'axios';
import Loader from '../componets/Loader';
import Aos from 'aos'
import 'aos/dist/aos.css'

const MarsRover = () => {

    const [marsData, setMarsData] = useState()
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [todayDate, setTodayDate] = useState('');
    const [sol, setSole] = useState()
    const [Loading, setLoading] = useState(true)

    let MarsRover = []

    console.log(marsData)

    if (marsData) {
        MarsRover = marsData.photos.slice(0, 20)
    }

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const handleStartTimeChange = (date) => {
        setStartTime(date);
    };

    const start = dayjs(startTime).format('YYYY-MM-DD')
    const end = dayjs(endTime).format('YYYY-MM-DD')

    const FetchAPIData = async () => {
        setLoading(true)
        await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?
            earth_date=${startTime}&api_key=3jQMjnxVQV8vaH1wlg3e2mtM13v7dAebMA4aekZd&sol=${sol}`)
            .then((response) => {
                setMarsData(response.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const defaultData = async () => {
        setLoading(true)
        await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?
        earth_date=2020-5-10&api_key=3jQMjnxVQV8vaH1wlg3e2mtM13v7dAebMA4aekZd&sol=100.8`)
            .then((response) => {
                setMarsData(response.data)
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
        <div className='rover'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='date-time'>
                    <div>
                        <Typography variant="subtitle2" style={{color:'white'}}>Start Date:</Typography>
                        <DatePicker
                            sx={{ marginTop: '0.5rem', border: 'solid 1px white', borderRadius: '4px', backgroundColor: 'white' }}
                            value={startTime}
                            onChange={handleStartTimeChange}
                            renderInput={(props) => <TextField {...props} error={error && !startTime} />} />
                    </div>
                    <div>
                        <Typography variant="subtitle2" style={{color:'white'}}>Sole:</Typography>
                        <TextField sx={{ marginTop: '0.5rem', borderRadius: '4px', border: 'solid 1px white', backgroundColor: 'white' }} id="outlined-basic"
                            onChange={(e) => setSole(e.target.value)} label="Enter sole" variant="outlined" />
                    </div>
                    <div>
                        <Button variant="outlined" sx={{
                            padding: '0.7rem 1.5rem',
                            '&:hover': { backgroundColor: 'white' }, color: 'black',
                            backgroundColor: 'white', marginTop: '1.9rem'
                        }} onClick={FetchAPIData}>
                            Search
                        </Button>
                    </div>
                </div>
            </LocalizationProvider>
            <div className="cards">
                {Loading ? (
                    <Loader /> // Display loader when loading is true
                ) : (
                    marsData?.photos?.slice(0, 20)?.map((rover, index) => (
                        <div data-aos="fade-up">
                            <MarsCard
                                key={index}
                                img_src={rover.img_src}
                                fullName={rover.camera.full_name}
                                cameraName={rover.camera.name}
                                roverName={rover.rover.name}
                                landingDate={rover.rover.landing_date}
                                launchingDate={rover.rover.launch_date}
                                status={rover.rover.status}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MarsRover;

