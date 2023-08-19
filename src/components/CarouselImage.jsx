import React from 'react'
import './CarouselImage.css'
import { Link } from 'react-router-dom'

const CarouselImage = ({ ima }) => {
    return (
        <div className='w-1/2' style={{
            position: 'relative', padding: '0.4rem',
        }}>
                <Link to={`cities/${ima._id}`}>
                <div className='imageContainer' style={{
                    overflow: 'hidden'
                }}>
                    <img src={ima.photo} title={ima.smalldescription} alt={`${ima.city}, ${ima.country}`} className='eachCarouselImage' />
                    <div className='imageLabel'>
                        <p style={{ margin: '0' }}>{ima.city}</p>
                        <p style={{ margin: '0' }}>{ima.country}</p>
                    </div>
                </div>
        </Link>
            </div>
    )
}

export default CarouselImage