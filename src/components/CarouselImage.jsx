import React from 'react'
import './CarouselImage.css'

const CarouselImage = ({ ima }) => {
    return (
        <div className='w-1/2' style={{
            position: 'relative', padding: '0.4rem',
        }}>
            <div className='imageContainer'style={{
            overflow: 'hidden'
        }}>
            <img src={ima.photo} title={ima.smalldescription} alt={`${ima.city}, ${ima.country}`} className='eachCarouselImage' />
            <div className='imageLabel'>
                <p style={{ margin: '0' }}>{ima.city}</p>
                <p style={{ margin: '0' }}>{ima.country}</p>
            </div>
            </div>
        </div>
    )
}

export default CarouselImage