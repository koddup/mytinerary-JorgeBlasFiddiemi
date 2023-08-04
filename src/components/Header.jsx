import React from 'react'
import Nav from './Nav'

const links = [
    { value: '#', content: 'Link 1', id: '1' },
    { value: '#', content: 'Link 2', id: '2' },
    { value: '#', content: 'Link 3', id: '3' },
    { value: '#', content: 'Link 4', id: '4' },
]

const Header = () => {
    return (
        <header className='flex flex-col items-center justify-between md:flex-row flex-grow'>
            <Nav links={links} />
        </header>
    )
}

export default Header