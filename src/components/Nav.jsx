import React, { useState } from 'react';
import LiAndAnchor from './LiAndAnchor';
import { GlobeAmericasIcon, Bars3BottomRightIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 px-7'>
                {/* logo */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <GlobeAmericasIcon className='w-7 h-7 text-blue-600' />
                    <span>MyTinerary</span>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* link items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-100 ease-in-out ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <LiAndAnchor value={link.link} content={link.name} />
                                </React.Fragment>
                            )
                        })
                    }
                    {/* User button */}
                    <button type="button" className="md:flex md:ml-8 bg-gray-800 rounded-full md:static" id="user-menu-button">
                        <UserCircleIcon className='w-7 h-7 text-gray-600 bg-white' />
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Nav;

// const Nav = ({ links }) => {
//     return (
//         <nav className="bg-white border-gray-200 md:w-auto w-full">
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <div className="font-medium p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 items-center flex gap-4 justify-between w-full flex-col md:flex-row md:border-0 md:bg-white">
//                     <ul className="flex flex-col md:flex-row md:space-x-8 md:w-auto w-full">
//                         {links.map((link, indice) => {
//                             return (
//                                 <React.Fragment key={indice}>
//                                     <LiAndAnchor value={link.value} content={link.content} />
//                                 </React.Fragment>
//                             )
//                         })}
//                     </ul>
//                     <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
//                         <img className="w-8 h-8 rounded-full" src={reactLogo} alt="user photo" />
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     )
// }