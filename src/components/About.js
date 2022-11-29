import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Avatar from '../assets/Avatar.png'

const About = () => {
  return (
    <div className='flex flex-col items-center md:h-[50vh] md:justify-center'>
        <img src={Avatar} alt="Avatar" className='w-20 h-20 mt-10 mb-4 md:h-40 md:w-40 md:mb-8' />
        <div className="flex text-gray-200 text-xl md:text-3xl">
            <Typewriter words={['Frontend Developer', '<ReactJS Developer />', 'JavaScript Developer']} loop={false} cursor cursorColor='#f5e642' />
        </div>
        <div className="flex gap-3 text-lg md:text-xl md:gap-6 mt-1 md:text-zinc-500 text-gray-400">
            <a href="http://" className='hover:text-gray-200'>Skills</a>
            <a href="http://" className='hover:text-gray-200'>Projects</a>
            <a href="http://" className='hover:text-gray-200'>Reach out</a>
        </div>
    </div>
  )
}

export default About