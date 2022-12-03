import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Avatar from '../assets/Avatar.png'

const About = () => {
  return (
    <div className='relative flex flex-col flex-shrink-0 items-center h-screen snap-center justify-center'>
        <img src={Avatar} alt="Avatar" className='w-28 h-28 mb-4 sm:h-40 sm:w-40 md:mb-8' />
        <div className="flex text-gray-200 text-xl md:text-3xl">
            <Typewriter words={['Frontend Developer', '<ReactJS Developer />', 'JavaScript Developer']} loop={false} cursor cursorColor='#f5e642' />
        </div>
        <div className="flex gap-3 z-10 text-lg md:text-xl md:gap-6 mt-1 md:text-zinc-500 text-gray-400">
            <a href="/#skills" className='hover:text-gray-200'>Skills</a>
            <a href="/#projects" className='hover:text-gray-200'>Projects</a>
            <a href="/#contacts" className='hover:text-gray-200'>Reach out</a>
        </div>
     
        <div className="absolute h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full border border-primary animate-ping opacity-60" />
        <div className="absolute h-[350px] w-[350px] md:h-[500px] md:w-[500px] p-1 rounded-full border-2 border-primary animate-pulse opacity-70" />
    </div>
  )
}

export default About