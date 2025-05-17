import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                {/* <Image alt='' /> */}
                <p className='mx-auto text-3xl font-medium'>Haider<span className='text-red-700'>.</span></p>
                <div className='flex w-max items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='' className='w-6' />
                    hayderkhan24122004@gmail.com
                </div>
            </div>
            <div className='text-sm sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Haider Khan. All rights reserved.</p>
                <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/Haider-khangit551">Github</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/haider-khan-2735aa252">Linkdin</a></li>
                    <li><a target='_blank' href="https://instagram.com/hayder12704">Twitter</a></li>
                    <li><a target='_blank' href="https://github.com/Haider-khangit551">Instagram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
