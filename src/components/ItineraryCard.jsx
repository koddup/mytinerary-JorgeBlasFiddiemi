import React from 'react'
import { CurrencyDollarIcon, HandThumbUpIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline'

const ItineraryCard = ({ itinerary }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 m-4">
            <img src={(itinerary.picture != "image_url" && itinerary.picture != "") ? itinerary.picture : "https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/104677EA.jpg&w=80&zc=1"} className="w-full rounded-md" style={{
                objectFit: "cover", width: "100%", height: "200px"
            }} alt={itinerary.name} />
            <div className="mt-4">
                <h5 className="text-xl font-semibold">{itinerary.name}</h5>
                <div className="flex items-center pt-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                        <img src={itinerary.postedBy.photo} alt={`${itinerary.postedBy.name}'s profile`} className="w-full h-full object-cover" />
                    </div>
                    <p className="flex items-center ps-2">Posted by: <b>{itinerary.postedBy.name} {itinerary.postedBy.lastName}</b></p>
                </div>
                <p className="flex items-center pt-4"><HandThumbUpIcon className='w-6 h-6 px-1 text-blue-600' /> {itinerary.likes}</p>
                <p className="pt-2 flex items-center"><ClockIcon className='w-6 h-6 px-1 text-blue-600' /> {itinerary.duration} hours</p>
                <div className="pt-2 flex items-center">
                    <p className="text-green-500 flex items-center">
                        {Array.from({ length: 5 }, (v, i) => (
                            <span key={i} className={`${i < itinerary.price ? 'text-green-600' : 'text-gray-400'}`}>
                                <CurrencyDollarIcon className='w-6 h-6 px-0' />
                            </span>
                        ))}
                    </p>
                </div>
                <p className="mt-2 flex items-center"><TagIcon className='w-6 h-6 px-1 text-blue-600' /> {itinerary.tags.join(', ')}</p>

            </div>
            <div className="mt-8 flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md "
                    onClick={() => { document.getElementById(`popup-${itinerary.__id}`).style.display = 'block'; }}>
                    View more
                </button>
            </div>
            <div
                id={`popup-${itinerary.__id}`}
                className="fixed top-[30vh] left-[45vw] flex justify-center items-center text-black"
                style={{ display: 'none' }}
            >
                <div className="bg-gray-200 p-4 rounded-lg">
                    <p>There are no activities yet</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-2 rounded-md"
                        onClick={() => { document.getElementById(`popup-${itinerary.__id}`).style.display = 'none'; }}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )


}

export default ItineraryCard