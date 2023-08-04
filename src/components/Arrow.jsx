import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Arrow = ({ direction, alt, fn }) => {
    let icon = null;

    if (direction === 'left') {
        icon = <ChevronLeftIcon className='w-7 h-7 text-blue-600' />;
    } else if (direction === 'right') {
        icon = <ChevronRightIcon className='w-7 h-7 text-blue-600' />;
    }
    return (
        <div className='p-4 rounded-full bg-white cursor-pointer' onClick={fn}>
            {icon}
        </div>
    )
}

export default Arrow