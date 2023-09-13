import React, { useState, useEffect } from 'react'
import Arrow from './Arrow'
import CarouselSlide from './CarouselSlide';
import './Carousel.css'
import { server } from '../utils/axios';

const Carousel = () => {
    const [index, setIndex] = useState(0)
    const [cities, setCities] = useState([])
    const [imagesPacks, setImagesPacks] = useState([])
    const getCities = async (searchCity) => {
        try {
            const res = await server.get('/cities', {
                params: {
                    city: searchCity
                }
            })
            setCities(res.data.response)
        } catch (error) {
            console.log(error)
            setCities([])
        }
    }
    useEffect(() => {
        getCities()
    }, [])

    useEffect(() => {
        const chunkSize = 4;
        const updatedImagesPacks = [];
        for (let i = 0; i < cities.length; i += chunkSize) {
            const chunk = cities.slice(i, i + chunkSize);
            updatedImagesPacks.push(chunk);
        }
        setImagesPacks(updatedImagesPacks)
        setIndex(0)
    }, [cities]);

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
    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 4000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className='w-full flex justify-center items-center'>
            <Arrow direction='left' alt='flecha-i' fn={prev} />
            <div id='slideshow' className='w-full md:w-[60vw] p-0 rounded-md mx-0 my-4'>
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