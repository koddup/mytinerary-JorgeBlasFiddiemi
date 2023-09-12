import React, { useState } from 'react';
import LiAndAnchor from './LiAndAnchor';
import { GlobeAmericasIcon, Bars3BottomRightIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import './Nav.css'
import { useSelector } from 'react-redux';

const Nav = () => {
    const { user, token } = useSelector(store => store.authReducer)
    console.log(user)
    let Links = [
        { name: "HOME", link: "/" },
        { name: "CITIES", link: "/cities" },
        { name: "ABOUT", link: "/about/asd" },
        { name: "CONTACT", link: "/contact" },
    ];
    if (Object.keys(user).length === 0){
        Links.push({ name: "SIGNIN", link: "/signin" })
        Links.push({ name: "SIGNUP", link: "/signup" })
    } else {
        Links.push({ name: "SIGNOUT", link: "/signout" })
    }

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
                    {user?.photo &&
                        <div className='ps-4'>
                            <img src={user.photo} alt="Profile picture" className="border w-10 h-10 rounded-full" />
                        </div>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Nav;