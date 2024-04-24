import React, { useEffect, useState } from 'react'
import APIService from '../Services/APIService'

const MarsRover = () => {

    const [marsData, setMarsData] = useState([])
    console.log(marsData)
    
    useEffect(() => {

        async function FetchAPIData() {
            APIService.getMarsRoverData()
            .then((response) => {
                setMarsData(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }

        FetchAPIData()
    }, [])
    return (
        <div>

        </div>
    )
}

export default MarsRover
