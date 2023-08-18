import React from 'react'
import './CityCard.css'
import { Link } from 'react-router-dom'

const CityCard = ({ city }) => {
    return (
        <Link to={`${city._id}`}>
        <div className='w-50' style={{
            position: 'relative', padding: '0.4rem',
        }}>
            <div className='imageContainer'style={{
            overflow: 'hidden'
        }}>
            <img src={city.photo} title={city.city} alt={`${city.city}, ${city.country}`} className='eachCityImage' />
            <div className='imageLabel'>
                <p style={{ margin: '0' }}>{city.city}</p>
                <p style={{ margin: '0' }}>{city.country}</p>
            </div>
            </div>
        </div>
            </Link>
    )
}

export default CityCard