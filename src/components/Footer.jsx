import React from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='w-full bg-black text-white flex flex-row justify-evenly py-2 text-sm'>
            <div className='flex flex-col w-50'>
                <span style={{'fontWeight': 'bold'}}>Contact Info</span>
                <Link to='https://www.google.com/maps/place/712+Red+Bark+Ln,+Henderson,+NV+89011,+EE.+UU./data=!4m2!3m1!1s0x80c8d0b89793735f:0x82738f1bb7cadcb8?sa=X&ved=2ahUKEwjB2ZrzvNCAAxXNK7kGHZdSDK4Q8gF6BAgREAA&ved=2ahUKEwjB2ZrzvNCAAxXNK7kGHZdSDK4Q8gF6BAgUEAI'>
                    <div className='flex flex-row'>
                        <MapPinIcon className='w-6 h-6 px-1' /><span> 742 Evergreen Terrace, Springfield</span>
                    </div>
                </Link>
                <Link to='tel:8005550000'>
                    <div className='flex flex-row'>
                        <PhoneIcon className='w-6 h-6 px-1' /><span>(800) 555-0000</span>
                    </div>
                </Link>
                <Link to='mailto:my@tinerary.com'>
                    <div className='flex flex-row'>
                        <EnvelopeIcon className='w-6 h-6 px-1' /><span>my@tinerary.com</span>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col w-50'>
                <Link to=''>
                    <div className='flex flex-row p-1'>
                        <img src="src/assets/facebook.png" alt="Facebook" style={{ height: 25, filter: 'invert(1)' }}/>
                    </div>
                </Link>
                <Link to=''>
                    <div className='flex flex-row p-1'>
                        <img src="src/assets/instagram.png" alt="Instagram" style={{ height: 25, filter: 'invert(1)' }}/>
                    </div>
                </Link>
                <Link to=''>
                    <div className='flex flex-row p-1'>
                        <img src="src/assets/youtube.png" alt="Youtube" style={{ height: 25, filter: 'invert(1)' }}/>
                    </div>
                </Link>
            </div>
        </footer>
    )
}

export default Footer