import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Socials } from './Socials'

const Header = () => {
  return (
    <header className='py-3 px-4 flex justify-between mx-auto max-w-[1000px] w-full self-stretch sticky top-0 z-50'>
        <Socials />
        <a href="/#contacts">
          <div className="flex items-center">
            <SocialIcon style={{height: '60px', width: '60px'}} network='email' bgColor='transparent' fgColor='black' className='hover:fill-primary cursor-pointer' />
            <p className='hidden md:block text-gray-300 text-lg cursor-pointer' url='#contacts'>Contact Me!</p>
          </div>
        </a> 
    </header>
  )
}

export default Header