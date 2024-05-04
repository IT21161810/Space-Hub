import React from 'react'
import space from '../assets/space.jpeg'
import './LandPage.css'
import HomeCard from '../componets/HomeCard'
import earth from '../assets/earth.jpg'
import apod from '../assets/apod.jpg'
import mars from '../assets/mars.jpg'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const nav = useNavigate()

  const Data = [
    {
      img:earth,
      title:'Earth Imagery',
      description:'More and more NASA imagery is being made available via web services (WMS, WMTS, etc.)',
      path:'/earth'
    },
    {
      img:apod,
      title:'Astronomy Picture of Day',
      description:'One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website.',
      path:'/apod'
    },
    {
      img:mars,
      title:'Mars Rover Photos',
      description:'This API is designed to collect image data gathered by NASA, Opportunity, and Spirit rovers.',
      path:'/mars'
    }
]

  return (
    <section className='heros'>
      <div className='contents'>
        <h1>Welcome to Space Hub</h1>
        <h2>Discover Nasa API</h2>
        <p>
          NASA API's launch makes NASA data, including imagery, eminently accessible to application developers.
          The NASA STI Repository OpenAPI is the recommended mechanism for access to NASA's public collection
          of STI, and is available along with API documentation and guidance
        </p>
        <div className='homeCard'>
          {
            Data.map((element,index) => (
              <HomeCard title={element.title} img={element.img} description={element.description} path={element.path} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default HomePage
