import React from 'react'
import { SocialIcon } from 'react-social-icons'

export const Socials = () => {
  return (
    <div className="flex items-center">
        <SocialIcon url='https://www.linkedin.com/in/reytiartur' target="_blank" style={{height: '60px', width: '60px'}} bgColor='transparent' fgColor='black' className='hover:fill-primary focus:fill-primary' />
        <SocialIcon url='https://www.github.com/reytiartur' target="_blank" style={{height: '60px', width: '60px'}} bgColor='transparent' fgColor='black' className='hover:fill-primary focus:fill-primary' />
    </div>
  )
}
