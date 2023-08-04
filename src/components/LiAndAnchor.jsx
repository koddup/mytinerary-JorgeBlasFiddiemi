import React from 'react'

const LiAndAnchor = (props) => {
    
    const {value, content} = props

    return (
        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <a className="text-gray-800 hover:text-blue-400 duration-500" href={value}>{content}</a>
        </li>
    )
}

export default LiAndAnchor