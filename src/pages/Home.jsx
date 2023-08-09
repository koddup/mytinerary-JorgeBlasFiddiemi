import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <div className='flex-grow'>
            <Hero />
            <Carousel />
        </div>
    )
}

export default Home