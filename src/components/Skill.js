import React from 'react'

const Skill = ({ img, name }) => {
  return (
    <div className='w-16 h-16 md:w-24 md:h-24 group rounded-full overflow-hidden relative cursor-default text-xs md:text-base'>
        <img src={img} alt="" className='object-cover h-full w-full' />
        <div className='h-full w-full z-10 absolute top-0 left-0 opacity-0 group-hover:opacity-75 bg-gray-100 transition-all duration-500 ease-out'>
            <p className='h-full w-full flex items-center justify-center opacity-100 text-black md:text-lg font-semibold'>{name}</p>
        </div>
    </div>
  )
}

export default Skill