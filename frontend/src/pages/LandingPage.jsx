import React from 'react'
import space from '../assets/space.jpeg'
import bannerBg from '../assets/banner-bg.png'
import colorBg from '../assets/color-sharp.png'
import SpaceGuy from '../assets/header-img.svg'
import './home.css'

const LandingPage = () => {
    return (
        <section className='hero'>
            <div className='content'>
                <h1>Discover the Space</h1>
                <p>
                NASA API's launch makes NASA data, including imagery, eminently accessible to application developers. 
                The NASA STI Repository OpenAPI is the recommended mechanism for access to NASA's public collection 
                of STI, and is available along with API documentation and guidance
                </p>
                <a href='/login'>Let's Explore</a>
            </div>
            <img src={SpaceGuy} alt='Space Guy' className='space'/>
        </section>
    )
}

export default LandingPage
