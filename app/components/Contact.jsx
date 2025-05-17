import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'motion/react'


const Contact = () => {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false); // new state

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        setLoading(true); // make sure loading is also handled
        const formData = new FormData(event.target);

        formData.append("access_key", "4b5a42a6-e397-4048-a262-68bd81ad61cf");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            setLoading(false);
            event.target.reset();

            // Clear message after 2 seconds
            setTimeout(() => {
                setResult("");
            }, 2000);
        } else {
            console.log("Error", data);
            setResult(data.message);
            setLoading(false);
        }
    };


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]' id='contact'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-ovo'>Contact With Me</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-ovo'>Get In Touch</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>Please give me your valuable feedback.</motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        className='p-3 outline-none border border-gray-400 rounded-md bg-white' name='name' type='text' placeholder='Enter Your Name' required />
                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className='p-3 outline-none border border-gray-400 rounded-md bg-white' name='email' type='email' placeholder='Enter Your E-mail' required />
                </div>
                <motion.textarea
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    className='mt-2 w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6' name='message' rows='6' placeholder='Enter Your Feedback' required></motion.textarea>

                <motion.button
                    whileInView={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    type='submit'
                    disabled={loading}
                    className='py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 disabled:opacity-60 disabled:cursor-not-allowed'
                >
                    {loading ? (
                        <>

                            <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                            Please wait...
                        </>

                    ) : (
                        <>
                            Submit
                            <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
                        </>
                    )}
                </motion.button>

                {result && <p className='text-center mt-4 text-sm text-gray-700'>{result}</p>}
            </motion.form>
        </motion.div>
    );
};

export default Contact;
