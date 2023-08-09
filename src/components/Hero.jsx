import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero-image'>
            <section className='hero-text'>
                <h1>MyTinerary</h1>
                <h2>Find your perfect trip, designed by insiders who know and love their cities</h2>
                <Link to="/cities">
                    Travel now!
                </Link>
            </section>
        </div>
    )
}

export default Hero