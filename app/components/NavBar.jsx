import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const NavBar = () => {

    const [isScroll, setIsScroll] = useState(false);

    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, [])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-gray-100 bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top">
                    {/* <Image src={assets.logo} alt='img' className='w-28 cursor-pointer ' /> */}
                    <h1 className='text-2xl md:text-3xl font-medium'>Haider<span className='text-red-700'>.</span></h1>
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50"}`}>
                    <li className='font-ovo'><a href="#top">Home</a></li>
                    <li className='font-ovo'><a href="#about">About Me</a></li>
                    <li className='font-ovo'><a href="#services">Services</a></li>
                    <li className='font-ovo'><a href="#work">My Work</a></li>
                    <li className='font-ovo'><a href="#contact">Contact Me</a></li>
                </ul>
                <div className='flex items-center gap-4'>

                    <button className=''>
                        <Image src={assets.moon_icon} alt='' className='w-6' />
                    </button>

                    <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4' href="#contact">Contact <Image src={assets.arrow_icon} alt='img' className='w-3' /> </a>
                    <button className='block md:hidden ml-3'>
                        <Image onClick={openMenu} src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* MOBILE MENU */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 translation duration-500'>
                    <div onClick={closeMenu} className='absolute right-6 top-6'>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li onClick={closeMenu} className='font-ovo'><a href="#top">Home</a></li>
                    <li onClick={closeMenu} className='font-ovo'><a href="#about">About Me</a></li>
                    <li onClick={closeMenu} className='font-ovo'><a href="#services">Services</a></li>
                    <li onClick={closeMenu} className='font-ovo'><a href="#twork">My Work</a></li>
                    <li onClick={closeMenu} className='font-ovo'><a href="#contact">Contact Me</a></li>
                </ul>

            </nav>
        </>
    )
}

export default NavBar
