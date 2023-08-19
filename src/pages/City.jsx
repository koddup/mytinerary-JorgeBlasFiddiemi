
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const City = () => {
    const params = useParams()
    const [cityData, setCityData] = useState({})
    const navigate  = useNavigate();

    useEffect(() => {
        getCitiesData()
    }, [])

    const getCitiesData = () => {
        const id = params.id
        axios.get('http://localhost:4000/api/cities/' + id).then((response) => {
            if (response.data) {
                setCityData(response.data.response)
            }
        });
    }


    return (
        <div className='flex-grow'>
            <div className='w-full flex flex-row flex-wrap justify-center items-center px-4'>
                <div className='w-full md:w-[60vw] p-0 rounded-md mx-0 my-4'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate(-1)}>
                        Back
                    </button>
                </div>
                <div className='w-full md:w-[60vw] p-0 rounded-md mx-0 my-4'>
                    <div className='imageContainer' style={{
                        overflow: 'hidden'
                    }}>
                        <img src={cityData.photo} title={cityData.city} alt={`${cityData.city}, ${cityData.country}`} className='eachCityImage' style={{ width: '100%' }} />
                    </div>
                    <div style={{ color: 'white', backgroundColor: 'black' }}>
                        <p className="p-2" style={{ fontWeight: 'bold' }}>{cityData.city}</p>
                        <p className="pb-2 px-2">{cityData.country}</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row flex-wrap justify-center items-center px-4'>
                UNDER CONSTRUCTION
            </div>
        </div>
    )
}

export default City