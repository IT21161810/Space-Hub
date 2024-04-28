import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import MarsRover from '../pages/MarsRover';
import EarthImagery from '../pages/EarthImagery';
import Apod from '../pages/Apod';

const NasaRoutes = () => {
    return (
        <div>
            <HomePage />
            <Routes>
                <Route path='/mars' element={<MarsRover/>}/>
                <Route path='/earth' element={<EarthImagery/>}/>
                <Route path='/apod' element={<Apod/>} />
            </Routes>
        </div>
    )
}

export default NasaRoutes
