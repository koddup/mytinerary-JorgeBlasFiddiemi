import React, { useState } from 'react'
import Arrow from './Arrow'
import CarouselSlide from './CarouselSlide';
import images from '../data/images.json'

const Carousel = () => {
    const chunkSize = 4;
    let imagesPacks = []
    for (let i = 0; i < images.length; i += chunkSize) {
        const chunk = images.slice(i, i + chunkSize);
        imagesPacks.push(chunk)
    }
    const [index, setIndex] = useState(0)
    const next = () => {
        if (index < imagesPacks.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }
    const prev = () => {
        if (index > 0) {
            setIndex(index - 1)
        } else {
            setIndex(imagesPacks.length - 1)
        }
    }
    const setBullet = (indice) => {
        setIndex(indice)
    }
    return (
        <div className='w-full flex justify-center items-center'>
            <Arrow direction='left' alt='flecha-i' fn={prev} />
            <div className='bg-slate-500 w-[50vw] p-2 rounded-md m-4'>
                <CarouselSlide images={imagesPacks[index]} />
                <div className='flex w-full justify-center mt-4'>
                    {
                        imagesPacks.map((item, indexMap) => {
                            if (indexMap === index) return <span key={indexMap} className='cursor-pointer'>⚫</span>
                            else return <span key={indexMap} className='cursor-pointer' onClick={() => setBullet(indexMap)}>⚪</span>
                        })
                    }
                </div>
            </div>
            <Arrow direction='right' alt='flecha-d' fn={next} />
        </div>
    )
}

export default Carousel