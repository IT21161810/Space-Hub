import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import MarsRover from '../pages/MarsRover';

const NasaRoutes = () => {
    return (
        <div>
            <HomePage />
            <Routes>
                <Route path='/mars' element={<MarsRover/>}/>
            </Routes>
        </div>
    )
}

export default NasaRoutes
