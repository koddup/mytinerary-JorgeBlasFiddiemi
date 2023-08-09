import React, { useState } from 'react';
import LiAndAnchor from './LiAndAnchor';
import { GlobeAmericasIcon, Bars3BottomRightIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import './Nav.css'

const Nav = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "CITIES", link: "/cities" },
        { name: "ABOUT", link: "/about/asd" },
        { name: "CONTACT", link: "/contact" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='w-full top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between bg-white py-4 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <GlobeAmericasIcon className='w-7 h-7 text-blue-600' />
                    <span id='logoTitle'>MyTinerary</span>
                </div>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-100 ease-in-out ${open ? 'top-12 h-[100vh] md:h-auto' : 'top-[-490px] h-auto'}`}>
                    {
                        Links.map((link, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <LiAndAnchor value={link.link} content={link.name} />
                                </React.Fragment>
                            )
                        })
                    }
                    <button type="button" className="md:flex md:ml-8 bg-gray-800 rounded-full md:static" id="user-menu-button">
                        <UserCircleIcon className='w-7 h-7 text-gray-600 bg-white' />
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Nav;