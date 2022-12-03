import React, { forwardRef } from 'react'

const TopButton = forwardRef(({ isVisible }, ref) => {

    const handleClick = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

  return (
    <div className={`sticky w-full h-20 md:h-40 bottom-4 z-20 flex justify-center transition duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-24'}`}>
        <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full animate-bounce hover:cursor-pointer`} onClick={() => handleClick(ref)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-full h-full stroke-primary opacity-80 hover:opacity-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    </div>
  )
})

export default TopButton