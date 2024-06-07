'use client'
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';



const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-300'>Hi, I'm {" "}
                    <br />
                    </span>
                    <TypeAnimation
                        sequence={[
                            'William',
                            1000, 
                            'Frontend Developer',
                            1000,
                            'Mobile Developer',
                            1000,
                            'UI/UX Designer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-x'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, id!</p>
                <div className='mt-6'>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-700 via-primary-400 to-secondary-500 hover:bg-secondary-200 text-black'>Hire Me</button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-700 via-primary-400 to-secondary-500 hover:bg-secondary-900 mt-3'>
                        <span className='block bg-[#121212] hover:bg-secondary-900 rounded-full text-white px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </motion.div>
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className='col-span-4 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-transparent w-[300px] h-[300px] relative border border-white overflow-hidden'>
                    <Image
                        src="/images/me.png"
                        alt='hero image'
                        className='absolute transform -translate-x-2/4 -translate-y-2/3 top-2/4 left-[60%]'
                        width={300}
                        height={300}
                    /> 
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection
