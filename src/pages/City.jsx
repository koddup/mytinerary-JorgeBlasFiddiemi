
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getCity } from '../redux/actions/citiesActions';
import { getItinerariesOfCity } from '../redux/actions/itinerariesActions';
import ItineraryCard from '../components/ItineraryCard';

const City = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { loading, city } = useSelector(store => store.citiesReducer)
    const { itineraries } = useSelector(store => store.itinerariesReducer)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getItinerariesOfCity(id));
            await dispatch(getCity(id));
        };
        fetchData();
    }, [])

    if (loading) {
        return <div className='flex-grow'><h1>Loading</h1></div>
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
                        <img src={city.photo} title={city.city} alt={`${city.city}, ${city.country}`} className='eachCityImage' style={{ width: '100%' }} />
                    </div>
                    <div style={{ color: 'white', backgroundColor: 'black' }}>
                        <p className="p-2" style={{ fontWeight: 'bold' }}>{city.city}</p>
                        <p className="pb-2 px-2">{city.country}</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row flex-wrap justify-center items-center px-4'>
                {

                    itineraries.length > 0 ? itineraries.map((eachItinerary, index) => {
                        return (
                            <ItineraryCard itinerary={eachItinerary} key={index} />
                        )
                    }) :
                        <div className="bg-white rounded-lg shadow-lg p-4 m-4">
                            <p className="text-lg font-semibold">No itineraries found</p>
                            <p className="text-gray-600">It seems there are no itineraries available right now. Please check back later for more options.</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default City