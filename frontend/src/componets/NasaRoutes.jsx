import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';

const NasaRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
        </div>
    )
}

export default NasaRoutes
