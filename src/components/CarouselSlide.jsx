import React from 'react'
import CarouselImage from './CarouselImage'

const CarouselSlide = ({ images }) => {
    return (
        <div className='flex flex-wrap'>
            {
                images.map((eachImage, index) => {
                    return (
                        <CarouselImage ima={eachImage} key={index} />
                    )
                })
            }
        </div>
    )
}

export default CarouselSlide