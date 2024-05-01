import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import MarsRover from '../pages/MarsRover';
import EarthImagery from '../pages/EarthImagery';
import Apod from '../pages/Apod';
import Register from '../pages/Register';
import Login from '../pages/Login';

const NasaRoutes = () => {
    return (
        <div>

            <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/mars' element={<MarsRover />} />
                <Route path='/earth' element={<EarthImagery />} />
                <Route path='/apod' element={<Apod />} />
            </Routes>
        </div>
    )
}

export default NasaRoutes
