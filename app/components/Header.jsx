'use client';

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.profile_img} alt='' className='rounded-full w-24' />
            </motion.div>

            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
                <span>Hi! I'm </span>
                <span className='text-purple-600'>
                    <Typewriter
                        words={['Haider Khan', 'a Developer', 'a Freelancer', 'a Coder']}
                        loop={0} // 0 means infinite loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
                <Image src={assets.hand_icon} alt='' className='rounded-full w-6' />
            </motion.h3>

            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6xl lg:text-[66px]'>Full Stack Web Developer.</motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2xl mx-auto font-ovo leading-7 md:leading-6'>
                I'm a full stack developer from India who enjoys building web applications using both frontend and backend technologies.
                I also take on freelance projects, helping clients bring their ideas to life through clean, user-friendly websites.
                I'm always eager to learn and grow as a developer.
            </motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
                    Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </motion.a>

                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    href="/resume.docx" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                    My Resume <Image src={assets.download_icon} alt='' className='w-4' />
                </motion.a>
            </div>
        </div>
    )
}

export default Header
