'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { markAssetError } from 'next/dist/client/route-loader'

const AnimatedNumbers = dynamic(() => {return import ('react-animated-numbers')}, {ssr: false})

const achivmentList = [
    {
        metric: 'Projects',
        value: '3',
        postfix: '+',
    },
    {
        prefix: '~',
        metric: 'Users',
        value: '10',
    },
    {
        metric: 'Years',
        value: '2',
    },
]

const AchievmentsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='sm:border-[#33353F] sm:border py-8 px-7 rounded-md flex flex-col sm:flex-row items-center justify-between'>
        {achivmentList.map((achivment, index) => {
          return (
            <div key={index} className='flex flex-col items-center justify-center mx-4'>
                <h2 className='text-white text-4xl font-bold flex flex-row'>
                    {achivment.prefix}
                <AnimatedNumbers
                includeComma animateToNumber={parseInt(achivment.value)}
                locale='en-US'
                className='text-white text-4xl font-bold'
                configs={(_, index) => {
                    return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                    }
                }} />
                {achivment.postfix}
                </h2>
                <p className='text-[#ADB7BE] text-base'>{achivment.metric}</p>
            </div>
          )
        })}
        </div>
    </div>
  )
}

export default AchievmentsSection
