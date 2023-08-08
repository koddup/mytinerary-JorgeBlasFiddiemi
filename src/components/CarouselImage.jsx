import React from 'react'

const CarouselImage = ({ ima }) => {
    return (
        <div className='w-1/2' style={{ position: 'relative', padding: '0.4rem' }}>
            <img src={ima.src} alt={`${ima.city}, ${ima.country}`} style={{ objectFit: 'cover', width: '100%', height: '200px' }} />
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    margin: '0.4rem',
                    textAlign: 'center',
                }}
            >
                <p style={{ margin: '0' }}>{ima.city}</p>
                <p style={{ margin: '0' }}>{ima.country}</p>
            </div>
        </div>
    )
}

export default CarouselImage