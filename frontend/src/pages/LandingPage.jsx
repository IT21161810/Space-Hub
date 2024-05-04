import React, { useEffect } from 'react'
import space from '../assets/space.jpeg'
import bannerBg from '../assets/banner-bg.png'
import colorBg from '../assets/color-sharp.png'
import SpaceGuy from '../assets/header-img.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './home.css'

const LandingPage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className='hero'>
            <div className='content' data-aos="fade-left">
                <h1>Discover the Space</h1>
                <p>
                NASA API's launch makes NASA data, including imagery, eminently accessible to application developers. 
                The NASA STI Repository OpenAPI is the recommended mechanism for access to NASA's public collection 
                of STI, and is available along with API documentation and guidance
                </p>
                <a href='/login'>Let's Explore</a>
            </div>
            <img src={SpaceGuy} data-aos="fade-left" alt='Space Guy' className='space'/>
        </section>
    )
}

export default LandingPage
