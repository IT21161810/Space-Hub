import React from 'react'
import space from '../assets/space.jpeg'
import bannerBg from '../assets/banner-bg.png'
import colorBg from '../assets/color-sharp.png'
import './home.css'

const LandingPage = () => {
    return (
        <section className='hero'>
            <div className='content'>
                <h1>Be creative</h1>
                <p>
                    NASA API's launch makes NASA data, including imagery, eminently
                    accessible to application developers. The NASA STI Repositor
                </p>
                <a href='#'>Start now</a>
            </div>
        </section>
    )
}

export default LandingPage
