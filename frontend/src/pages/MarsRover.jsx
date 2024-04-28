import React, { useEffect, useState } from 'react'
import APIService from '../Services/APIService'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import './Mars.css'
import MarsCard from '../componets/MarsCard';
import axios from 'axios';

const MarsRover = () => {

    const [marsData, setMarsData] = useState()
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [todayDate, setTodayDate] = useState('');

    console.log(marsData)

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

    const handleEndTimeChange = (date) => {
        setEndTime(date);
    };

    const start = dayjs(startTime).format('YYYY-MM-DD')
    const end = dayjs(endTime).format('YYYY-MM-DD')

    const FetchAPIData = async () => {
            await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/
            photos?earth_date=${start}&api_key=3jQMjnxVQV8vaH1wlg3e2mtM13v7dAebMA4aekZd`)
            .then((response,index) => {
                setMarsData(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
       
    }
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='date-time'>
                    <div>
                        <Typography variant="subtitle2">Start Date</Typography>
                        <DatePicker
                            value={startTime}
                            onChange={handleStartTimeChange}
                            renderInput={(props) => <TextField {...props} error={error && !startTime} />}
                        />
                    </div>
                    <div>
                        <Typography variant="subtitle2">End Date</Typography>
                        <DatePicker value={endTime} onChange={handleEndTimeChange} />
                    </div>
                    <div>
                        <Button variant="outlined" sx={{ padding: '0.7rem 1.5rem', marginTop: '1.2rem' }}
                            onClick={FetchAPIData}>
                            Search
                        </Button>
                    </div>

                </div>
            </LocalizationProvider>
            <div className='cards'> 
            {/* {
                neoObjectsForDate && neoObjectsForDate.map((element,index) => (
                    <MarsCard key={index} />
                ))
            } */}
            </div>
        </>
    );
};

export default MarsRover;

