import React from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LikedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id='#contact'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500 to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {''}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed recusandae quisquam dolorum, placeat officia. Sit, corporis nemo? Numquam, delectus?
            </p>
            <div className='social flex flex-row gap-2'>
                <Link href ='github.com'>
                    <Image src={GithubIcon} alt='github icon' />
                </Link>
                <Link href ='github.com'>
                    <Image src={LikedinIcon} alt='github icon' />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col'>
                <div className='mb-6'>
                    <label htmlFor="email" type="email" className='text-white block mb-2 text-sm font-medium'>Your email</label>
                    <input 
                    type="email" 
                    id='email' 
                    required
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='example@gmail.com'/>
                </div>

                <div className='mb-6'>
                    <label htmlFor="subject" type="email" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                    <input 
                    type="text" 
                    id='subject' 
                    required
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='Saying Hi'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor="message" className='text-white block text-sm mb-2 font-medium'>
                        Message
                    </label>
                    <textarea 
                    name="message" 
                    id="message"
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='Write your message' />
                </div>
                <button
                type='submit'
                className='bg-primary-500 hover:bg-primary-600 text-black font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection
