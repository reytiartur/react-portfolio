import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Header = () => {
  return (
    <header className='py-3 px-4 flex justify-between mx-auto max-w-[900px] w-full self-stretch sticky top-0'>
        <div className="flex items-center">
            <SocialIcon url='https://www.linkedin.com/in/reytiartur' bgColor='transparent' fgColor='black' className='hover:fill-primary focus:fill-primary' />
            <SocialIcon url='https://www.github.com/reytiartur' bgColor='transparent' fgColor='black' className='hover:fill-primary focus:fill-primary' />
        </div>
        <div className="flex items-center">
            <SocialIcon network='email' bgColor='transparent' fgColor='black' className='hover:fill-primary cursor-pointer' />
            <p className='hidden md:block text-gray-300 text-lg cursor-pointer' url='#contacts'>Contact Me!</p>
        </div>  
    </header>
  )
}

export default Header