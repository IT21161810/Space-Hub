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

    if (marsData) {
        MarsRover = marsData.photos.slice(0, 20)
    }

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    // useEffect(() => {
    //     const getFormattedDate = () => {
    //         const today = new Date();
    //         const year = today.getFullYear();
    //         const month = String(today.getMonth() + 1).padStart(2, '0');
    //         const day = String(today.getDate()).padStart(2, '0');
    //         return `${year}-${month}-${day}`;
    //     };
    //     setTodayDate(getFormattedDate());
    // }, []);


    // let neoObjectsForDate
    // if (marsData) {
    //     neoObjectsForDate = marsData.near_earth_objects[startTime ? startTime : todayDate];
    //     console.log(neoObjectsForDate.slice(0, 8))
    // }

    const handleStartTimeChange = (date) => {
        setStartTime(date);
    };

    const start = dayjs(startTime).format('YYYY-MM-DD')
    const end = dayjs(endTime).format('YYYY-MM-DD')

    const handleExpandClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    };

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
        earth_date=2015-6-3&api_key=3jQMjnxVQV8vaH1wlg3e2mtM13v7dAebMA4aekZd&sol=1000`)
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
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='date-time'>
                    <div>
                        <Typography variant="subtitle2">Start Date</Typography>
                        <DatePicker
                            sx={{ marginTop: '0.5rem' }}
                            value={startTime}
                            onChange={handleStartTimeChange}
                            renderInput={(props) => <TextField {...props} error={error && !startTime} />} />
                    </div>
                    <div>
                        <Typography variant="subtitle2">Enter Sole</Typography>
                        <TextField sx={{ marginTop: '0.5rem' }} id="outlined-basic"
                            onChange={(e) => setSole(e.target.value)} label="Outlined" variant="outlined" />
                    </div>
                    <div>
                        <Button variant="outlined" sx={{ padding: '0.7rem 1.5rem', marginTop: '1.2rem' }} onClick={defaultData}>
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
        </>
    );
};

export default MarsRover;

